const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                'Send the project to the client',
                'Cook the dinner',
                'Take the dog for a walk',
                'Send the project to the client',
                'Cook the dinner',
                'Take the dog for a walk'
            ],
        }
    },
    methods: {
        addNewTask() {
            if (this.newTask) {
                this.tasks.push(this.newTask);
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.tasks.shift(index);
        }
    }
});

app.mount('#root');