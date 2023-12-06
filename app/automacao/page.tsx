'use client'
import './styles.scss'
import { Cover } from "@/components/v2/Cover";
import { Header } from "@/components/v2/Header";
import { ServicesSection } from "@/components/v2/ServicesSection/page";
import { FormSection } from "@/components/v2/FormSection";
import { Footer } from "@/components/v2/Footer";
import { Benefits } from "@/components/v2/Benefits";
import { BenefitItem } from "@/components/v2/BenefitItem";
import { v2_benefits as benefits } from '@/mocks/v2_benefits';
import { About } from '@/components/v2/About';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function automacao(){
    useEffect(() => {
        Aos.init({
            // duration: 1500
        })
    },[])

    return (
        <main id="automation_page">
            <Header />
            <Cover />
            <ServicesSection />
            <Benefits>
                {benefits.map((benefit, index) => (
                    <BenefitItem
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                    />
                ))}
            </Benefits>
            <About />
            <FormSection />
            <Footer />
        </main>
    )
}