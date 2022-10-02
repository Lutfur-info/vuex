<template>
    <div>
        <div>
            <input type="text" v-model="item" @keyup.enter="addNewTodoItem">
        </div>
        <div>
            <button type="button" @click.prevent="addNewTodoItem">Add</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                item: '',
            }
        },
        methods: {
            addNewTodoItem() {
                this.$store.dispatch('addNewTodoItem', this.item);
                this.item = '';
            }
        }
    }
</script>