import { useState } from "react";
import { Container, Content, Section } from "./styles"; 

import { PiCaretLeft } from "react-icons/pi";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";


export function NewDish() {

  const [category, setCategory ] = useState("");
  const [price, setPrice] = useState("");

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlePrice = (e) => {
    const inputPrice = e.target.value.replace(/\D/g, '');
    const formattedPrice = `R$ ${inputPrice.slice(0,-2)}, ${inputPrice.slice(-2)}`

    setPrice(formattedPrice);
  }


  return (
    <Container>

      <Header />  
      <main>
      
        <ButtonText title="Voltar" icon={PiCaretLeft}/>

        <Content>

          <h1>Adicionar prato</h1>

          <Section>
            <div className="categories">
              <label htmlFor="img">Imagem do prato</label>
              <Input id="img" type="file"/>
            </div>

            <div className="categories">
              <label htmlFor="title">Nome do prato</label>
              <Input id="title" type="text" placeholder="Ex: Salada Ceasar"/>
            </div>
            
            <div className="categories">
              <label htmlFor="list">Categoria</label>
              <select id="list" value={category} onChange={handleCategory}>
                <option value=""/>
                <option value="refeições">Refeições</option>
                <option value="sobremesas">Sobremesas</option>
                <option value="bebidas">Bebidas</option>
              </select>
            </div>
          </Section>

          <Section>
            <div className="categories">
              <label htmlFor="tags">Ingredientes</label>
              <Input id="tags"/>
            </div>

            <div className="categories">
              <label htmlFor="price">Preço</label>
              <Input id="price" type="text" value={price} onChange={handlePrice} placeholder="R$ 00,00"/>
            </div>
          </Section>

          <Section>
            <div className="categories">
              <label htmlFor="textarea">Descrição</label>
              <TextArea id="textarea" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
            </div>
          </Section>

          <Button title="Salvar alterações"/>

        </Content>

      </main>

      <Footer/>

    </Container>
  )
}