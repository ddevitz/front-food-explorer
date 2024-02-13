import { useState, useRef } from "react";
import { Container, Content, Section } from "./styles"; 

import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { AddFilter } from "../../components/AddFilter";


export function EditDish() {

  const [category, setCategory ] = useState("");
  const [price, setPrice] = useState("");
  const fileInput = useRef(null);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlePrice = (e) => {
    const inputPrice = e.target.value.replace(/\D/g, '');
    const formattedPrice = `R$ ${inputPrice.slice(0,-2)}, ${inputPrice.slice(-2)}`

    setPrice(formattedPrice);
  };

  const handleFileButton = () => {
    fileInput.current.click();
  };


  return (
    <Container>

      <Header />  
      <main>
      
        <ButtonText title="Voltar" icon={PiCaretLeft}/>

        <Content>

          <h1>Adicionar prato</h1>

          <Section className="section1">
            <div>
              <label htmlFor="img">Imagem do prato</label>
              <Input 
                className="inputAdmin" 
                id="img" 
                type="file"
                style={{ display: "none" }}
                ref={fileInput}
                />
                <button className="buttonUploadImg" onClick={handleFileButton}><PiUploadSimple />Selecione imagem</button>
            </div>

            <div>
              <label htmlFor="title">Nome do prato</label>
              <Input className="inputAdmin" id="title" type="text" placeholder="Ex: Salada Ceasar"/>
            </div>
            
            <div>
              <label htmlFor="list">Categoria</label>
              <select id="list" value={category} onChange={handleCategory}>
                <option value=""/>
                <option value="refeições">Refeições</option>
                <option value="sobremesas">Sobremesas</option>
                <option value="bebidas">Bebidas</option>
              </select>
            </div>
          </Section>

          <Section className="section2">
            <div>
              <label htmlFor="tags">Ingredientes</label>
              <div className="inputAdmin" id="tags">
                <AddFilter value="Pão Naan"/>
                <AddFilter isNew placeholder="Adicionar"/>
              </div>
            </div>

            <div>
              <label htmlFor="price">Preço</label>
              <Input className="inputAdmin" id="price" type="text" value={price} onChange={handlePrice} placeholder="R$ 00,00"/>
            </div>
          </Section>

          <Section className="section3">
            <div>
              <label htmlFor="textarea">Descrição</label>
              <TextArea id="textarea" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
            </div>
          </Section>

          <div className="buttonSalve">
            <Button title="Excluir prato"/>
            <Button title="Salvar alterações"/>
          </div>


        </Content>

      </main>

      <Footer/>

    </Container>
  )
}