import { PiHeartStraightLight, PiPencilSimple, PiCaretRight, PiPlus, PiMinus } from "react-icons/pi";

import foodImg from '../../assets/Mask-group-3.png';

import { Container, Description, Section } from "./styles";
import { Button } from "../Button";

export function FoodCard({ isAdmin }){
    return(
        <Container>
            { isAdmin ? (<PiPencilSimple />) : (<PiHeartStraightLight />)}
            
            <Description>
                <img src={foodImg} alt="Foto do prato" />

                <h1>Nome do prato <PiCaretRight /></h1>

                <p>Descrição breve do prato</p>

                <span>R$ 0,00</span>
            </Description>

            <Section>
                { isAdmin ? ("") : ( <><PiMinus /> <p>01</p> <PiPlus /> <Button title="Incluir" /></>)}
            </Section>
        </Container>
    )
}