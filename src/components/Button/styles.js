import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: 0;
    padding: 12px 24px;
    border-radius: 5px;
    font-weight: 500;

    font-size: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
    }

    &:disabled{
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    }

    > svg {
        margin-right: 8px;
    }
`;