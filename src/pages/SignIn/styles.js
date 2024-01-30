import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;

    font-size: 42px;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    
    > svg {
        margin-right: 20px;
        width: 50px;
        height: 50px;
    }

`;

export const Form = styled.form`
    width: 100%;
    max-width: 500px;

    display: flex;
    flex-direction: column;

    border-radius: 16px;
        
    padding: 64px;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h1 {
        display: flex;
        justify-content: center;

        font-size: 32px;
        font-weight: 500;
        margin-bottom: 32px;
    }

    .input-wrapper{
        margin-bottom: 32px;

        > label{
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }
    }

    button {
        margin-bottom: 32px;
    }

    a {
        justify-content: center;
    }
`;

