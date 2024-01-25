import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    height: 104px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    gap: 32px;

    padding: 24px 80px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > svg {
        width: 50px;
        height: 50px;
    }

    > button {
        width: 316px;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    font-size: 24px;
    font-weight: 700;

    width: 400px;
    
    > svg {
        margin-right: 10px;
        width: 35px;
        height: 35px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        margin-top: 10px;

        > span {
            font-family: "Roboto", sans-serif;
            font-size: 12px;
            font-weight: 400;
            
            color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};

            margin-top: -5px;
        }
    }
`;