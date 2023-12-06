import './styles.scss'

interface ServiceItemProps {
    position: string,
    description: string,
    category: string
}

export function ServiceItem({position, description, category}: ServiceItemProps){
    return (
        <article
            className="service_item"
            data-aos="fade-in"
            data-aos-delay={`${(Number(position) -1) * 200}`}
            data-aos-duration="1000"
        >
            <figure className='rounded'>
                <p>{position}</p>
            </figure>
            <p className='description'>{description}</p>
            <p className='category'>{category}</p>
        </article>
    )
}