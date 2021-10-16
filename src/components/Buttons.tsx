import { useContext } from "react"
import { Context } from "../data/AppContext"
import Input from "./Input"


    interface Props {
        props: string
        text: string
    }

export default function Buttons(props:Props){

    const custom = props.text === "custom"

    const {
        state,
        dispatch
        }=useContext(Context)

    return(
        <>
            {
                custom && state.custom? <Input value={state.taxa} name="taxa" dispatch="inputTaxa" icon="icon"/>
                :          
                <button className= {`${custom? "bg-twoLightGrayishCyan text-veryDarkCyan": "bg-strongCyan" } 
                                    ${state.valorButtons == props.text ? "text-veryDarkCyan " : "bg-veryDarkCyan"}
                                    w-148px h-50px rounded-md font-bold text-24px text-white
                                    hover:bg-oneLightGrayishCyan hover:text-veryDarkCyan
                                    desk:w-119px`} 
                onClick={()=>{
                    state.custom = false
                    dispatch({type:props.text})
                }}> { custom? props.text : props.text + "%" } </button>
            }

        </>
    )
}


