export default function AppCard(props){


  const handleDelete = ()=>{
    const formData = JSON.parse(localStorage.getItem(`formData`));
    formData.splice(props.id,1);
    localStorage.setItem('formData', JSON.stringify(formData))
    props.setState(formData)
  };

  const handleClick = ()=>{

    props.setCurrentCard(props.id)

  }

  return(

    <div className="appcard" onClick={handleClick}>
      Company: {props.cards.companyName}
      <br />
      Role: {props.cards.position}
      <br />
      <button onClick={handleDelete}> Delete </button>
      
      
    </div>
    
  )


}