const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            editedTask: '',
            taskEdit: Array(this.tasks).fill(false), // Changed to an array to track editing per task
            tasks: [
                'Call the client',
                'Cook the dinner',
                'Take the dog for a walk'
            ],
            doneTasks: [],
            current: new Date()
        }
    },
    computed: {
    },
    methods: {
        addNewTask() {
            if (this.newTask) {
                this.tasks.push(this.newTask);
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        doneTask(index) {
            this.doneTasks.push(this.tasks[index]);
            this.removeTask(index);
        },
        editTask(index) {
            this.taskEdit[index] = true; // Set the taskEdit flag for the specified task
            this.editedTask = this.tasks[index]; // Set the editedTask to the current task content
        },
        saveEditedTask(index) {
            if (this.editedTask.trim() !== '') {
                this.tasks[index] = this.editedTask.trim();
                this.taskEdit[index] = false; // Reset the taskEdit flag for the specified task
            }
        },
        currentDate() {
            return `${this.current.getDate()}`;
        },
        currentMonth() {
            return this.current.toLocaleString('default', { month: 'long' });
        },
        currentDay() {
            const day = this.current.getDay();
            const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            return dayNames[day];
        },
        currentTime() {
            const hours = this.current.getHours();
            const minutes = this.current.getMinutes();
            return time = hours + ":" + minutes;;
        }
    }

});

app.mount('#root');