import React from "react";
import { TabOne, TabTwo, TabThree } from "./expample-tabs";
import { Tabs } from "./Tabs";

const TabThreeTitle = () => <h1>Tab three title</h1>;

const TabOneLabel = () => (
  <>
    {new Array(Math.floor(Math.random() * 5) + 1).fill(0).map(() => (
      <img
        height="30px"
        style={{
          margin: "3px"
        }}
        src="https://mixnews.lv/wp-content/uploads/2019/11/22/1574367889_0042-e1574430618761.jpg"
      />
    ))}
  </>
);

const items = [
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
