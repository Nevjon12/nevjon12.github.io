export default function AppCard(props){


  const handleDelete = ()=>{
    const formData = JSON.parse(localStorage.getItem(`cardData`));
    formData.splice(props.id,1);
    localStorage.setItem('cardData', JSON.stringify(formData))
    props.setCards(formData)
  };

  const handleClick = ()=>{
    const formData = JSON.parse(localStorage.getItem(`cardData`))    

    props.setCurrentCard(props.id)
    props.setCurrentNote(formData[props.id].notes)
  }

  return(

    <div className="appcard" onClick={handleClick}>
      Company: {props.card.companyName}
      <br />
      Role: {props.card.position}
      <br />
      Date You Applied: {props.card.date}
      <br/>
      <button onClick={handleDelete}> Delete </button>
      
      
    </div>
    
  )


}