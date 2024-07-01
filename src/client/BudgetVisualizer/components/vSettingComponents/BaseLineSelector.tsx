import BaseLineModal from "../modals/BaseLineModal";
import { useState } from "react";




export default function BaseLineSelector(props){

  const vDataState = props.vDataState;
  const updateBaseLine = props.updateVSettings;
  const baseLine = props.baseLine;
  const [modalOpen, changeModal] = useState(false)


  const displayAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(baseLine);


  return(

  <>
    <BaseLineModal vDataState={vDataState} updateBaseLine={updateBaseLine} modalOpen={modalOpen} changeModal={changeModal} />
  <span>{displayAmount}</span>
  <br /> <br />
  <button
      onClick={()=>{changeModal(!modalOpen)}}

    >Set New Base Line</button> <br />
  </>

  )



}