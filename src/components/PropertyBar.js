import React from "react";
import { useState } from "react";
import "../styles/propertybar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const PropertyBar = ({onHeadingChange, onValueChange, heading}) => {
  const [isActive, setActive] = useState("false");
  const [icons, setIcon] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
    setIcon(!isActive);
  };

  return (
    <>
      <div>
        <FontAwesomeIcon
          id="sidebarTogglebtn"
          onClick={handleToggle}
          icon={icons ? faBars : faTimes}
          className="toggle-btnP ms-5"
        />
      </div>

      <div
        id="sidebar-wrapperP"
        className={`p-4  ${isActive ? null : "active"}`}
      >
        <div className="sidebar-header">
          <i className="fa fa-2x fa-times sidebar-close"></i>
        </div>

        <div className="sidebar-menu">
          <span className="adminTools">Admin Tools</span>

          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Heading
            </label>
            <input
              type="text"
              className="form-control"
              value={heading}
              onChange={(e)=>onHeadingChange(e)}
              id="exampleFormControlInput1"
              placeholder="First Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Value
            </label>
            <input
              type="text"
              // value={value}
              // onChange={onValueChange}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Alex Jhon"
            />
          </div>
        </div>
      </div>

      {/* <div id="content-wrapper">Main Content</div>   */}
    </>
  );
};

export default PropertyBar;
