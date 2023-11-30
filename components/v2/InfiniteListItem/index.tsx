import  "./styles.scss";

interface InfiniteListItemProps {
    label: string
}

export function InfiniteListItem({ label }: InfiniteListItemProps){
    return(
        <div className="infinite_list_item">
            {label}
        </div>  
    )
}