'use client'
import { Header } from "@/components/v1/Header";
import { useEffect, useState } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Cover } from "@/components/v1/Cover";
import { SkillsContainer } from "@/components/v1/SkillsContainer";
import './styles.scss'
import { Projects } from "@/components/v1/Projects";
import { Footer } from "@/components/v1/Footer";
import { ContactForm } from "@/components/v1/ContactForm";
import { MobileMenu } from "@/components/v1/MobileMenu";

export default function Portfolio(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    },[])

    return(
        <main id="portfolio">
            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
            <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Cover />
            <SkillsContainer />
            <Projects />
            <ContactForm />
            <Footer />
            {/* <FAQ /> */}
        </main>
    )
}