import ApplicationCards from "../components/AppCard";
import { useState } from "react";

export default function ApplicationContainer(props){

  const [state, setState] = useState(() => {
    
    const storedData = localStorage.getItem('formData');
    
    return storedData ? JSON.parse(storedData) : [];
  });


  return(

      <div className="apps">
        <h1>Applications</h1>
        <div className="cards">
        {
          state.map((card, index) => {
            return <ApplicationCards
              id={index}
              state={state} 
              setState={setState} 
              key={index} 
              cards={card} 
              setCurrentCard={props.setCurrentCard} 
              currentCard={props.currentCard}/>;
          })
        }
        </div>
      </div>
  )


}