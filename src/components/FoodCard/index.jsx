import { PiHeartStraightLight, PiCaretRight, PiPlus, PiMinus } from "react-icons/pi";

import { Container, Section } from "./styles";
import { Button } from "../Button";

export function FoodCard(){
    return(
        <Container>
            <PiHeartStraightLight/>
            <img src="" alt="Foto do prato" />

            <h1>Nome do prato <PiCaretRight /></h1>

            <p>Descrição breve do prato</p>

            <span>R$ 0,00</span>

            <Section>
              <PiMinus /> <p>01</p> <PiPlus />

              <Button title="Incluir" price=" ∙ R$ 25,00"/>
            </Section>
        </Container>
    )
}