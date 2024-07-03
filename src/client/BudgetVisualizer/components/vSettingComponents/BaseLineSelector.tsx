



export default function BaseLineSelector(props){

  const vDataState = props.vDataState;
  const updateVSettings = props.updateVSettings;
  const baseLine = props.baseLine;


  return(

  <>
    <button style={{flex:1}}
      onClick={()=>{
        let currentBaseLine = baseLine;
        currentBaseLine += 50;
        updateVSettings({
          ...vDataState,
          baseLine: currentBaseLine});

      }}

    >Set New Base Line</button> <br />
  </>

  )



}