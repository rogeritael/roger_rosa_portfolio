import { ProjectItem } from '../ProjectItem'
import './styles.scss'

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Sentinel from '@/assets/projetos/projeto-sentinel.jpg'
import Itau from '@/assets/projetos/projeto-itau.png'
import Projeto1 from '@/assets/projetos/projeto-teste1.jpg'
import Projeto2 from '@/assets/projetos/projeto-teste2.jpg'
import Projeto3 from '@/assets/projetos/projeto-teste3.jpg'
import Projeto4 from '@/assets/projetos/projeto-teste4.jpg'


export function MyProjects(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    return(
        <section id='my_projects'>
            <h2 className='section_title'>Meus Projetos</h2>
            {/* <div className='slider'>
                <div className="rail"> */}
            <Slider {...settings}>
                    <ProjectItem
                        key='01'
                        name='Sentinel'
                        image={Itau.src}
                        deploy=''
                        github=''
                        technologies={['React', 'TypeScript', 'Electron']}
                    />
                    <ProjectItem
                        key='01'
                        name='Sentinel'
                        image={Projeto1.src}
                        deploy=''
                        github=''
                        technologies={['React', 'TypeScript', 'Electron']}
                    />
                    <ProjectItem
                        key='01'
                        name='Sentinel'
                        image={Projeto2.src}
                        deploy=''
                        github=''
                        technologies={['React', 'TypeScript', 'Electron']}
                    />
                    <ProjectItem
                        key='01'
                        name='Sentinel'
                        image={Projeto3.src}
                        deploy=''
                        github=''
                        technologies={['React', 'TypeScript', 'Electron']}
                    />
                    <ProjectItem
                        key='01'
                        name='Sentinel'
                        image={Projeto4.src}
                        deploy=''
                        github=''
                        technologies={['React', 'TypeScript', 'Electron']}
                    />
                {/* </div>
            </div> */}
            </Slider>
        </section>
    )
}