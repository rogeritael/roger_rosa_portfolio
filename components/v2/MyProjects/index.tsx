import { ProjectItem } from '../ProjectItem'
import { Slider } from '../Slider'
import './styles.scss'

import Sentinel from '@/assets/projetos/projeto-sentinel.jpg'

export function MyProjects(){
    return(
        <section id='my_projects'>
            <h2 className='section_title'>Meus Projetos</h2>
            <div className='slider'>
                <div className="rail">
                    <ProjectItem
                        key='01'
                        name='Sentinel'
                        image={Sentinel.src}
                        deploy=''
                        github=''
                        technologies={['React', 'TypeScript', 'Electron']}
                    />
                    <ProjectItem
                        key='01'
                        name='Sentinel'
                        image={Sentinel.src}
                        deploy=''
                        github=''
                        technologies={['React', 'TypeScript', 'Electron']}
                    />
                    <ProjectItem
                        key='01'
                        name='Sentinel'
                        image={Sentinel.src}
                        deploy=''
                        github=''
                        technologies={['React', 'TypeScript', 'Electron']}
                    />
                    <ProjectItem
                        key='01'
                        name='Sentinel'
                        image={Sentinel.src}
                        deploy=''
                        github=''
                        technologies={['React', 'TypeScript', 'Electron']}
                    />
                </div>
            </div>
        </section>
    )
}