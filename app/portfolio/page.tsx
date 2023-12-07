'use client'
import { useEffect, useState } from 'react';
import { MobileMenu } from '@/components/v1/lg/MobileMenu';
import { Header } from '@/components/v1/lg/Header';
import { Cover } from '@/components/v1/lg/Cover';
import { SkillsContainer } from '@/components/v1/lg/SkillsContainer';
import { Projects } from '@/components/v1/lg/Projects';
import { ContactForm } from '@/components/v1/md/ContactForm';
import { Footer } from '@/components/v1/lg/Footer';
import './styles.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Portfolio(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    },[])

    return(
        <main id='portfolio_page'>
            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Cover />
            <SkillsContainer />
            <Projects />
            {/* <FAQ /> */}
            <ContactForm />
            <Footer />
        </main>
    )
}
