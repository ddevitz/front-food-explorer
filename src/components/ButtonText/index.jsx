import { Container } from "./styles";

export function ButtonText({ title, icon: Icon }){
    return(
        <Container 
            type="button"
            >
            {Icon && <Icon size={15} />}
            {title}
        </Container>
    );   
}