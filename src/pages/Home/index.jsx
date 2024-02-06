import { Container, Banner, Section, Slider } from "./styles";

import macaronsImg from '../../assets/pngegg 1.png';

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FoodCard } from "../../components/FoodCard";

export function Home(){
    return(
        <Container>
            <Header />

            <main>
                <Banner>
                    <img src={macaronsImg} alt="" />

                    <div className="description">
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Banner>

                <Section>
                    <h2>Refeições</h2>
                    <Slider>
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                    </Slider>
                </Section>

                <Section>
                    <h2>Sobremesas</h2>
                    <Slider>
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                    </Slider>
                </Section>

                <Section>
                    <h2>Bebidas</h2>
                    <Slider>
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                    </Slider>
                </Section>
            </main>

            <Footer />
        </Container>
    )
}