interface SelectionProps {
    value: boolean
}

export default function Selection(props: SelectionProps) {
    const grad = props.value ? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''

    return (
        <div className={`
            flex justify-center items-center
            text-white
            h-7 w-7 rounded-full cursor-pointer
            border border-gray-400
            
           ${grad} 
        `}>
            {props.value ? 'X' : ''}
        </div>
    )
}