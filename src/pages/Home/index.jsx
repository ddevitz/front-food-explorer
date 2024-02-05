import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FoodCard } from "../../components/FoodCard";

export function Home(){
    return(
        <Container>
            <Header />

            <FoodCard />
            
            <Footer />
        </Container>
    )
}