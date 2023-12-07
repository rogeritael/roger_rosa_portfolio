// import styled, { keyframes } from "styled-components";

// const response_entry = keyframes`
//     to {
//         margin-top: 12px;
//         opacity: 1;
//         display: block;
//     }
// `

// export const StyledDiv = styled.div`
//     width: 100%;
//     max-width: 1000px;

//     button {
//         width: 100%;
//         background-color: var(--blue);
//         font-size: 16px;
//         padding: 24px;
//         border-radius: 4px;
//         cursor: pointer;
//         position: relative;
//         transition: 200ms ease-in-out;
//         z-index: 2;
//         display: flex;
//         align-items: center;
//         justify-content: center;

//         &:hover {
//             margin-left: -14px;
//         }

//         &.active {
//             svg {
//                 transform: rotate(45deg);
//             }
//         }

//         svg {
//             font-size: 20px;
//             position: absolute;
//             right: 24px;
//             transition: 200ms;
//         }
//     }

//     .response {
//         border: 1px solid var(--gray3);
//         padding: 24px;
//         margin-top: 12px;
//         border-radius: 8px;
//         position: relative;
//         margin-top: -62px;
//         opacity: 0;
//         z-index: 1;
//         animation: ${response_entry} 300ms ease-out forwards;
    
//         &.closed {
//             display: none;
//         }
//     }

//     @media(max-width: 425px){

//         button {
//             padding: 24px 42px;

//             svg {
//                 right: 14px;
//             }
//         }
//     }
// `