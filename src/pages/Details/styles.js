import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 100px auto 80px;
    grid-template-areas: 
    "header"
    "main"
    "footer"
    ;

    main {
        grid-area: main;

        display: flex;
        flex-direction: column;

        margin: 24px auto;

        width: 80%;
        height: 100%; 

        > a{
            font-size: 24px;

            margin-bottom: 40px;

            svg {
                width: 32px;
                height: 32px;
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 390px;
        height: 390px;
    }

    .detailsFood{
        margin-left: 50px;

        > p {
            padding: 24px 0;
        }
    }

`;

export const Section = styled.div`
    

`;