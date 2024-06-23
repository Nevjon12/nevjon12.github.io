import { useState } from "react"


export default function Notes(props){



  const [noteContent, setNoteContent] = useState()

  const onChange = (event)=>{
    
    event.target.value = event.target.value;
    setNoteContent(event.target.value)
    console.log(noteContent)
  }

    
  const currentNote = props.current;
 



  const saveNote = (event) => {
    event.preventDefault()

  
    const formData = JSON.parse(localStorage.getItem('formData'));

    console.log('data', formData[currentNote].notes);
    console.log('index to update',currentNote);

    formData[currentNote].notes = 'someInfo';

    localStorage.setItem('formData', JSON.stringify(formData));
    // currentNote = formData[currentNote].notes

  }

  

return (
  <form className="notes">

  <textarea name='notetext' style={{width:'100%', boxSizing:'border-box', height:'90%'}} value={`${currentNote}` || 'Nothing selected yet'} onChange={onChange}  /> 
  <button type='submit' onClick={saveNote}>Save Note</button>
  </form>

)

}