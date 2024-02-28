import Link from "next/link";
import './styles.scss'
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

export function Footer(){
    return(
        <footer id="footer">
            <div className="top">
                <p>@2024 Roger Rosa</p>
                <p>
                    <span>
                        Acompanhe nas redes sociais
                    </span>
                    <Link href="/" className="rounded_social">
                        <FaInstagram />
                    </Link>
                </p>
            </div>
            <div className="bottom">
                <div className="menu">
                    <Link href="/">Termos de uso</Link>
                    <Link href="/">Política de privacidade</Link>
                </div>
                <Link href="/portfolio">
                    voltar ao topo
                    <IoIosArrowDropupCircle />
                </Link>
            </div>
        </footer>
    )
}