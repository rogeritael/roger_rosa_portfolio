import Image from 'next/image'
import './styles.scss'

import services_bg from '@/assets/v2/services_bg.png' 
import { Slider } from '../Slider'
import { ServiceItem } from '../ServiceItem'

export function ServicesSection(){
    return (
        <section id="services">
            <h2>
                Descubra os serviços que desenvolvemos por aqui
            </h2>
            
            <Slider>
                <ServiceItem
                    position={'01'}
                    description='Disparos automáticos de emails para clientes de forma rápida.'
                    category='email'
                />
                <ServiceItem
                    position={'01'}
                    description='Disparos automáticos de emails para clientes de forma rápida.'
                    category='email'
                />
                <ServiceItem
                    position={'01'}
                    description='Disparos automáticos de emails para clientes de forma rápida.'
                    category='email'
                />
                <ServiceItem
                    position={'01'}
                    description='Disparos automáticos de emails para clientes de forma rápida.'
                    category='email'
                />
                <ServiceItem
                    position={'01'}
                    description='Disparos automáticos de emails para clientes de forma rápida.'
                    category='email'
                />
            </Slider>

            <figure className='bg'>
                <Image src={services_bg} alt='imagem de fundo' />
            </figure>
        </section>
    )
}