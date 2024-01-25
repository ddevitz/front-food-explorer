import { Container } from "./styles"; 

import { PiReceipt, PiMagnifyingGlass, PiCaretLeft } from "react-icons/pi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";

export function Details() {
  return (
    <Container>

      <Header />

      <div class="window">
        <h1>Hello World!</h1>

        <Button title="Incluir" loading/>
        <Button icon={PiReceipt} title="Novo pedido (0)"/>
        <Button title="Novo prato"/>

        <Input class="search" placeholder="Exemplo" icon={PiMagnifyingGlass}/>
        <Input placeholder=" Nome do usuário" />

        <ButtonText title="Criar uma nova conta"/>
        <ButtonText class="voltar" title="Voltar" icon={PiCaretLeft}/>
      </div>

    </Container>
  )
}