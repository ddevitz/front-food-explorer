import { Container, Content, Section, Filters } from "./styles"; 

import foodImg from '../../assets/Mask-group-3.png';

import { PiCaretLeft, PiPlus, PiMinus } from "react-icons/pi";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Filter } from "../../components/Filter";
import { Button } from "../../components/Button";

export function Details({ isAdmin }) {
  return (
    <Container>

      <Header />  

      <main>
      
        <ButtonText title="Voltar" icon={PiCaretLeft}/>

        <Content>

          <img src={foodImg} alt="Imagem ilustrativa de um prato de comida" />

          <div className="detailsFood">

            <h1>Nome da refeição</h1>
            <p>Descrição longa do prato, para descrever os ingredientes e como é o preparo, etc...</p>

            <Filters>
              <Filter title="ingrediente 1"/>
              <Filter title="ingrediente 2"/>
              <Filter title="ingrediente 3"/>
            </Filters>

            { isAdmin ? (
              <Section>
                <Button title="Editar prato"/>
              </Section>
            ) : (
              <Section>
              <PiMinus /> <p>01</p> <PiPlus />

              <Button title="Incluir" price=" ∙ R$ 25,00"/>
            </Section>
            )}
                      
          </div>
        </Content>

      </main>

      <Footer/>

    </Container>
  )
}