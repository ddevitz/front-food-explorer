import { Button } from "../Button";
import { Input } from "../Input";
import { Container, Logo } from "./styles";

import { PiMagnifyingGlass, PiReceipt, PiSignOut } from "react-icons/pi";

export function Header(){
    return(
        <Container>
            <Logo>
                <div>
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2306 0.366394L21.8884 6.51966V18.8262L11.2306 24.9795L0.572805 18.8262V6.51966L11.2306 0.366394Z" fill="#065E7C"/></svg>
                    food explorer
                </div>
                <span>admin</span>
            </Logo>

            <Input placeholder="Busque por pratos ou ingredientes" icon={PiMagnifyingGlass}/>

            {/* <Button icon={PiReceipt} title="Pedidos (0)"/> */}

            {/* Parte admin */}

            <Button title="Novo prato" />

            <PiSignOut />
        </Container>
    )
}