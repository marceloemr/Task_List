import 'tailwindcss/tailwind.css'
import mock_tasks from '../data/mock'

export default function Home() {
    let tasks = mock_tasks
    tasks = tasks.remove_filter()

    function render_tasks() {
        return tasks.items.map(task => {
            return (
                <div key={task.id}>
                    <span>{task.id}</span>
                    <span> - {task.description}</span>
                    <span> - {task.done ? 'Done' : 'Active'}</span>
                </div>
            )
        })
    }

    return (
        <div className={`
            flex flex-col
            justify-center
            items-center
            text-white
            bg-gradient-to-tr
            from-purple-500
            to-yellow-600
            h-screen
        `}>
            {render_tasks()}
        </div>
    );
}
