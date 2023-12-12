import "./styles.scss";

import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { AiOutlineHtml5 } from 'react-icons/ai'
import { BsFillDatabaseFill } from "react-icons/bs";
import { BiLogoNodejs } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

export function Skill( { skill_name, bullets }: { skill_name: string, bullets: string[] } ){
    
    return(
        <div className="portfolio_skill" data-aos="fade-up">
            <div className="header">
                {skill_name === 'HTML' && <AiOutlineHtml5 />}
                {skill_name === 'CSS' && <IoLogoCss3 />}
                {skill_name === 'JavaScript' && <IoLogoJavascript />}
                {skill_name === 'React' && <FaReact />}
                {skill_name === 'Node' && <BiLogoNodejs />}
                {skill_name === 'Banco de Dados' && <BsFillDatabaseFill />}
                <p>{skill_name}</p>
            </div>
            <div className="description">
                {bullets.map((bullet) => (
                    <span>{bullet}, </span>
                ))}
            </div>
        </div>
    )
}