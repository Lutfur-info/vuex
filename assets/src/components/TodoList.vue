<template>
    <div>
        <ol v-if="hastodos">
            <li v-for="todo in todos" :key="todo.id">
                <todo :todo="todo" />
            </li>
        </ol>

        <div v-else>No todo found</div>

        <todo-form />
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    import Todo from "./Todo";
    import TodoForm from "./TodoForm";

    export default {
        components: {
            Todo,
            TodoForm
        },
        computed: {
            ...mapGetters([  
                'todos',              
                'hastodos'
            ])
        }
    }
</script>