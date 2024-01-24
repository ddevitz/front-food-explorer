import styled from 'styled-components'

export const Container = styled.div`
    button{
        margin-top: 10px;
    }
    
    div {
        margin-top: 10px;
    }

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