<template>
    <div id="app">
        <todo-list />
    </div>
</template>

<script>
    import TodoList from "./TodoList"

    export default {
        name: 'app',
        components: {
            TodoList
        }
    }
</script>
