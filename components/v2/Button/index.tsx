import Link from "next/link";
import './styles.scss'

export function Button(){
    return(
        <div
            className="budget_button"
            data-aos="fade-in"
            data-aos-delay="400"
            data-aos-duration="1000"    
        >
            <Link href='#'>
                Solicitar Orçamento
            </Link>
        </div>
    )
}