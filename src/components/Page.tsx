import CardCalculator from "./CardCalculator";
import CardResult from "./CardResult";


export default function Page (){
    return(
        <div className="bg-oneLightGrayishCyan h-screen w-screen pt-146px 
                        desk:flex desk:justify-center desk:items-center desk:pt-0">
                <img className="transform absolute translate-x-36 -translate-y-24
                                desk:translate-x-0 desk:-translate-y-22rem
                                " src="../svg/logo.svg" alt="logo" />
                <div className="bg-white flex flex-col items-center w-screen pb-31px font-spaceMono rounded-3xl
                                desk:flex-row desk:w-922px desk:h-483px desk:pb-0 justify-center">
                    <CardCalculator />
                    <CardResult />
                </div>
        </div>
    )
}