import { AiOutlineArrowRight } from "react-icons/ai";
import "./styles.scss";

export function ContactForm(){
    return(
        <div id="contact_form" data-aos="fade-in">
            <h2>Entre em contato para </h2>
            <h2 className="highlight">conversarmos melhor </h2>

            <form action="https://api.staticforms.xyz/submit" method="post">
                
                <input type="text" placeholder="Seu nome" name="name" required />
                <input type="email" placeholder="Seu email" name="email" required />

                {/* <input type="hidden" name="_subject" value="Novo Contato!"/> */}
                {/* <input type="text" name="_honey" value="display:none" style={{display: 'none'}}/> */}
                {/* <input type="hidden" name="_captcha" value="false"/> */}

                <textarea
                    cols={30}
                    rows={10}
                    name="message"
                    required
                    placeholder="Digite a sua mensagem">
                </textarea>

                <button type="submit">Enviar <AiOutlineArrowRight /></button>
                <input type="hidden" name="accessKey" value="bf460d11-f4fd-4a74-a2f7-66fe3bb2f025"/>
                <input type="hidden" name="redirectTo" value='/thankyou' />
            </form>
        </div>
    )
}