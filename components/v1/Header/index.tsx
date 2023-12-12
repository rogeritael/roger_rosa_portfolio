import Link from "next/link";
import "./styles.scss";

import { BsArrowRight, BsThreeDotsVertical } from 'react-icons/bs';

interface HeaderProps {
    setIsMobileMenuOpen: (param: boolean) => void
}

export function Header({ setIsMobileMenuOpen }: HeaderProps){
    return(
        <header id="portfolio_header">
            <button className="mobile_menu" onClick={() => setIsMobileMenuOpen(true)}>
                <BsThreeDotsVertical  />
            </button>
            <p className="mobile_brand">
                Roger<span>Rosa</span>
            </p>
            <nav>
                <ul className="menu">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#skills">Habilidades</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                    <li>
                        <Link href="/automation">Automação</Link>
                    </li>
                </ul>
            </nav>
            <a className="contact_button" href="#contact_form">
                Entre em contato
                <BsArrowRight />
            </a>
        </header>
    )
}