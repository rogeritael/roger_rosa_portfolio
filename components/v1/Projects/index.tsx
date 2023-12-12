import { Title } from "../Title";
import "./styles.scss";
import { projects } from "@/mocks/v1_projects";
import { ProjectCard } from "../ProjectCard";

export function Projects(){
    return(
        <section id="portfolio_projects">
            <Title
                string="Projetos em"
                emphasis="Destaque"
            />
            <div className="projects_container">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.project_name}
                        project_name={project.project_name}
                        technologies={project.technologies}
                        cover={project.cover.src}
                        description={project.description}
                        gitLink={project.gitLink}
                        prodLink={project.prodLink}
                        content_side={project.content_side}
                    />
                ))}
            </div>
        </section>
    )
}