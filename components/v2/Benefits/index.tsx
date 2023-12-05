import './styles.scss'

interface BenefitsProps {
    children: React.ReactNode
}

export function Benefits({ children }: BenefitsProps){
    return (
        <section id="benefits">
            <h2>Quais os benefícios em automatizar processos?</h2>
            <div className="benefits_container">
                {children}
            </div>
        </section>
    )
}