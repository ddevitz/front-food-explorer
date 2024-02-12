import { Container } from "./styles";

export function Input({ icon: Icon, teste, ...rest }){
    return(
        <Container>
            {Icon && <Icon size={25}/>}
            <input {...rest} />
            
            {teste && 
                <>
                <span>
                    Adicionar
                </span>
                {/* No Onclick do botão, tem que chamar uma function que vai adicionando os components */}
                {/* Aqui vai ficar sem components, quando clickar no botão, adiciona um component */}
                <button>
                   +
                </button>
                </>
            }
        </Container>
    )
}