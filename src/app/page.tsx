'use client'

import TaskList from "@/models/TaksList";
import Task from "@/models/Task";

import List from "@/components/List/List";
import Header from "@/components/template/Header";
import Content from "@/components/template/Content";
import Form from "@/components/Form/Form";

import mock_tasks from '../data/mock'

import 'tailwindcss/tailwind.css'
import { useState } from "react";

export default function Home() {
    const [tasks, set_tasks] = useState<TaskList>(mock_tasks)

    function add_new_task(new_task: Task) {
        set_tasks(tasks.add_task(new_task))
    }

    return (
        <div className={`
            flex flex-col h-screen justify-center
            items-center text-white
            bg-gradient-to-tr from-purple-500 to-yellow-600
        `}>
            <Header>
                <Form add_new_task={add_new_task}/>
            </Header>
            <Content>
                <List tasks={tasks}
                      changed={(new_tasks) => {set_tasks(new_tasks)}}/>
            </Content>
        </div>
    );
}
