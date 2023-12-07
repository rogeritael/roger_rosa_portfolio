import styled, { css } from "styled-components";

interface StyledArticleProps {
    content_side: string
}

export const StyledArticle = styled.article<StyledArticleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    figure {
        min-width: 440px;
        height: 350px;
        overflow: hidden;
        border-radius: 20px;
        cursor: pointer;

        ${props => props.content_side === 'left' && css`        
            order: 1;
        `}

        img {
            pointer-events: none;
            object-fit: cover;
            background-position: left;
            width: 100%;
            height: 100%;
            transition: 500ms;
        }
    }
    .informations {
        max-width: 590px;
        h3 {
            text-transform: uppercase;
            font-size: 16px;
            margin-bottom: 16px;
            color: var(--blue);
        }
        p {
            margin-bottom: 24px;
            line-height: 150%;
        }
        .technologies {
            font-size: 14px;
            color: var(--gray4);
        }
        .buttons_container {
            margin-top: 24px;
            display: flex;
            gap: 14px;
            a {
                display: flex;
                flex-direction: row;
                align-items: center;
                font-size: 14px;
                text-transform: uppercase;
                justify-content: center;
                border: 1px solid var(--gray3);
                padding: 8px 12px;
                border-radius: 24px;
                gap: 8px;
                overflow: hidden;
                position: relative;
                span, svg {
                    z-index: 2;
                }
                &::after {
                    content: '';
                    width: 100%;
                    height: 100%;
                    background-color: #7E74F1;
                    position: absolute;
                    z-index: 1;
                    border-radius: 24px;
                    transform: translateX(-100%);
                    transition: 400ms;
                }
                &:hover {
                    &::after {
                        transform: translateX(0);
                    }
                }
            }
        }
    }
    @media(max-width: 900px){
        figure {
            min-width: calc(440px * 0.6);
            height: calc(350px * 0.6);
            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
    }
    @media(max-width: 768px){
        flex-direction: column;
        figure {
            width: 100%;
            height: 300px;
            order: initial;
        }
    }
    @media(max-width: 450px){
        .informations {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            p {
                text-align: justify;
            }
        }
        figure {
            width: 100%;
            aspect-ratio: 1/1;
        }
    }
`;