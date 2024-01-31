import { Container } from "./styles";

export function Button({ title, loading = false, icon: Icon, price }){
    return(
        <Container 
            type="button"
            disabled={loading}
            >
            {Icon && <Icon size={25} />}
            {title}
            {price}
        </Container>
    );   
}