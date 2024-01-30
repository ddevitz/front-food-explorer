import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import { Container, Logo, Form } from "./styles";

export function SignUp(){
    return(
        <Container>
            <Logo>
                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2306 0.366394L21.8884 6.51966V18.8262L11.2306 24.9795L0.572805 18.8262V6.51966L11.2306 0.366394Z" fill="#065E7C"/></svg>
                food explorer
            </Logo>

            <Form>
                <h1>Faça seu login</h1>

                <div className="input-wrapper">
                    <label for="name">Seu nome</label>
                    <Input id="name" type="text" placeholder="Exemplo: Maria da Silva"/>
                </div>

                <div className="input-wrapper">
                    <label for="email">Email</label>
                    <Input id="email" type="text" placeholder="Exemplo: exemplo@exemplo.com.br"/>
                </div>

                <div className="input-wrapper">
                    <label for="password">Senha</label>
                    <Input id="password" type="password" placeholder="No mínimo 6 caracteres"/>
                </div>

                <Button title="Criar conta"/>

                <ButtonText title="Já tenho uma conta"/>
            </Form>
        </Container>
    )
}