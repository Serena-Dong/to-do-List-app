const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                'Send the project to the client',
                'Cook the dinner',
                'Take the dog for a walk'
            ],
            current: new Date()
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