import './styles.scss'

interface ServiceItemProps {
    position: string,
    description: string,
}

export function ServiceItem({position, description}: ServiceItemProps){
    return (
        <article
            className="service_item"
            data-aos="fade-in"
            data-aos-delay={`${(Number(position) -1) * 200}`}
            data-aos-duration="1000"
        >
            <p className='description'>{description}</p>
        </article>
    )
}