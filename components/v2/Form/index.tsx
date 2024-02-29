import { Button } from '../Button'
import './styles.scss'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

export function Form(){
    return (
        <section id='form_container'>
            <h2
                data-aos="flip-up"
                data-aos-duration="1000"
            >
                <span
                    data-aos="flip-up"
                    data-aos-duration="500"
                >
                    Gostaria de Entrar
                </span>
                <br />
                <span
                    data-aos="flip-up"
                    data-aos-delay="500"
                    data-aos-duration="500"
                >
                    Em Contato?
                </span>
            </h2>
            {/* <p
                className="bullet"
                data-aos="fade-up"
                data-aos-duration="1000"    
            >
                Descreva em detalhes o que precisa ser automatizado (quais passos manuais gostaria de automatizar).
                Mencione o seu nome e o seu email
            </p>*/}
            <p
                className="bullet"
                data-aos="fade-up"
                data-aos-duration="1000"    
            >
                Envie uma mensagem para conversarmos melhor sobre a nossa parceria futura e responderei assim que possível
            </p>
            <form className="form" action="https://api.staticforms.xyz/submit" method="post" data-aos="fade-up">
                <label>
                    <FaRegUser />
                    <input
                        type="text"
                        placeholder='Digite seu nome'
                    />
                </label>
                <label>
                    <MdOutlineMailOutline />
                    <input
                        type="text"
                        placeholder='Digite seu e-mail'
                    />
                </label>
                <textarea
                    placeholder='Escreva a sua mensagem...'>
                </textarea>
                <button type='submit' className='send_button'>Enviar</button>
                <input type="hidden" name="accessKey" value="bf460d11-f4fd-4a74-a2f7-66fe3bb2f025"/>
                <input type="hidden" name="redirectTo" value='/automacao?form_send' />
                {/* <Button /> */}
            </form>
        </section>
    )
}