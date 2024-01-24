import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    font-size: 14px;

    display: flex;
    align-items: center;
    
    > svg {
        margin-right: 5px;
    }
`;