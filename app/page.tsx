import Image from 'next/image'
import './page.scss'
import logo from '@/assets/v2/rounded_text.png'

export default function Home() {
  return (
    <main id='index'>
      <Image src={logo} className='logo' alt='logo'/>
    </main>
  )
}