interface labelProps{
    text: string,
    resultado: any,
}


export default function LabelResult(props:labelProps){

    const trocar = props.text == "Total"

    return(
        <div className={`${ trocar ? " pt-24px pb-24px desk:pb-136px desk:pt-0" : " pt-45px desk:pt-64px desk:pb-10"} flex w-full justify-between px-24px`}>
            <div className="flex flex-col">
                <p className="text-twoLightGrayishCyan font-bold " >{props.text}</p> 
                <p className="text-twoDarkGrayishCyan font-bold text-12px">/ person</p>
            </div>
            <p className="text-strongCyan font-bold text-34px desk:36px">${props.resultado}</p>
        </div>
    )
}
