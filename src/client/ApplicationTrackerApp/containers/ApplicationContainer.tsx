import ApplicationCards from "../components/AppCard";

export default function ApplicationContainer(props){

  const cards = props.cards;

  return(

      <div className="apps">
        <h1>Existing Job Applications</h1>
        <div className="cards">
        {
          cards.map((card, index) => {
            return <ApplicationCards
              id={index}
              card={card} 
              setCurrentCard={props.setCurrentCard}
              setCards={props.setCards}
              setCurrentNote={props.setCurrentNote}     
              />;
              
          })
        }
        </div>
      </div>
  )


}