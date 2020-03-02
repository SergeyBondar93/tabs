import React, { useRef, useCallback, useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { LabelTab } from "./LabelTab";
import { ScrollButton } from "./ScrollButton";
import { getContentStyles } from "./utils";

const opacityTime = 300;

export const Tabs = ({
  items = [],
  current: currentProps = 0,
  shouldFitContainer = true
}) => {
  const [tabsLabels, setTabsLabels] = useState([]);
  const [current, setCurrent] = useState(currentProps);
  const tabLabelWrapperRef = useRef({ scrollWidth: 0 });
  const scrollRef = useRef(null);
  const [needNavButtons, setNeedNavButtons] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [hightlightParams, setHightlightParams] = useState({
    left: 0,
    width: 0
  });

  useEffect(() => {
    setCurrent(currentProps);
  }, [currentProps]);

  useEffect(() => {
    if (!tabLabelWrapperRef.current) return;
    setNeedNavButtons(
      tabLabelWrapperRef.current.scrollWidth >
        tabLabelWrapperRef.current.offsetWidth
    );
  }, [tabLabelWrapperRef.current.scrollWidth]);

  useEffect(() => {
    setTabsLabels((items || []).map(({ label }) => label));
  }, [items]);  

  const handleChange = useCallback(
    (newIndex, { width, left }, changeOpacity = true) => {
      changeOpacity && setOpacity(0);

      setTimeout(() => {
        setCurrent(newIndex);
      }, opacityTime);

      setTimeout(() => {
        setOpacity(1);
      }, opacityTime);

      const $left = left - tabLabelWrapperRef.current.offsetLeft;
      setHightlightParams({
        width,
        left: $left
      });

      if (
        newIndex &&
        $left + width >
          scrollRef.current.offsetWidth + scrollRef.current.scrollLeft
      ) {
        handleChangeScroll("left", -width);
        return;
      }

      if (scrollRef.current.scrollLeft > $left) {
        handleChangeScroll("right", -width);
        return;
      }
    },
    [tabLabelWrapperRef.current, scrollRef.current]
  );

  const getNeedScrollForVisible = (left, width, scrolled, fullWidth) => {
    if (left > scrolled && left + width < scrolled + fullWidth) {
      
      // 'на экране';
      return width 
    }
    if (left > scrolled && left < scrolled + fullWidth) {
      
      // 'правая крайняя видимая'; !!!!!!!!!!!!!!
    return {right: width - (scrolled + fullWidth - left)}  
    }
    if (left + width > scrolled + fullWidth) {

      // 'правые невидимые';
      return width
    }
    if (left < scrolled && left + width > scrolled) {

      // 'левая крайняя видимая' !!!!!!!
      return {left: scrolled - left } 
    }
    // 'левая не видимая'
    return width


  }

  const handleChangeScroll = useCallback(
    (direction, scroll) => {
      if (!scroll) {
        const { offsetLeft, offsetWidth, scrollLeft } = scrollRef.current
        const { children } = tabLabelWrapperRef.current;
        const mappedChildren = [...children]
          .map(({ offsetLeft: left, offsetWidth: width }) =>
             ({ 
               left: left - offsetLeft, 
               width, 
               needScrollForVisible: getNeedScrollForVisible(left - offsetLeft, width,  scrollLeft, offsetWidth ) })) 

        const elem = mappedChildren.find(({ needScrollForVisible }) => needScrollForVisible[direction]) || {};
        scroll = ((elem.needScrollForVisible || {})[direction] || 0) + 20
      }


      const time = 200;
      const stepTime = 1000 / 60;
      const steps = time / stepTime;
      let step = scroll / steps;
      const int = setInterval(() => {
        if (direction === "left") {
          scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - step;
        } else {
          scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + step;
        }
      }, stepTime);

      setTimeout(() => {
        clearInterval(int);
      }, time);
    },
    [scrollRef.current]
  );
  
  return (
    <>
      <div className="tabs-header">
        {needNavButtons && <ScrollButton onClick={handleChangeScroll} left />}
        <div ref={scrollRef} className="tabs-scroll">
          <div ref={tabLabelWrapperRef} className="tab-label-wrapper">
            {tabsLabels.map((label, index) => (
              <LabelTab
                key={index}
                disabled={items[index].disabled}
                current={current === index}
                index={index}
                onChange={handleChange}
              >
                {label}
              </LabelTab>
            ))}
          </div>
          <div
            className="current-hightlight"
            style={{
              width: `${hightlightParams.width}px`,
              left: `${hightlightParams.left}px`
            }}
          />
        </div>
        {needNavButtons && <ScrollButton onClick={handleChangeScroll} />}
      </div>
      <div
        style={{
          opacity,
          transition: `${opacityTime}ms`,
          ...getContentStyles(shouldFitContainer, scrollRef.current)
        }}
      >
        {items[current].component()}
      </div>
    </>
  );
};
