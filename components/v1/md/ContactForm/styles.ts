import styled from "styled-components";

export const FormContainer = styled.div`
    padding: 24px 40px;
    margin-bottom: 44px;

    h2 {
        text-align: center;
        font-size: 32px;
        
        &.highlight {
            color: var(--blue);
            margin-bottom: 44px;
        }
    }

    form {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        input, textarea {
            background-color: transparent;
            border-bottom: 1px solid var(--blue);

            &:focus {
                border-color: #fff;
            }
        }

        input {
            margin-bottom: 24px;
            height: 40px;
        }

        textarea {
            border: 1px solid var(--blue);
            padding: 14px;
            border-radius: 8px;
            margin-top: 36px;
            resize: none;
        }

        button {
            margin-top: 14px;
            background-color: var(--blue);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;
            padding: 14px;
            font-size: 16px;
            cursor: pointer;
        }
    }
`;