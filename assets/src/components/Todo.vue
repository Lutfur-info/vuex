<template>
    <div>{{ todo.title }} <button @click.prevent="deleteTodoItem(todo.id)">X</button></div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props:[
            "todo"
        ],
        methods: {
            ...mapActions([
                'deleteTodoItem'
            ])
        }
    }
</script>