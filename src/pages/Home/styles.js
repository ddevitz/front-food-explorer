import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 100px auto 80px;
    grid-template-areas: 
    "header"
    "main"
    "footer"
    ;
    
    main {
        grid-area: main;
        padding: 0 124px;
    }

`;

export const Banner = styled.div`
    background: linear-gradient(to bottom, #091E26, #00131C);

    width: 100%;
    height: 260px;

    display: flex;
    justify-content: space-between;

    border-radius: 8px;
    margin: 164px auto 60px auto;

    .description{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-right: 100px;
    }

    > img {
        width: 656px;
        height: 412px;
        box-sizing: content-box;

        position: relative;
        bottom: 152px;
        right: 55px;
    }

    h1{
        font-weight: 400;
    }

    p {
        font-size: 12px;
    }
`;

export const Section = styled.div` 

    margin-bottom: 48px;
    h2 {
        font-weight: 400;
        margin-bottom: 24px;
    }
`;

export const Slider = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
`;

