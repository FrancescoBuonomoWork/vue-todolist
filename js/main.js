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
            
            
            const newTodo = {
                text: this.newTodoInputVal.trim(),
                done: false,
            };
            // if (this.newTodoInputVal.lengh > 5) {}
            if (newTodo.text.length > 5) {
                
               
               this.todos.unshift(newTodo);
           }
             this.newTodoInputVal = '';
            //console.log(newTodo.text.length)
            
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