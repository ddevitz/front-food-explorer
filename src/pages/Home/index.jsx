import { Container, Top, Section, Slider } from "./styles";

import macaronsImg from '../../assets/pngegg 1.png';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FoodCard } from "../../components/FoodCard";

export function Home(){
    return(
        <Container>
            <Header />

            <Top>
                <img src={macaronsImg} alt="" />

                <div className="description">
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </Top>

            <Section>
                <h2>Refeições</h2>
                <Slider>
                    <FoodCard />
                </Slider>
            </Section>
            
            <Footer />
        </Container>
    )
}