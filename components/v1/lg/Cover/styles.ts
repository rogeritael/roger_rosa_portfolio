// import styled, { keyframes } from "styled-components";

// const fadeInLeft = keyframes`
//     from {
//         left: -20px;
//         opacity: 0;
//         scale: 0.8;
//     }
//     to {
//         left: 0;
//         opacity: 1;
//         scale: 1;
//     }
// `

// const slideRight = keyframes`
//     from {
//         right: -40px;
//         opacity: 0;
//     }
//     to {
//         right: 0;
//         opacity: 1;
//     }
// `

// const fadeIn = keyframes`
//     from {
//         opacity: 0;
//         filter: blur(3px);
//     }
//     to {
//         opacity: 1;
//         filter: blur(0);
//     }
// `

// export const StyledSection = styled.section`
//     margin-top: 84px;
//     display: flex;
//     height: calc(100vh - 86px);
//     padding: 48px;
//     gap: 24px;
//     align-items: center;
//     justify-content: space-between;

//     .content {
//         max-width: 540px;

//         & > span, h1, p {
//             opacity: 0;
//             animation: ${fadeIn} 1500ms 300ms forwards;
//         }

//         & > span {
//             color: var(--gray3);
//         }

//         h1 {
//             font-size: 36px;
//             margin-bottom: 32px;
//             margin-top: 8px;

//             span {
//                 color: var(--blue);
//             }
//         }

//         p {
//             line-height: 32px;
//             margin-bottom: 40px;
//         }

//         .socials {

//             svg {
//                 font-size: 24px;
//                 margin-right: 24px;
//                 position: relative;
//                 animation: ${fadeInLeft} 500ms;
//                 transition: 300ms;
//             }
            
//             .git:hover {
//                 stroke: var(--gray3);
//             }
//             .email:hover {
//                 stroke: #c71610;
//             }
//             .linkedin:hover {
//                 fill: #0e76a8;
//             }
//         }
//     }

//     .profile_image {
//         /* width: 800px; */
//         height: 400px;
//         width: 400px;
//         margin-left: auto;
//         animation: ${fadeIn} 1000ms;
//         display: flex;
//         align-items: center;
//         justify-content: center;

//         img {
//             min-width: 600px;
//             object-fit: contain;
//             width: 100%;
//             height: 100%;
//         }
//     }

//     /* .terminal {
//         width: 100%;
//         height: 100%;
//         border-radius: 8px;
//         border: 1.5px solid var(--gray3);
//         position: relative;

//         animation: ${slideRight} 1000ms ;

//         .terminal_header {
//             max-width: 300px;
//             height: 20px;
//             background-color: var(--gray2);
//             border-radius: 6px;
//             position: absolute;
//             width: 100%;
//             margin-left: 50%;
//             transform: translateX(-50%);
//             top: 12px;
//             text-align: center;
//             font-size: 12px;
//             line-height: 20px;
//             color: #ffffff50;
//         }

//         .browser_icon {
//             position: absolute;
//             left: 24px;
//             top: 18px;
//         }

//         .terminal_content {
//             height: 100%;
//             padding: 24px;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;

//             h1 {
//                 max-width: 420px;
//                 color: var(--gray4);
//                 font-weight: normal;
//                 font-size: 14px;
//                 line-height: 150%;

//                 h1 {
//                     padding-left: 100px;
//                 }

//                 span {
//                     margin-left: 30px;

//                     &.inner {
//                         padding-left: 12px;
//                     }
//                 }
//             }
//         }
//     } */

//     @media(max-width: 950px){
//         flex-direction: column;

//         .profile_image {
//             width: 100%;

//             img {
//                 min-width: 200px;
//             }
//         }
//         .terminal {
//             display: none;
//         }
//     }
// `