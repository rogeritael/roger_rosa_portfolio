import Image from 'next/image'
import './styles.scss'

import services_bg from '@/assets/v2/services_bg.png' 
import { Slider } from '../Slider'
import { ServiceItem } from '../ServiceItem'
import { services } from '@/mocks/v2_services'

export function ServicesSection(){
    return (
        <section id="services">
            <h2>
                Descubra os serviços que desenvolvemos por aqui
            </h2>
            
            <Slider>
                {services.map((service, index ) => (
                    <ServiceItem
                        key={index}
                        position={`0${index+1}`}
                        description={service.description}
                        category={service.category}
                    />
                ))}
            </Slider>

            <figure className='bg'>
                <Image src={services_bg} alt='imagem de fundo' />
            </figure>
        </section>
    )
}