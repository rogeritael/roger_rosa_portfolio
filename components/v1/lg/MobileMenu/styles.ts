// import styled, { css, keyframes } from "styled-components";

// const fadeInLeft = keyframes`
//     from {
//         opacity: 0;
//     }
//     to {
//         opacity: 1;
//     }
// `

// interface StyledSectionProps {
//     isMobileMenuOpen: boolean
// }

// export const StyledSection = styled.section<StyledSectionProps>`
//     width: 100%;
//     height: 100vh;
//     position: fixed;
//     display: grid;
//     place-items: center;
//     z-index: 8;
//     inset: 0;
//     padding: 14px;

//     ${(props) => props.isMobileMenuOpen ? '' : css`
//         display: none;
//     `}
    
//     .background {
//         position: absolute;
//         width: 100%;
//         height: 100vh;
//         background-color: var(--gray1);
//         opacity: 0.95;
//     }

//     nav {
//         z-index: 1;
//         display: flex;
//         flex-direction: column;
//         text-align: center;
//         gap: 14px;
//         width: 100%;

//         span {
//             width: 100%;
//             max-width: 500px;
//             height: 32px;
//             position: absolute;
//             top: 24px;
//             right: 18px;
//             margin: 0 auto;
//             display: flex;
//             align-items: center;
//             justify-content: right;
//             cursor: pointer;

//             svg {
//                 fill: #fff;
//                 stroke: #fff;
//                 position: absolute;
//                 font-size: 48px;
//             }
//         }
        
//         a {
//             margin: 0 auto;
//             display: inline-block;
//             width: 100%;
//             max-width: 500px;
//             width: content;
//             padding: 24px;
//             border-radius: 4px;
//             position: relative;
//             font-size: 18px;

//             animation: ${fadeInLeft} 800ms;
//         }
//     }
// `;