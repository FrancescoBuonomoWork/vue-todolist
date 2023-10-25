const { createApp } = Vue

createApp({
    data () {
        return {
            newTodo: {
                text: '',
                done: false
            },
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]

        }
    },
    methods: {
        isDone (indexDone) {
            if (this.todos[indexDone].done) {
                
            }
        },
        addTodo () {
            console.log('add');
           // this.newTodo = '';
            this.todos.unshift(this.newTodo);
            
        }
    },
    mounted(){
        console.log('vue funziona')
        console.log(this.todos)
    }
}).mount('#app')