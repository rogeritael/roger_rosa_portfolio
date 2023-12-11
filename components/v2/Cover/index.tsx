import cover from '@/assets/v2/cover_bg.png'
import { Button } from "../Button";
import { InfiniteList } from "../InfiniteList";
import { InfiniteListItem } from "../InfiniteListItem";
import { FaWhatsapp } from "react-icons/fa";

import './styles.scss'
import Image from "next/image";

export function Cover(){
    return(
        <section id="automation_cover">
            <div className="title_box">
                <h1
                    data-aos="fade-up"
                    // data-aos-delay="0"
                    data-aos-duration="1000"
                >
                    Precisando de <br/> uma automação/bot?
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    Como profissional experiente, desenvolvo soluções de automação totalmente adaptadas às suas necessidades. Seja para simplificar processos complexos ou otimizar fluxos de trabalho, aumentando a sua produtividade.
                </p>

                <InfiniteList>
                    <InfiniteListItem label="email" />
                    <InfiniteListItem label="planilhas" />
                    <InfiniteListItem label="bots" />
                    <InfiniteListItem label="scrapping" />
                    <InfiniteListItem label="conversores" />
                </InfiniteList>
                <Button />
                <a className="mobile_whatsapp" href="#form_container">
                    <FaWhatsapp /> WhatsApp
                </a>

            </div>
            <div className="background">
                <Image src={cover} alt="capa de fundo" />
            </div>
            <InfiniteList className='infinite_list_mobile'>
                <InfiniteListItem label="email" />
                <InfiniteListItem label="planilhas" />
                <InfiniteListItem label="bots" />
                <InfiniteListItem label="scrapping" />
                <InfiniteListItem label="conversores" />
            </InfiniteList>
        </section>
    )
}