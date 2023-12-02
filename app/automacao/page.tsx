import { Cover } from "@/components/v2/Cover";
import { Header } from "@/components/v2/Header";

import './styles.scss'
import { ServicesSection } from "@/components/v2/ServicesSection/page";
import { FormSection } from "@/components/v2/FormSection";

export default function automacao(){
    return (
        <main id="automation_page">
            <Header />
            <Cover />
            <ServicesSection />
            <FormSection />
        </main>
    )
}