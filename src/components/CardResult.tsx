import { useContext } from "react";
import { Context } from "../data/AppContext";
import LabelResult from "./LabelResult";



export default function CardResult(){

    const{
        disabled,
        state,
        dispatch,
    }=useContext(Context)

    return(
            <div className="flex flex-col bg-veryDarkCyan w-87% items-center rounded-2xl pb-34px
                            desk:w-415px desk:h-419px desk:px-23px">
                <LabelResult text="Tip Amount" resultado={state.respTaxa} />
                <LabelResult text="Total" resultado={state.respValor} />               
                <button className= {`${disabled? "opacity-50" : "opacity-100"} bg-strongCyan w-86% h-50px rounded-md font-bold 
                text-veryDarkCyan text-18px hover:text-veryDarkCyan hover:bg-oneLightGrayishCyan`}
                    onClick={() => dispatch({type:"reset"})}>RESET</button>
            </div>
    )
}
