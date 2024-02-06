import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid black;
    width: 270px;
    height: 400px;
    
    padding: 24px;

    position: relative;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    > svg {
        position: absolute;
        top: 10px;
        right: 10px; 

        width: 24px;
        height: 24px;

        cursor: pointer;
    }

    `;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img {
        width: 176px;
        height: 176px;

        margin-bottom: 15px;
    }
    
    h1{
        display: flex;
        align-items: center;
        font-size: 16px;
        margin-bottom: 15px;
    }
    
    p{
        font-size: 10px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 15px;
    }
    
    span {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
        margin-bottom: 15px;
    }
`;

export const Section = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 14px;

    > p{
        font-size: 14px;
    }

    > svg {
        width: 24px;
        height: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;