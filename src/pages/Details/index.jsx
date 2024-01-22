import { Container } from "./styles"; 

import { PiReceipt } from "react-icons/pi";

import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>

      <Button title="Incluir" loading/>
      <Button icon={PiReceipt} title="Novo pedido (0)"/>
      <Button title="Novo prato"/>

    </Container>
  )
}