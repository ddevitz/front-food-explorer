import { Container, Content, Section } from "./styles"; 

import foodImg from '../../assets/Mask-group-3.png';

import { PiCaretLeft } from "react-icons/pi";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Filter } from "../../components/Filter";

export function Details() {
  return (
    <Container>

      <Header />  

      <main>
      
        <ButtonText title="Voltar" icon={PiCaretLeft}/>

        <Content>

          <img src={foodImg} alt="Imagem ilustrativa de um prato de comida" />

          <div className="detailsFood">

            <h1>Nome da salada</h1>
            <p>Descrição longa do prato, para descrever os ingretientes e como é o preparo</p>

            <Section>
              <Filter title="ingrediente"/>
            </Section>

            <div className="componente-inclusao">- 01 + button </div>
          </div>
        </Content>

      </main>

      <Footer/>

    </Container>
  )
}