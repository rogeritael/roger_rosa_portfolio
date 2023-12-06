import './styles.scss'
import { UserCard } from "../UserCard";

const userInfos = {
    subtitle: 'vamos automatizar tudo!',
    title: 'Programador, apaixonado por tecnologia e por automação de processos.',
    bullets: [
        '+4 anos na área desenvolvendo e entregando diversos projetos com extrema qualidade',
        'Parte do time de tecnologia de uma das maiores empresas de Marketing Digital do Mundo (Media.Monks)',
        'Apaixonado pela minha profissão.'
    ]
}

export function About(){
    return(
        <section id="about">
            <h2>
                Mas... <br/>
                Quem sou eu?
            </h2>
            <UserCard
                subtitle={userInfos.subtitle}
                title={userInfos.title}
                bullets={userInfos.bullets}
            />
        </section>
    )
}