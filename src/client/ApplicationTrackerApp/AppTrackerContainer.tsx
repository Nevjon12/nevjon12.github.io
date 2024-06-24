import ApplicationContainer from "./containers/ApplicationContainer";
import InputContainer from "./containers/InputContainer";
import { useEffect, useState } from "react";
import Notes from "./components/Notes";



export default function AppTrackerContainer(){

    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState();
    const [currentNote, setCurrentNote] = useState ('');


  

    useEffect(()=>{

      const cardsInLocalStorageString = localStorage.getItem('cardData');
      const cardsInLocalStorage = cardsInLocalStorageString ? JSON.parse(cardsInLocalStorageString) : [];

      setCards(cardsInLocalStorage);

    }, [])



  return(

    <>
      <h1>Application Tracker</h1>
      <div className="main">
        
        <>
        
        <InputContainer setCards={setCards} />

        <ApplicationContainer cards={cards} setCards={setCards} setCurrentCard={setCurrentCard} setCurrentNote={setCurrentNote} />
        </>
        <Notes currentCard={currentCard} currentNote={currentNote} setCurrentNote={setCurrentNote}/>
      </div>
    </>
  )


}