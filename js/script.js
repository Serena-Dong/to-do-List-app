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
            if (this.newTask) this.tasks.push(newTask);
        },
        removeTask(index){
            return this.tasks.shift(index)
        }
    }
});

app.mount('#root');