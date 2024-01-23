import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    border-radius: 8px;

    > input{
        width: 100%;
        height: 48px;
        padding: 12px 14px;

        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }   
    }
    
    > svg {
        margin-left: 16px;
    }
`;