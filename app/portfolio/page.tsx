'use client'
import { Header } from "@/components/v1/Header";
import { useState } from "react";

export default function Portfolio(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return(
        <main id="portfolio">
            <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </main>
    )
}