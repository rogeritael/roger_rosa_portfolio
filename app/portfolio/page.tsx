'use client'
import { Header } from "@/components/v1/Header";
import { useEffect, useState } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Cover } from "@/components/v1/Cover";
import { SkillsContainer } from "@/components/v1/SkillsContainer";
import './styles.scss'
import { Projects } from "@/components/v1/Projects";

export default function Portfolio(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    },[])

    return(
        <main id="portfolio">
            {/* <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} /> */}
            <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Cover />
            <SkillsContainer />
            <Projects />
            {/* <FAQ /> */}
            {/* <ContactForm /> */}
            {/* <Footer /> */}
        </main>
    )
}