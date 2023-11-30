import  "./styles.scss";

interface InfiniteListProps {
    children: React.ReactNode,
    className?: string
}

export function InfiniteList({ children, className }: InfiniteListProps){
    return(
        <div className="infinite_list">
            <div className="rail">
                {children}{children}
            </div>
        </div>  
    )
}