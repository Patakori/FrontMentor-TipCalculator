import { createContext, useEffect, useReducer} from "react"

interface estadoInicial {
    valorButtons:number, 
    valorConta:number,
    pessoas:number,
    taxa:number,
    respValor: number,
    respTaxa: number,
    error: boolean,
    custom: boolean,
}

export const initialState : estadoInicial = {
    valorButtons:0, 
    valorConta:0,
    pessoas:1,
    taxa:0,
    respValor:0,
    respTaxa:0,
    error:false,
    custom:false,
}

export const reducer = (state, action) => {
    switch(action.type){
        case "5":
            return { ...state, 
                    valorButtons:state.valorButtons = 5, 
                    taxa: state.taxa = 0,
                    }  
        case "10":
            return {...state, 
                    valorButtons:state.valorButtons = 10, 
                    taxa: state.taxa = 0,
                    }  
        case "15":
            return {...state, 
                    valorButtons:state.valorButtons = 15, 
                    taxa: state.taxa = 0
                    }  
        case "20":
            return {...state, 
                    valorButtons:state.valorButtons = 20, 
                    taxa: state.taxa = 0
                    }  
        case "25":
            return {...state, 
                    valorButtons:state.valorButtons = 25, 
                    taxa: state.taxa = 0
                    }  
        case "50":
            return {...state, 
                    valorButtons:state.valorButtons = 50, 
                    taxa: state.taxa = 0
                    }
        case "custom":
            return{...state,
                    custom: state.custom = true
                    }
        case "inputValor":
            return {...state, 
                    valorConta: state.valorConta = ""
                    }     
        case "inputTaxa":
            return {...state, 
                    valorButtons:state.valorButtons = 0, 
                    taxa: state.taxa = "",
                    custom: state.custom = true,
                    }     
        case "inputPessoas":
            return {...state, 
                    pessoas:state.pessoas = ""
                    }    
        case "calculos":
            return {...state, 
                    respTaxa:((state.valorConta*(state.valorButtons+state.taxa)/100)/state.pessoas).toFixed(2), 
                    respValor: (((state.valorConta*(state.valorButtons+state.taxa)/100)+state.valorConta)/state.pessoas).toFixed(2),
                    }
        case "reset" :
            return {
                    ...initialState
                    }
        case "error":
            return{
                    ...state,
                    error: state.error = true
                    }
        default:
            return {...state, 
                    [action.input]:action.value
                    }
        }
    }


export const Context = createContext({});
export default function AppContext (props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const disabled = state.valorConta === 0 || state.valorConta === ""

    useEffect (()=>{
                error ()
                },[state.valorConta, state.taxa, state.pessoas, state.valorButtons])

    function onChangeValor(e){
        const action = {
            input: e.target.name,
            value: e.target.valueAsNumber,
        }
        dispatch(action);
    }
    

    function error(){
        if(state.pessoas == "" || state.pessoas == 0 || state.pessoas in window){
            dispatch({type:"error"})
        }else{
            state.error = false
            dispatch({type:"calculos"})
        }
    }

    return (
        <Context.Provider value={{
            disabled,
            onChangeValor,
            state,
            dispatch,
            }}>
            {props.children}
        </Context.Provider>      
    )
    }    