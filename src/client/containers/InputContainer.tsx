import InputForm from "../components/InputForm";



export default function InputContainer(props){

  return(
    <div className="inputs">
      <h1>New Application</h1>
      <br/>
      <div >

        <InputForm state={props}/>

      </div>

    </div>
  )


}