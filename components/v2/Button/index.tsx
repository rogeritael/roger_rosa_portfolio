import Link from "next/link";
import './styles.scss'

export function Button(){
    return(
        <div className="budget_button">
            <Link href='#'>
                Solicitar Orçamento
            </Link>
        </div>
    )
}