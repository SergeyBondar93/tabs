import React, { useRef, useCallback } from "react";
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
  const tabLabelWrapperRef = useRef(null);
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
    Promise.resolve().then(() => {
      setNeedNavButtons(
        tabLabelWrapperRef.current.scrollWidth >
          tabLabelWrapperRef.current.offsetWidth
      );
    });
  }, [tabLabelWrapperRef.current]);

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

  const handleChangeScroll = useCallback(
    (direction, scroll = 200) => {
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
