const { createApp } = Vue

createApp({
    data() {
        return {
            newTodoInputVal: '',
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

        addTodo() {

            console.log('add');
            
            
           // if (this.newTodoInputVal.lengh > 5) {}
            const newTodo = {
                text: this.newTodoInputVal,
                done: false,
            };
            this.newTodoInputVal = '';
                this.todos.unshift(newTodo);
            
            //console.log(this.newTodoInputVal.length)
            
            // secondo metodo con lo spread ... creamo un nuovo elemento
            // const newTodo = { ...this.newTodo };
            // this.newTodo.text = '';
            
            // this.todos.unshift(newTodo);

        },
        deleteTodo(indexTodo) {
            console.log('delete');
            this.todos.splice(indexTodo, 1);

        },
        isDone(indexTodo) {
            if(this.todos[indexTodo].done === true) {
                this.todos[indexTodo].done = false

            } else {
                this.todos[indexTodo].done = true
            }
        }
    },
    mounted() {
        console.log('vue funziona')
        console.log(this.todos)
    }
}).mount('#app')