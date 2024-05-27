interface ListButtonProps {
    selected?: boolean
    class_name?: string
    children: any
    on_click: (e: any) => void
}

export default function ListButton(props: ListButtonProps) {
    const border = props.selected ? 'border-b-4 border-purple-400' : ''

    return (
        <button onClick={props.on_click}
                className={`
                    text-gray-500 font-semibold
                    hover:text-black
                    focus:outline-none
                ${border}
                ${props.class_name}
                `}
        >
            {props.children}
        </button>

    )
}