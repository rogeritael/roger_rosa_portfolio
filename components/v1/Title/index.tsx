import "./styles.scss";

interface TitleProps {
    string: string,
    emphasis: string
}

export function Title({ string, emphasis }: TitleProps){
    return(
        <h1 className="portfolio_title">
            {string} <span>{emphasis}</span>
        </h1>
    )
}