import { useContext } from "react"
import { Context } from "../data/AppContext"

export default function Input(props){

    const errorPessoas = props.name == "pessoas"
    const custom = props.name === "taxa"
    
    const{
        state,
        dispatch,
        onChangeValor,
    }=useContext(Context)

    return(
        <div className="flex items-center justify-center">
            {
                custom? "" : <img className="h-5 absolute transform -translate-x-32 desk:-translate-x-40 " src={`../svg/${props.icon}`} alt="icon" />
            }
            <input className= {`${errorPessoas && state.error? " focus:outline-red " : " focus:outline-strongCyan " } 
                            ${custom? "w-148px desk:w-119px" : "w-314px h-50px desk:381px" } 
                            bg-twoLightGrayishCyan h-50px rounded-md font-bold text-veryDarkCyan text-right 
                            text-24px pr-6  cursor-pointer desk:w-381px`}
                placeholder={"0"}
                type="number" value={props.value}
                name={props.name} onChange={onChangeValor} 
                onClick={() => dispatch({type:props.dispatch})} />
        </div>
    )
}