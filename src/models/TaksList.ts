import Task from "@/models/Task";
import FilterType from "@/models/FilterType";

export default class TaskList {
    #all: Task[]
    #filter: FilterType

    constructor(all: Task[], filter = FilterType.NONE) {
        this.#all = all
        this.#filter = filter
    }

    get items() {
        return this.apply_filter(this.#all)
    }

    get quantity() {
        return this.items.length
    }

    get filter() {
        return this.#filter
    }

    showing_all(): boolean {
        return this.filter === FilterType.NONE
    }

    showing_done(): boolean {
        return this.filter === FilterType.DONE
    }

    showing_active(): boolean {
        return this.filter === FilterType.ACTIVE
    }

    filter_active(): TaskList {
        if (this.showing_active()) {
            return this
        }

        return new TaskList(this.#all, FilterType.ACTIVE)
    }

    filter_done(): TaskList {
        if (this.showing_done()) {
            return this
        }

        return new TaskList(this.#all, FilterType.DONE)
    }

    remove_filter(): TaskList {
        if (this.showing_all()) {
            return this
        }

        return new TaskList(this.#all)
    }

    remove_done(): TaskList {
        const active = this.#all.filter(task => task.active)
        return new TaskList(active, FilterType.NONE)
    }

    add_task(task: Task): TaskList {
        const tasks = [...this.#all]
        tasks.push(task)
        return new TaskList(tasks, this.filter)
    }

    modify_task(mod_task: Task): TaskList {
        const tasks = this.#all.map(task => {
            return task.id === mod_task.id ? mod_task : task
        })

        return new TaskList(tasks, this.filter)
    }

    private filter_done_tasks(tasks: Task[]): Task[] {
        return tasks.filter(task => task.done)
    }

    private filter_active_tasks(tasks: Task[]): Task[] {
        return tasks.filter(task => task.active)
    }

    private apply_filter(tasks: Task[]): Task[] {
        if (this.showing_done()) {
            return this.filter_done_tasks(tasks)
        }

        if (this.showing_active()) {
            return this.filter_active_tasks(tasks)
        }

        return [...tasks]
    }
}