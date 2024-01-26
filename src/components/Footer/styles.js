import styled from "styled-components";

export const Container = styled.div`
    grid-area: footer;

    height: 104px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    gap: 32px;

    padding: 24px 80px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;