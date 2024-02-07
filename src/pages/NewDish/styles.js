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

`;

export const Section = styled.div`

`;
