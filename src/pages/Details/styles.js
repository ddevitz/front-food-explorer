import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;

    .window{
        width: 500px;
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 90px auto;
        padding: 64px;
        border-radius: 16px;

        background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }
`;