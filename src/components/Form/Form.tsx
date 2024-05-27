import Task from "@/models/Task";

import { useState } from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormProps {
    add_new_task: (task: Task) => void
}

export default function Form(props: FormProps) {
    const [description, set_description] = useState('');

    function create_new_task() {
        if (description?.trim().length > 0) {
            const new_task = Task.create_active(Math.random(), description)
            props.add_new_task(new_task)
            set_description('')
        }
    }

    return (
        <div className="flex flex-1 justify-center">
            <input type="text"
                   value={description}
                   placeholder="Add a new task"
                   onChange={e => set_description(e.target.value)}
                   onKeyDown={e => e.key === 'Enter' && create_new_task()}
                   className={`
                       text-black py-2 px-3 rounded-lg border-2
                       border-purple-200 focus:outline-none text-xl
                       focus:ring-2 focus:ring-purple-600
                   `}/>
            <button onClick={create_new_task}
                    className={`
                        ml-3 bg-purple-500 text-xl focus:outline-none
                        px-5 py-4 rounded-lg
                    `}>
                <FontAwesomeIcon icon={faPlus}
                                 size="sm" />
            </button>
        </div>
    )
}