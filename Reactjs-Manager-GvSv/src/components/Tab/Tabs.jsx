import React, { useState } from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = (props) => {
  const { children} = props;

  Tabs.propTypes = {
    children: PropTypes.array.isRequired,
  };

  const [activeTab, setactiveTab] = useState(props.children[0].props.label);

  const onClickTabItem = (tab) => {
    setactiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content" >
        {props.children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          // console.log(child.props.label);
          return child.props.children;
        })}
      </div>
    </div>
  );
};
export default Tabs;
