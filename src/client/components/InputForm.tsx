import { useState } from "react";

export default function InputForm(props){

  const updateState = props.state.setCards;
 



  const [formValues, setFormValues] = useState({
    position: '',
    companyName: '',
    notes: '',
    date: new Date().toLocaleDateString(),
  });


  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };


  

const handleSubmit = () => {
  
  const existingSubmissionsString = localStorage.getItem('formData');
  const existingSubmissions = existingSubmissionsString ? JSON.parse(existingSubmissionsString) : [];

  const updatedSubmissions = [...existingSubmissions, formValues];

  localStorage.setItem('formData', JSON.stringify(updatedSubmissions));

  updateState(updatedSubmissions);

  // Clear the form
  setFormValues({
    position: '',
    companyName: '',
    notes: '',
    date: new Date().toLocaleDateString(),
  });

  
};





  return(

    <div className="inputcontainer">
      <form  style={{
        display:'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '10px'
      }} onSubmit={handleSubmit}>
        <input type="text" name='position' placeholder={'Position'} className="input" value={formValues.position} onChange={handleChange}></input>
        <input  type="text" name='companyName' placeholder={'Company Name'} className="input" value={formValues.companyName} onChange={handleChange}></input>
        <input  type="text" defaultValue={new Date().toLocaleDateString()} className="input"></input>
        <br />
        <input type="submit" value='Add to list'/>
      </form>
    </div>

  )


}