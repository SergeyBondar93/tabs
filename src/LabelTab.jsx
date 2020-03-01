import React, { useRef, useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

const getBackgroundColor = (disabled, hightlight) => {
  if (disabled) return "rgba(204, 204, 204, 0.4)";
  if (hightlight) return "rgb(197, 197, 197)";
  return "rgba(0, 0, 0, 0)";
};

export const LabelTab = ({ children, current, index, onChange, disabled }) => {
  const [elem, setElem] = useState(null);
  const ref = useRef(null);
  const [hightlight, setHightlight] = useState(false);

  useEffect(() => {
    if (current) {
      const { offsetWidth: width, offsetLeft: left } = ref.current;
      onChange(
        index,
        {
          width,
          left
        },
        false
      );
    }
  }, [ref.current, index]);

  const handleChange = useCallback(() => {
    if (disabled) return;
    setHightlight(true);
    setTimeout(() => {
      setHightlight(false);
    }, 100);

    const { offsetWidth: width, offsetLeft: left } = ref.current;
    onChange(index, {
      width,
      left
    });
  }, [disabled, ref.current]);

  useEffect(() => {
    if (typeof children === "function") {
      setElem(children());
    } else {
      setElem(children);
    }
  }, [children]);

  return (
    <div
      ref={ref}
      onClick={handleChange}
      className={`tab-label`}
      style={{
        cursor: disabled ? "default" : "pointer",
        backgroundColor: getBackgroundColor(disabled, hightlight),
        transition: hightlight ? "0.1s" : "0"
      }}
    >
      {elem}
    </div>
  );
};
