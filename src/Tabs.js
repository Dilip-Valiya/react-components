import React, { useState } from "react";

export function Tab({ text, isActive, onClick }) {
  return (
    <button className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      {text}
    </button>
  );
}

const Tabs = ({ defaultActiveTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isActive: activeTab === index,
            onClick: () => handleTabClick(index),
          })
        )}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab].props.children}
      </div>
    </div>
  );
};

export default Tabs;
