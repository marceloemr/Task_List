import Task from "@/models/Task";
import TaskList from "@/models/TaksList";
import FilterType from "@/models/FilterType";

const initial_tasks: Task[] = [
    Task.create_active(1, 'Study Frontend'),
    Task.create_active(2, 'Meal Prep'),
    Task.create_active(3, 'Study Computer Networks'),
    Task.create_done(4, 'README of the monty hall project'),
]

export default new TaskList(initial_tasks, FilterType.NONE)