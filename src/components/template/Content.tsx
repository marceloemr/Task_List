interface ContentProps {
    children: any
}

export default function Content(props: ContentProps) {
    return (
        <div className="flex flex-1 justify-center">
            {props.children}
        </div>
    )
}