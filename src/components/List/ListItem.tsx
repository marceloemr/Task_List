import Selection from "@/components/List/Selection";

interface ListItemProps {
    value: string
    done: boolean
    switch_status: () => void
}

export default function ListItem(props: ListItemProps) {
    const text_style = props.done ?
        'line-through text-gray-400' :
        'text-gray-800'

    return (
        <li onClick={props.switch_status}
            className={`
                flex items-center cursor-pointer
                text-black text-xl p-5 border-b
                border-gray-400
            `}>
            <Selection value={props.done} />
            <span className={`
                font-light
                ml-5
                ${text_style}
            `}>
                {props.value}
            </span>

        </li>
    )
}