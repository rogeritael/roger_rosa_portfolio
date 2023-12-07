import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100%;
    padding: 48px;


    .skills_container {
        display: grid;
        margin-top: 48px;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 20px;
        column-gap: 20px;
    }

    @media(max-width: 1024px){
        .skills_container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media(max-width: 768px){
        .skills_container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 648px){
        .skills_container {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`