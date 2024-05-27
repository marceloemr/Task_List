interface ContentProps {
    children: any
}

export default function Content(props: ContentProps) {
    return (
        <div className="flex flex-1 w-full justify-center">
            {props.children}
        </div>
    )
}