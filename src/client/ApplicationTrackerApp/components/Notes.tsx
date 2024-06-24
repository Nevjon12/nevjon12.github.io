import { useState } from "react"


export default function Notes(props){



  
  const [noteContent, setNoteContent] = useState("")
  const updateNote = props.setCurrentNote;
  let cardNumber = props.current;
  let currentNote = props.cards?.notes || "No card selected" ;
  

  const onChange = (event)=>{
    setNoteContent(event.target.value);
  }

    

 


  const saveNote = (event) => {
    event.preventDefault()


    const formData = JSON.parse(localStorage.getItem('formData'));
    
    formData[cardNumber].notes = noteContent;
    updateNote(noteContent)
    console.log("updated Note Value in Notes", noteContent);
    localStorage.setItem('formData', JSON.stringify(formData));


  }

  

return (
  <form className="notes">

  <textarea  name='notetext' style={{width:'100%', boxSizing:'border-box', height:'90%'}} value={currentNote} onChange={onChange}  /> 
  <button type='submit' onClick={saveNote}>Save Note</button>
  </form>

)

}