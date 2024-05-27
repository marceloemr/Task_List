interface HeaderProps {
    children: any
}

export default function Header(props: HeaderProps) {
    return (
        <div className="flex h-1/6">
            <div className={`
                flex flex-1 h-full justify-center items-center
            `}>
                {props.children}
            </div>
        </div>
    )
}