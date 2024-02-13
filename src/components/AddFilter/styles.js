import styled from "styled-components";

export const Container = styled.span`
    display: inline-block;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};

    border:  ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: 8px;
    padding: 2px 16px;

    width: auto;

    > button {
        border: none;
        background: none;

        
        > svg {
            padding-top: 3px;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    > input{
        font-size: 16px;
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        border: none;
        background: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`;