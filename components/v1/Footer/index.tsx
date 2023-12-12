import "./styles.scss";
import { HiOutlineMail } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';

export function Footer(){
    return(
        <footer id="portfolio_footer">
            <div className="socials">
                <a href="mailto:rogerrosa.dev@gmail.com">
                    <HiOutlineMail />
                </a>
                <a href="https://github.com/rogeritael" target="_blank">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/roger-itael/" target="_blank">
                    <SlSocialLinkedin />
                </a>
            </div>
            <p>Desenvolvido com <span>Next.js</span></p>
        </footer>
    )
}