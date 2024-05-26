import TaskList from "@/models/TaksList";
import ListItem from "@/components/List/ListItem";

interface ListProps {
   tasks: TaskList
    changed: (tasks: TaskList) => void
}

export default function List(props: ListProps) {
    const { tasks, changed } = props;

    function render_tasks() {
        return tasks.items.map(task => {
            return (
                <ListItem key={task.id}
                          value={task.description}
                          done={task.done}
                          switch_status={() =>{
                              const altered_task = task.switch_status()
                              const new_list = tasks.modify_task(altered_task)
                              props.changed(new_list)
                          }}
                />
            )
        })
    }

    return (
        <div className={`
            flex w-3/5
        `}>
            <ul className={`
                w-full list-none
                bg-white shadow-lg rounded-xl
            `}>
                {render_tasks()}
            </ul>
        </div>
    )
}