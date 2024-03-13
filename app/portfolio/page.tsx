'use client'
import './styles.scss'
import { Cover } from "@/components/v2/Cover";
import { Header } from "@/components/v2/Header";
import { ServicesSection } from "@/components/v2/ServicesSection/page";
import { FormSection } from "@/components/v2/FormSection";
import { Footer } from "@/components/v2/Footer";
import { Benefits } from "@/components/v2/Benefits";
import { BenefitItem } from "@/components/v2/BenefitItem";
import { About } from '@/components/v2/About';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import { Limiter } from '@/components/v2/Limiter';
import { Benefit, BenefitCategory, benefits_data } from '@/src/store/db/benefits_data';
import { useDataStore } from '@/src/store/appStore';
import { MyProjects } from '@/components/v2/MyProjects';

export default function Automacao(){
    // const { beneficios } = useDataStore()
    const [benefits, setBenefits] = useState<Benefit[]>([])
    const { devType } = useDataStore()
    useEffect(() => {
        Aos.init({
            // duration: 1500
        })

        setBenefits(benefits_data[devType])
    },[])

    return (
        <Limiter>
            <main id="automation_page">
                <Header />
                <Cover />
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
                <ServicesSection />
                <MyProjects />
                <FormSection />
                <Footer />
            </main>
        </Limiter>
    )
}