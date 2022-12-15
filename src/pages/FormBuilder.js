import React from "react";
import { useState } from "react";
import BuilderMenu from "../components/BuilderMenu";
import PropertyBar from "../components/PropertyBar";
import "../styles/formBuilder.css";
import deleteIcon from "../images/delete.png";
import editIcon from "../images/iconEdit.png";

const FormBuilder = () => {
  const [field, setField] = useState({});
  const [serviceList, setServiceList] = useState([]);

  const handleServiceChange = (evt) => {
    const value = evt.target.value;
    setField({
      ...field,
      [evt.target.name]: value,
    });
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([
      ...serviceList,
      {
        id: new Date().getTime().toString(),
        heading: field.heading,
        value: field.value,
      },
    ]);
    setField({ heading: "", value: "" });
  };

  const handleServiceUpdate = () => {
    const newArr = serviceList.map((element) => {
      if (element.id === field.id) {
        return field;
      }
      return element;
    });
    setServiceList(newArr);
    setField({ heading: "", value: "" });
  };

  const editClicked = (id) => {
    let newEditItem = serviceList.find((elem) => {
      return elem.id === id;
    });
    setField(newEditItem);
  };

  return (
    <>
      <BuilderMenu />
      <div className="" id="content-wrapperB">
        <h1>Form Builder</h1>

        {/* <div style={{backgroundColor: "lightblue"}}>Form builder testing, testing, testing, testing</div> */}

        <div>
          <div className="builderArea">
            {serviceList.map((elem, index) => (
              <div key={elem.id}>
                <div className="fieldSelBtn">
                  <button onClick={(e) => editClicked(elem.id)}>
                    <img src={editIcon} alt="" />
                  </button>
                  <button onClick={() => handleServiceRemove(index)}>
                    <img src={deleteIcon} alt="" />
                  </button>
                </div>
                <div className="form-floating builder_input mb-4">
                  <input
                    type="service"
                    className="form-control"
                    id="floatingInput"
                    value={elem.value}
                    onChange={(e) => handleServiceChange(e, index)}
                    placeholder="name@example.com"
                  />

                  <label htmlFor="floatingInput"> {serviceList.heading} </label>
                  <p id="heading">{elem.heading}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PropertyBar
        onHeadingChange={handleServiceChange}
        onServiceAdd={handleServiceAdd}
        onServiceUpdate={handleServiceUpdate}
        field={field}
        serviceList={serviceList}
      />
    </>
  );
};

export default FormBuilder;
