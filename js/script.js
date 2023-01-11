console.log('Vue OK', Vue);

const app = Vue.createApp({
    data(){
        return{
            newTask: '',
            tasks: [
                'Finire di scrivere',
                'Cucinare',
                'Portare a spasso il cane'
            ],
        }
    },
    methods: {
        addNewTask(){
            if (this.newTask) {
                this.tasks.push(this.newTask);
                this.newTask = '';
            }
        },
        removeTask(index){
            this.tasks.shift(index);
        }
    }
});

app.mount('#root');