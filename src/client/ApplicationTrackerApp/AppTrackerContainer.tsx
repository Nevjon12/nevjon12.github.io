import ApplicationContainer from "./containers/ApplicationContainer";
import InputContainer from "./containers/InputContainer";
import InputForm from "./components/InputForm";
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
      <h1>Job Application Hub</h1>

      <div className="main">    
        <div className="inputs" >
        <InputForm setCards={setCards}/>
        </div>
        <ApplicationContainer cards={cards} setCards={setCards} setCurrentCard={setCurrentCard} setCurrentNote={setCurrentNote} />
        <Notes currentCard={currentCard} currentNote={currentNote} setCurrentNote={setCurrentNote}/>
      </div>
    </>
  )


}