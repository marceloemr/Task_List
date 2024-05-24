export default class Task {
    #id: number
    #description: string
    #done: boolean

    constructor(id: number, description: string, done = false) {
        this.#id = id
        this.#description = description
        this.#done = done
    }

    static create_active(id: number, description: string) {
        return new Task(id, description)
    }

    static create_done(id: number, description: string) {
        return new Task(id, description, true)
    }

    get id() {
        return this.#id
    }

    get description() {
        return this.#description
    }

    get done() {
        return this.#done
    }

    get active() {
        return !this.#done
    }

    task_done() {
        return Task.create_done(this.id, this.description)
    }

    task_active() {
        return Task.create_active(this.id, this.description)
    }

    switch_status() {
        return this.done ? this.task_active() : this.task_done()
    }
}