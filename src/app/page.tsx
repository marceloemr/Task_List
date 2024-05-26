'use client'

import List from "@/components/List/List";
import mock_tasks from '../data/mock'
import TaskList from "@/models/TaksList";

import 'tailwindcss/tailwind.css'
import { useState } from "react";

export default function Home() {
    const [tasks, set_tasks] = useState<TaskList>(mock_tasks)

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
            <List tasks={tasks}
                  changed={(new_tasks) => {set_tasks(new_tasks)}}/>
        </div>
    );
}
