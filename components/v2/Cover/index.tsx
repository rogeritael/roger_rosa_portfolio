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
                <h1>
                    Precisando de <br/> uma automação/bot?
                </h1>
                <p>
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
                <a className="mobile_whatsapp" href="#">
                    <FaWhatsapp /> WhatsApp
                </a>

            </div>
            <Image src={cover} className="background" alt="capa de fundo" />
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