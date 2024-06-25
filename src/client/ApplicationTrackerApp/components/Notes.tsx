export default function Notes(props){

  const currentCard = props.currentCard;
  const currentNote = props.currentNote || "No card selected" ;
  const setCurrentNote = props.setCurrentNote
  

  // const onChange = (event)=>{
  //   setNoteContent(`${currentNote}${event.target.value}`);
  //   console.log(noteContent)
  // }

    

 


  const saveNote = (event) => {
    event.preventDefault()


    const formData = JSON.parse(localStorage.getItem('cardData'));
    
    formData[currentCard].notes = currentNote;
    setCurrentNote(currentNote)
    console.log("updated Note Value in Notes", currentNote);
    localStorage.setItem('cardData', JSON.stringify(formData));

  }

  

return (
  <form className="notes">

  <textarea  name='notetext' style={{width:'100%', boxSizing:'border-box', height:'90%'}} value={currentNote}  /> 
  <button type='submit' onClick={saveNote}>Save Note</button>
  </form>

)

}