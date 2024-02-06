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

        h1 {
            font-size: 40px;
            font-weight: 500;
        }

        > p {
            padding: 24px 0;

            font-size: 24px;
            font-weight: 400;
        }
    }

`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 48px;

    > svg {
        width: 24px;
        height: 24px;
    }

    > p {
        padding: 0 14px;
    }

    > svg:nth-last-child(2){
        margin-right: 33px;
    }

    > button {
        width: auto;
    }

`;

export const Filters = styled.div`
    display: flex;
    flex-direction: row;

    gap: 12px;
`;