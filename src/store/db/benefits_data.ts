export type Benefit = {
    title: string;
    icon: string;
    description: string;
};

export type BenefitCategory = {
    [key: string]: Benefit[];
};

export const benefits_data: BenefitCategory = {
    'Full Stack': [
        {

            title: 'VERSATILIDADE',
            icon: 'cost',
            description: 'capaz de trabalhar em diversos aspectos do desenvolvimento, desde a criação de interfaces de usuário a sistemas de banco de dados e lógica de negócios.'
        },
        {

            title: 'ADAPTABILIDADE',
            icon: 'time',
            description: 'Habilidade em lidar com todas as camadas de uma aplicação, desde o frontend até o backend, garantindo uma compreensão completa do projeto e uma integração harmoniosa entre todas as partes.'
        },
        {

            title: 'FLEXIBILIDADE',
            icon: 'efficiency',
            description: 'Capaz trabalhar em uma variedade de projetos e contextos, desde startups até grandes corporações.'
        },
        {

            title: 'MANUTENÇÃO E ESCALABILIDADE',
            icon: 'scalability',
            description: 'Experiência desenvolvendo em typescript, ajudando a detectar erros no código durante a fase de desenvolvimento, garantindo segurança, fácil manutenção e escalabilidade.'
        },
    ],
    'Front End': [
        {

            title: 'VERSATILIDADE',
            icon: 'cost',
            description: 'capaz de trabalhar em diversos aspectos do desenvolvimento, desde a criação de interfaces de usuário a sistemas de banco de dados e lógica de negócios.'
        }
    ],
    'Back End': [
        {

            title: 'VERSATILIDADE',
            icon: 'cost',
            description: 'capaz de trabalhar em diversos aspectos do desenvolvimento, desde a criação de interfaces de usuário a sistemas de banco de dados e lógica de negócios.'
        }
    ],
    'Automação': [
        {

            title: 'VERSATILIDADE',
            icon: 'cost',
            description: 'capaz de trabalhar em diversos aspectos do desenvolvimento, desde a criação de interfaces de usuário a sistemas de banco de dados e lógica de negócios.'
        }
    ]
}