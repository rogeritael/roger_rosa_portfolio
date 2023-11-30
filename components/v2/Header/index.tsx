import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import './styles.scss'
import Link from "next/link";

export function Header(){
    return(
        <header id="automation_header">
            <IoMenu className="mobile_menu"/>
            
            <Link href="" className="logo">
                <h2>Roger Rosa</h2>
            </Link>

            <div className="header_links">
                <a href="#">
                    <FaWhatsapp />
                    WhatsApp
                </a>
                <Link href="#" className="orcamento">
                    Solicitar Orçamento
                </Link>
            </div>
        </header>
    )
}