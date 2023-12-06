import './styles.scss'
import { IoMdTime } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { PiLadderBold } from "react-icons/pi";

interface BenefitItemProps {
    icon: string,
    title: string,
    description: string
}

const icons = [
    {
        name: 'time',
        icon: <IoMdTime />
    },
    {
        name: 'error',
        icon: <IoCloseSharp />
    },
    {
        name: 'cost',
        icon: <MdAttachMoney />
    },
    {
        name: 'scalability',
        icon: <PiLadderBold />
    },
    {
        name: 'efficiency',
        icon: <FaGears />
    },
]

export function BenefitItem({ icon, title, description }: BenefitItemProps){
    return (
        <div className="benefit_item">
            <figure className="icon" >
                <span className="bg_effect" />
                <figure className="icon_bg">
                    {icons.map((svg) => (
                        svg.name === icon && svg.icon
                    ))}
                </figure>
            </figure>
            <div className="texts">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}