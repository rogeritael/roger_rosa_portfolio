import './styles.scss'
import Image from "next/image"
import foto from '@/assets/v2/user_image.png'
import rounded_text from '@/assets/v2/rounded_text.png'
import { Chip } from '../Chip'

interface UserCardProps {
    subtitle: string,
    title: string,
    bullets: string[]
}

export function UserCard({subtitle, title, bullets}: UserCardProps){
    return (
        <div id="user_card">
            <figure className="profile_image">
                <Image src={foto} alt="imagem de perfil" />
                <Chip label='Roger Rosa' />
                <Chip label='26 anos' />
                <figure className='rounded_text'>
                    <Image src={rounded_text} alt="texto arredondado com o nome do desenvolvedor" />
                </figure>
            </figure>
            <div className="infos">
                <p>{subtitle}</p>
                <h3>{title}</h3>
                <ul>
                    {bullets.map((bullet) => (
                        <li key={bullet}>
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}