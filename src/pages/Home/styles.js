import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 100px auto 80px;
    grid-template-areas: 
    "header"
    "top"
    "content"
    "footer"
    ;
    
`;

export const Top = styled.div`
    grid-area: top;

    background: linear-gradient(to bottom, #091E26, #00131C);

    width: 1120px;
    height: 260px;

    display: flex;
    justify-content: space-between;

    border-radius: 8px;
    margin: 164px auto;

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
    }

    h1{
        font-weight: 400;
    }

    p {
        font-size: 12px;
    }
`;

export const Section = styled.div`
    grid-area: content;
    
    width: 100%;
    height: 100vh;

    h2 {
        font-weight: 400;
    }
`;

export const Slider = styled.div`

`;

