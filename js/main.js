const { createApp } = Vue

createApp({
    data () {
        return {
            newTodo: '',
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

    },
    mounted(){
        console.log('vue funziona')
    }
}).mount('#app')