import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    min-height: 200px;
    max-height: 500px;

    border: none;
    resize: none;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    border-radius: 8px;
    padding: 14px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    } 
`;