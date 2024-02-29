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

            <div className="header_links" >
                <a href="https://api.whatsapp.com/send?phone=5551981467566" target="_blank">
                    <FaWhatsapp />
                    WhatsApp
                </a>
                <Link href="#form_container" className="orcamento">
                    Entrar em Contato
                </Link>
            </div>
        </header>
    )
}