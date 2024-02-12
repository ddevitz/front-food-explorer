import { PiPlus, PiX } from "react-icons/pi";

import { Container } from "./styles";

export function AddFilter({ isNew, value, onClick, ...rest }){
    return(
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button 
                type="button"
                onClick={onClick}
                >
                { isNew ? <PiPlus/> : <PiX/>}
            </button>
        </Container>
    )
}