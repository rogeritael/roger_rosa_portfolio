import Image from "next/image";
import './styles.scss'

interface ProjectProps {
    name: string;
    image: string;
    github: string;
    deploy: string;
    technologies: string[];
}

export function ProjectItem({ name, image, github, deploy, technologies }: ProjectProps){
    return(
        <article className="project_card">
            <figure className="cover">
                <Image width={500} height={500} src={image} alt="imagem do projeto"/>
            </figure>

            <div className="mask">
                <h2>{name}</h2>
                <div className="button_container">
                    <button>
                        <span>link</span>
                        <figure></figure>
                    </button>
                    <button>
                        <span>github</span>
                        <figure></figure>
                    </button>
                </div>
                <div className="technologies">
                    {technologies.map((tech) => (
                        <span>{tech}</span>
                    ))}
                </div>
            </div>
        </article>
    )
}