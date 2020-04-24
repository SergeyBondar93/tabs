import React from "react";
import { TabOne, TabTwo, TabThree } from "./expample-tabs";
import { Tabs } from "./Tabs";

const TabThreeTitle = () => <h1>Tab three title</h1>;

const TabOneLabel = () => (
  <>
    First TAB
  </>
);

const items = [
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo,
    disabled: true
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: TabThreeTitle,
    component: TabThree,
    disabled: true
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo
  },
  {
    label: TabThreeTitle,
    component: TabThree
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo
  },
  {
    label: TabThreeTitle,
    component: TabThree
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo
  },
  {
    label: TabThreeTitle,
    component: TabThree
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo,
    disabled: true
  },
  {
    label: TabThreeTitle,
    component: TabThree,
    disabled: true
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo
  },
  {
    label: TabThreeTitle,
    component: TabThree
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo
  },
  {
    label: TabThreeTitle,
    component: TabThree
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo
  },
  {
    label: TabThreeTitle,
    component: TabThree
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo,
    disabled: true
  },
  {
    label: TabThreeTitle,
    component: TabThree,
    disabled: true
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo
  },
  {
    label: TabThreeTitle,
    component: TabThree
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo
  },
  {
    label: TabThreeTitle,
    component: TabThree
  },
  {
    label: TabOneLabel,
    component: TabOne
  },
  {
    label: () => <div style={{ color: "red" }}>Tab two</div>,
    component: TabTwo
  },
  {
    label: TabThreeTitle,
    component: TabThree
  }
];

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        outline: "1px solid brown"
      }}
    >
      <Tabs items={items}></Tabs>
    </div>
  );
};

export default App;
