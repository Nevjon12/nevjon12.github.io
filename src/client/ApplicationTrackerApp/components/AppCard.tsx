export default function AppCard(props){


  const handleDelete = ()=>{
    const formData = JSON.parse(localStorage.getItem(`cardData`));
    formData.splice(props.id,1);
    localStorage.setItem('cardData', JSON.stringify(formData))
    props.setCards(formData)
  };

  const handleClick = ()=>{
    
    props.setCurrentCard(props.id)
    props.setCurrentNote(props.card.notes)
  }

  return(

    <div className="appcard" onClick={handleClick}>
      Company: {props.card.companyName}
      <br />
      Role: {props.card.position}
      <br />
      <button onClick={handleDelete}> Delete </button>
      
      
    </div>
    
  )


}