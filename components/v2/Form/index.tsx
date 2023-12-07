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
                    Como Solicitar
                </span>
                <br />
                <span
                    data-aos="flip-up"
                    data-aos-delay="500"
                    data-aos-duration="500"
                >
                    seu Orçamento
                </span>
            </h2>
            <p
                className="bullet"
                data-aos="fade-up"
                data-aos-duration="1000"    
            >
                Descreva em detalhes o que precisa ser automatizado (quais passos manuais gostaria de automatizar).
            </p>
            <p
                className="bullet"
                data-aos="fade-up"
                data-aos-duration="1000"    
            >
                Mencione site e quais passos/processos gostaria de automatizar
            </p>
            <form className="form">
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
                    placeholder='Descreva o seu projeto...'>
                </textarea>
                <Button />
            </form>
        </section>
    )
}