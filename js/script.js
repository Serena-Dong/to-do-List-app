const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                'Send the project to the client',
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
            this.tasks.shift(index);
        },
        setDone(index) {
            this.doneTasks.push(this.tasks[index]);
            this.tasks.splice(index, 1);
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