export default function Notes(props){

  const currentCard = props.currentCard;
  const currentNote = props.currentNote;
  const setCurrentNote = props.setCurrentNote


  const onChange = async (e)=>{
    if(typeof(currentCard) === "number"){
    const editedNote = e.target.value;
    

    const formData = JSON.parse(localStorage.getItem(`cardData`))
    formData[currentCard].notes = editedNote;
    localStorage.setItem('cardData', JSON.stringify(formData));

    setCurrentNote(editedNote);
    }
  }

  
  



  

return (
  <form className="notes">

  <textarea
    name='notetext' 
    style={{width:'100%', boxSizing:'border-box', height:'100%'}} 
    value={currentNote}
    placeholder="Choose a card to edit notes"
    onChange={onChange}
  >
  </textarea> 
  </form>

)

}