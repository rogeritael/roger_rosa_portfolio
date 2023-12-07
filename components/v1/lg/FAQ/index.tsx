import { Accordion } from "../../md/Accordion";
import { Title } from "../../sm/Title";
import { StyledSection } from "./styles";

import { QA } from "../../../mocks/Q&A";

export function FAQ(){
    return (
        <StyledSection id="about">
            <Title
                string="Um Pouco Mais"
                emphasis="Sobre Mim"
            />
            <div className="FAQ_container">
                {QA.map((question) => (
                    <Accordion
                        question={question.question}
                        response={question.answer}
                    />
                ))}
            </div>
        </StyledSection>
    )
}