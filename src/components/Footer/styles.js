import styled from "styled-components";

export const Container = styled.div`
    grid-area: footer;

    height: 80px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    gap: 32px;

    padding: 24px 80px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > p {
        font-size: 14px;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    font-size: 24px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    
    > svg {
        margin-right: 10px;
        width: 30px;
        height: 30px;
    }

`;