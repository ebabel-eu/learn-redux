class todo {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    list() {
        return this.tasks;
    }

    add(task) {
        this.tasks.push(task);
    }

    remove(task) {
        this.tasks = this.tasks
            .filter(_task => { return _task != task });
    }
}

export default todo; 