import "./styles.scss";
import { IoIosArrowForward } from 'react-icons/io';




interface ProjectCardProps {
    cover: string,
    project_name: string,
    description: string,
    technologies: string[],
    gitLink: string,
    prodLink: string,
    content_side: string
}

export function ProjectCard({ cover, project_name, description, technologies, gitLink, prodLink, content_side }: ProjectCardProps){
    return(
        <article className="portfolio_project_card">
        {/* <article content_side={content_side}> */}

            <figure data-aos="zoom-out" onClick={() => window.open(prodLink, '_blank')}>
                <img src={cover} alt="cover do projeto em destaque" />
            </figure>

            <div className="informations" data-aos={content_side === 'left' ? "fade-right" : "fade-left"}>
                <h3>{project_name}</h3>
                <p>{description}</p>
                <span className="technologies">{technologies.map((tech) => (tech+', '))}</span>

                <div className="buttons_container"> 
                    <a href={gitLink} target="_blank"> <span>github</span> <IoIosArrowForward /> </a>
                    <a href={prodLink} target="_blank"> <span>deploy</span> <IoIosArrowForward /> </a>
                </div>

            </div>
        </article>

    )

}