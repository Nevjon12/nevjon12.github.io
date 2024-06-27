import { useState } from "react";

export default function InputForm(props){

  const setCards = props.setCards;
 



  const [formValues, setFormValues] = useState({
    position: '',
    companyName: '',
    notes: 'Add some Notes!',
    date: new Date().toLocaleDateString(),
  });


  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };


  

const handleSubmit = () => {
  
  const existingSubmissionsString = localStorage.getItem('cardData');
  const existingSubmissions = existingSubmissionsString ? JSON.parse(existingSubmissionsString) : [];

  const updatedSubmissions = [...existingSubmissions, formValues];

  localStorage.setItem('cardData', JSON.stringify(updatedSubmissions));

  setCards(updatedSubmissions);

  // Clear the form
  setFormValues({
    position: '',
    companyName: '',
    notes: 'Add some Notes!',
    date: new Date().toLocaleDateString(),
  });

  
};





  return(

    <div >
      <form
        onSubmit={handleSubmit}>
        <input type="text" name='position' placeholder={'Position'}value={formValues.position} onChange={handleChange}></input>
        <input  type="text" name='companyName' placeholder={'Company Name'} value={formValues.companyName} onChange={handleChange}></input>
        <input  type="text" defaultValue={new Date().toLocaleDateString()} ></input>
        <br />
        <input type="submit" value='Add to list'/>
      </form>
    </div>

  )


}