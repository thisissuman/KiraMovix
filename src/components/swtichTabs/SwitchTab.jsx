import React, { useState } from "react";
import "./switchtab.scss";
const SwitchTab = (props) => {
  const [selectedTab, setselectedTab] = useState(0);
  const [left, setleft] = useState(0);

  const activeTab = (tab, index) => {
    setleft(index * 100);
    setTimeout(() => {
      setselectedTab(index);
    }, 300);
    props.onTabChange(tab, index);
  };
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {props.data.map((tab, index) => {
          return (
            <span
              key={index}
              className={`tabItem ${selectedTab === index ? "active" : ""}`}
              onClick={() => activeTab(tab, index)}
            >
              {tab}
            </span>
          );
        })}
        <span className="movingBg" style={{ left:left }} />
      </div>
    </div>
  );
};

export default SwitchTab;
