import { Container } from "./styles"; 

import { PiReceipt, PiMagnifyingGlass } from "react-icons/pi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>

      <Button title="Incluir" loading/>
      <Button icon={PiReceipt} title="Novo pedido (0)"/>
      <Button title="Novo prato"/>

      <Input class="search" placeholder="Exemplo" icon={PiMagnifyingGlass}/>
      <Input placeholder=" Nome do usuário" />

    </Container>
  )
}