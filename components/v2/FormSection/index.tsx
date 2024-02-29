import './styles.scss'
import { Form } from '../Form'
import mask from '@/assets/v2/mask.png'
import bg from '@/assets/v2/form_bg.png'
import Image from 'next/image'

export function FormSection(){
    return (
        <section id="form_section">
            <Form />
            <figure className="background" data-aos="zoom-in">
                <Image src={bg} alt='imagem de fundo' />
                <Image src={mask} alt='máscara da imagem de fundo' />
            </figure>
        </section>
    )
}