import { Button } from '../Button'
import './styles.scss'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

export function Form(){
    return (
        <section id='form_container'>
            <h2>
                Como Solicitar <br/> seu Orçamento
            </h2>
            <p className="bullet">
                Descreva em detalhes o que precisa ser automatizado (quais passos manuais gostaria de automatizar).
            </p>
            <p className="bullet">
                Mencione site e quais passos/processos gostaria de automatizar
            </p>
            <form className="form">
                <label>
                    <MdOutlineMailOutline />
                    <input
                        type="text"
                        placeholder='Digite seu e-mail'
                    />
                </label>
                <label>
                    <FaRegUser />
                    <input
                        type="text"
                        placeholder='Digite seu nome'
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