import TaskList from "@/models/TaksList";
import ListButton from "@/components/List/ListButton";

interface ListFooterProps {
    tasks: TaskList
    changed: (tasks: TaskList) => void
}

export default function ListFooter(props: ListFooterProps) {
    const { tasks, changed } = props

    function render_item_amount() {
        return (
            <>
                <span className={`
                    text-gray-400 hidden lg:inline
                `}>
                    {tasks.items.length}
                    {tasks.items.length === 1 ?
                        ' task' :
                        ' tasks'
                    }
                </span>
                <span className="flex-1 hidden lg:inline">

                </span>
            </>
        )
    }

    function render_buttons_filter() {
        return (
            <>
                <ListButton selected={tasks.showing_all()}
                            on_click={() => changed(tasks.remove_filter())}
                            class_name={"hidden md:inline"}>
                    All
                </ListButton>
                <ListButton selected={tasks.showing_active()}
                            on_click={() => changed(tasks.filter_active())}
                            class_name={"mx-4"}>
                    Active
                </ListButton>
                <ListButton selected={tasks.showing_done()}
                            on_click={() => changed(tasks.filter_done())}
                            class_name={""}>
                    Done
                </ListButton>
            </>
        )
    }

    function render_remove_done() {
        return (
            <>
                <span className="flex-grow">
                    <ListButton on_click={() => changed(tasks.remove_done())}>
                        Remove<span className="hidden md:inline"> Done</span>
                    </ListButton>
                </span>
            </>
        )
    }

    return (
        <li className={`flex p-5`}>
            {render_item_amount()}
            {render_buttons_filter()}
            {render_remove_done()}
        </li>
    )
}