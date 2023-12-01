import './styles.scss'

interface SliderProps {
    children: React.ReactNode
}

export function Slider({ children }: SliderProps){
    return (
        <div id="slider">
            <div className="rail">
                {children}
            </div>
        </div>
    )
}