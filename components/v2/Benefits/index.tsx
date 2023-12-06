import './styles.scss'

interface BenefitsProps {
    children: React.ReactNode
}

export function Benefits({ children }: BenefitsProps){
    return (
        <section id="benefits">
            <h2
                data-aos="flip-up"
                data-aos-duration="1000"
            >
                <span
                    data-aos="flip-up"
                    data-aos-duration="500"
                >
                    Quais os benefícios em
                </span>
                <br />
                <span
                    data-aos="flip-up"
                    data-aos-delay="500"
                    data-aos-duration="500"
                >
                    automatizar processos?
                </span>
            </h2>
            <div className="benefits_container">
                {children}
            </div>
        </section>
    )
}