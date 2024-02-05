import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 100px auto 80px;
    grid-template-areas: 
    "header"
    "content"
    "footer"
    ;
`;