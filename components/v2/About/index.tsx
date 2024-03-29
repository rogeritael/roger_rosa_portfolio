import './styles.scss'
import { UserCard } from "../UserCard";
import { useState } from 'react';
import { about } from '@/src/store/db/about';
import { useDataStore } from '@/src/store/appStore';

const userInfos = {
    subtitle: "Sobre mim!",
    title: 'Programador, apaixonado por tecnologia e por transformar linhas de código em soluções reais.',
    bullets: [
        '+4 anos na área desenvolvendo e entregando diversos projetos com extrema qualidade',
        'Parte do time de tecnologia de uma das maiores empresas de Marketing Digital do Mundo (Media.Monks)',
        'Apaixonado pela minha profissão.'
    ]
}

export function About(){
    const { devType } = useDataStore()
    const [bullets, setBullets] = useState(about[devType])
    return(
        <section id="about">
            <h2 >
                <span
                    // style={{ display: 'inline-block' }}
                    data-aos="flip-up"
                    data-aos-duration="500"
                >
                    Mas... 
                </span>
                <br/>
                <span
                    data-aos="flip-up"
                    data-aos-delay="500"
                    data-aos-duration="500"
                >
                    Quem sou eu?
                </span>
            </h2>
            <UserCard
                subtitle={userInfos.subtitle}
                title={userInfos.title}
                bullets={bullets}
            />
        </section>
    )
}