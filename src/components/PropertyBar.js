import React from "react";
import { useState } from "react";
import "../styles/propertybar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const PropertyBar = ({
  onHeadingChange,
  field,
  onServiceAdd,
  onServiceUpdate,
}) => {
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

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Heading
            </label>
            <input
              type="text"
              name="heading"
              className="form-control"
              value={field.heading}
              onChange={(e) => onHeadingChange(e, field.id)}
              id="exampleFormControlInput1"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Value
            </label>
            <input
              type="text"
              name="value"
              value={field.value}
              onChange={(e) => onHeadingChange(e, field.id)}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Alex Jhon"
            />
          </div>
          {field.id ? (
            <button
              type="button"
              onClick={onServiceUpdate}
              className="btn btn_one"
            >
              <span>Update Service</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onServiceAdd}
              className="btn btn_one"
            >
              <span>Add a Service</span>
            </button>
          )}
        </div>
      </div>

      {/* <div id="content-wrapper">Main Content</div>   */}
    </>
  );
};

export default PropertyBar;
