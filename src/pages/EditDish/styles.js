import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 100px auto 80px;
    grid-template-areas: 
    "header"
    "main"
    "footer"
    ;

    h1 {
        font-weight: normal;
        margin-bottom: 32px;
    }

    main {
        grid-area: main;

        display: flex;
        flex-direction: column;

        margin: 24px auto;
        margin-bottom: 100px;

        width: 80%;
        height: 100%; 

        > a{
            font-size: 24px;

            margin-bottom: 40px;

            svg {
                width: 32px;
                height: 32px;
            }
        }
    }
`;

export const Content = styled.div`

    .section1{
        display: grid;
        grid-template-columns: 1fr 2.5fr 2fr;
        gap: 32px;
    }

    .section2{
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 32px;
    }

    .buttonSalve {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        
        button {
            &:nth-child(1){
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
            max-width: 200px;
        }
    }

`;

export const Section = styled.div`
    margin-bottom: 32px;  
      
    label {
        display: flex;
        margin-bottom: 16px;
    }

    select {
        width: 100%;
        height: 48px;

        padding: 12px 14px;

        border: none;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};

        /*Estilizando a seta para baixo */

        appearance: none;
        background-image: url("data:image/svg+xml;utf8,${encodeURIComponent(`<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.454505 0.829505C0.893845 0.390165 1.60616 0.390165 2.0455 0.829505L8 6.78401L13.9545 0.829505C14.3938 0.390165 15.1062 0.390165 15.5455 0.829505C15.9848 1.26884 15.9848 1.98116 15.5455 2.4205L8.7955 9.1705C8.35616 9.60983 7.64384 9.60983 7.2045 9.1705L0.454505 2.4205C0.015165 1.98116 0.015165 1.26884 0.454505 0.829505Z" fill="#C4C4CC"/></svg>`)}");
        background-repeat: no-repeat;
        background-position: right 16px center;
    }

    .buttonUploadImg {
        width: 100%;
        height: 48px;

        border: none;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        svg {
            width: 24px;
            height: 24px;
        }
    }

    .inputAdmin {
        width: 100%;
        min-height: 40px;
        max-height: auto;
        flex-wrap: wrap;

        display: flex;
        align-items: center;
        gap: 16px;

        padding: 0 16px;

        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
`;
