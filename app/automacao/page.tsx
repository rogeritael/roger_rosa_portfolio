import './styles.scss'
import { Cover } from "@/components/v2/Cover";
import { Header } from "@/components/v2/Header";
import { ServicesSection } from "@/components/v2/ServicesSection/page";
import { FormSection } from "@/components/v2/FormSection";
import { Footer } from "@/components/v2/Footer";
import { Benefits } from "@/components/v2/Benefits";
import { BenefitItem } from "@/components/v2/BenefitItem";
import { v2_benefits as benefits } from '@/mocks/v2_benefits';

export default function automacao(){
    return (
        <main id="automation_page">
            <Header />
            <Cover />
            <ServicesSection />
            <Benefits>
                {benefits.map((benefit) => (
                    <BenefitItem
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                    />
                ))}
            </Benefits>
            <FormSection />
            <Footer />
        </main>
    )
}