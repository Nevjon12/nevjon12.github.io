export default function GraphTypeSelector(props){

  const currentView = props.currentView;
  const updateVSettings = props.updateVSettings;
  const vDataState = props.vDataState;


  return(
    <>
    <button
        onClick={()=>{
          if(currentView === "Line Graph"){
            updateVSettings({
              ...vDataState,
              currentView: "Bar Graph"});
              return;
          }
            updateVSettings({
              ...vDataState,
              currentView: "Line Graph"});
        }}

      >Toggle Graph Type
    </button> <br />
    </>
  )


}