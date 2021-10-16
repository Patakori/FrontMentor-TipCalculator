import { renderButtons } from "./RenderButtons"
import Input from "./Input"
import { useContext } from "react"
import { Context } from "../data/AppContext"

export default function CardCalculator(){

    const {
        state,
        } = useContext(Context)
    
    return(
        <div className="bg-white w-87% flex flex-col px-8px pb-31px items-center
                        desk:w-415px desk:h-419px desk:pr-46px">
            <h2 className="pt-38px pb-10px w-95% font-bold text-oneDarkGrayishCyan
                            desk:pt-0 desk:w-381px">Bill</h2>
            <Input value={state.valorConta} name="valorConta" dispatch="inputValor" icon="icon-dollar.svg" />
            <h3 className="pt-38px pb-20px w-95% font-bold text-oneDarkGrayishCyan desk:w-381px">Select Tip %</h3>
            <div className="grid grid-cols-2 w-95% gap-4 font-bold 
                            desk:w-381px desk:h-114px desk:gap-4 desk:grid-rows-2 desk:grid-cols-3">
                {renderButtons()}
            </div>
            <div className="flex w-95% items-end desk:w-381px">
                <h4 className="pt-38px pb-10px w-95% font-bold text-oneDarkGrayishCyan desk:w-381px">Number of people</h4>
                {state.error? <p className="text-red-600 font-bold text-12px w-2/3 text-right pb-10px">Can`t be Zero</p>:null}
            </div>
            <Input value={state.pessoas} name="pessoas" dispatch="inputPessoas" icon="icon-person.svg" />
        </div>

    )
}

