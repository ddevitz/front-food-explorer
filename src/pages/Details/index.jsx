import { Container, Content} from "./styles"; 

import foodImg from '../../assets/Mask-group-3.png';

import { PiReceipt, PiMagnifyingGlass, PiCaretLeft } from "react-icons/pi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

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

            <div className="componente-filtros">ingredientes</div>
            <div className="componente-inclusao">- 01 + button </div>
          </div>
        </Content>

      </main>

      <Footer/>

    </Container>
  )
}