import { useEffect, useRef } from "react";
import "./styles.scss";

import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { HiOutlineMail } from "react-icons/hi";

import foto from '@/assets/v1/foto.png'
import Image from "next/image";
import { UserCard } from "@/components/v2/UserCard";


export function Cover(){
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      if (textRef.current) {
        const textArray = textRef.current.innerText.split('');
        textRef.current.innerText = '';
  
        textArray.forEach((letter, i) => {
          setTimeout(() => {
            if (textRef.current) {
              textRef.current.innerText += letter;
            }
          }, 75 * i);
        });
      }
    }, []);

    return(
        <section id="portfolio_cover">
            <div className="content">
                <span>Meu nome é</span>
                <h1>Roger <span>Rosa</span></h1>
                <p>
                    Sou Desenvolvedor Web com +3 anos de experiência atuando na área da programação.
                    Proficiente em JavaScript, TypeScript, React e Node. Apaixonado pela minha profissão.
                </p>
                <div className="socials">
                    <a href="mailto:rogerrosa.dev@gmail.com">
                        <HiOutlineMail className="email"/>
                    </a>
                    <a href="https://github.com/rogeritael" target="_blank">
                        <FiGithub className="git" />
                    </a>
                    <a href="https://www.linkedin.com/in/roger-itael/" target="_blank">
                        <SlSocialLinkedin className="linkedin" />
                    </a>
                </div>
            </div>
            {/* <div className="terminal">
                <img src={browser_icon} alt="" className="browser_icon" />
                <div className="terminal_header">
                    rogerrosa.com
                </div>
                <div className="terminal_content">
                <h1 ref={textRef}>
                    <span>SobreMim&nbsp; &#123;</span><br/>
                    <span className="inner">&nbsp;&nbsp;&nbsp;&nbsp;profissao:&nbsp;Programador,</span><br/>
                    <span className="inner">&nbsp;&nbsp;&nbsp;&nbsp;principais_tecnologias:&nbsp;React,&nbsp;Next,&nbsp;TypeScript,&nbsp;Node </span><br/>
                    <span>&#125;</span>
                    <br/><br/>
                    <span>Formacao&nbsp; &#123;</span><br/>
                    <span className="inner">&nbsp;&nbsp;&nbsp;&nbsp;curso:&nbsp;Analise&nbsp;e&nbsp;Desenvolvimento&nbsp;de&nbsp;Sistemas,</span><br/>
                    <span className="inner">&nbsp;&nbsp;&nbsp;&nbsp;instituicao:&nbsp;Instituto&nbsp;Federal&nbsp;do&nbsp;Rio&nbsp;Grande&nbsp;do&nbsp;Sul</span><br/>
                    <span>&#125;</span>
                </h1>
                </div>
            </div> */}
            <figure className="profile_image">
                <Image src={foto} alt="imagem do programador"/>
            </figure>
        </section>
    )
}