import { Skill } from "../../sm/Skill";
import { Title } from "../../sm/Title";
import "./styles.scss";
import { skills } from "@/mocks/v1_skills_v2";

export function SkillsContainer(){
    return(
        <section id="skills">
            <Title
                string="Minhas"
                emphasis="Habilidades"
            />
            <div className="skills_container">
                {skills.map((skill) => (
                    <Skill skill_name={skill.title} bullets={skill.bullets} />
                ))}
            </div>
        </section>
    )
}