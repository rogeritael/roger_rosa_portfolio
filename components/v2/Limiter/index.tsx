import './styles.scss'

interface LimiterProps {
    children: React.ReactNode
}

export function Limiter({ children }: LimiterProps){
    return (
        <main id="limiter">
            {children}
        </main>
    )
}