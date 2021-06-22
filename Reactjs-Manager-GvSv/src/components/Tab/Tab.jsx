import React from "react";
import PropTypes from "prop-types";

const Tab = (props) =>{

    Tab.propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

 
  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };


    const { activeTab, label } = props;
    // console.log(activeTab,label);  

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
}

export default Tab;
