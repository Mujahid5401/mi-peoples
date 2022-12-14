import React from 'react'
import { useState } from 'react';
import BuilderMenu from '../components/BuilderMenu'
import PropertyBar from '../components/PropertyBar'
import '../styles/formBuilder.css'
import deleteIcon from '../images/delete.png'
import editIcon from '../images/iconEdit.png'


const FormBuilder = () => {

  // append and whole input field
  const [field, setField] =  useState([])
  const [editInput, setEditInput] = useState([])
const [heading, setHeading]= useState("hello world")

  const handleAdd=()=>{
    const allData = { id: new Date().getTime().toString()}
    setField([...field, allData])
    //console.log('1'+allData)


    // const addedFields = [...field, allData]
    // setField(addedFields)
    
  }
   const handelHeadingChange =(e)=>{
    console.log(e.target.vaule)
setHeading(e.target.value)
   }
  
  

  // change in formbuilder input field
  // const handleChange=(e, i)=>{
    
  // }

  
// const [isEditItem, setIsEditItem] = useState(null)

//   // edit button clicked

// const editClicked=(id)=> {
 
//   let newEditItem = field.find((elem) => {
//     return elem.id === id
//   });
 
//   console.log(newEditItem)
  
//   setLabelValue(newEditItem.labelValue)

//   setIsEditItem(id)

// }



const editClicked=(id)=> {
  console.log(id)
  const orr = [...editInput, [id]]
  setEditInput(orr)
 
  
}


// get value from propertubar input field for formBuilder
  const [labelValue, setLabelValue] = useState('');
    const labelChange = (event) => {

     

      setLabelValue(event.target.value + " Testing");
     
      
    };

  return (
    <>
    <BuilderMenu  data={handleAdd}/>
    <div className='' id="content-wrapperB"><h1>Form Builder</h1>

    {/* <div style={{backgroundColor: "lightblue"}}>Form builder testing, testing, testing, testing</div> */}

    <div>
      <div className='builderArea'>
        {
         field.map((elem)=>{
          return(
            
            <div key={elem.id}>
              
            <div className='fieldSelBtn'>
              <button onClick={e=>editClicked(elem.id)}><img src={editIcon} alt="" /></button>
              <button><img src={deleteIcon} alt="" /></button>
            </div>
            <div className="form-floating builder_input mb-4">
              <input type="text" className="form-control" id="floatingInput"  placeholder="name@example.com" />


              <label htmlFor="floatingInput">First Name {heading} </label>
              <p>{elem.id}</p>
            </div>
            </div>
           
          )
         })
        }
      </div>
    </div>


    </div>
    
    <PropertyBar onHeadingChange={handelHeadingChange} heading={heading}  data={labelChange} />
    </>


    
  )
}

export default FormBuilder