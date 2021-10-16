import Buttons from "./Buttons"

const tipButton = ["5","10","15","25","50","custom"]

export function renderButtons(){
    return tipButton.map((e,i) => {
        return (
            <Buttons text={e} key={i} />
        )
    }
  )
}