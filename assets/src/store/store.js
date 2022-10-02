import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      todos: []
    },
    getters: {
      todos(state) {
        return state.todos
      },
      hastodos(state) {
        return state.todos.length;
      }
    },
    mutations: {
      NEW_TODO(state, todoItem) {
        state.todos.push({
          title: todoItem,
          id: state.todos.length + 1
        });
      },
      DELETE_TODO(state, todoID) {
        let index = state.todos.findIndex(item => item.id === todoID);
        state.todos.splice(index, 1);
      }
    },
    actions: {
      addNewTodoItem({commit}, todoItem) {
        commit('NEW_TODO', todoItem);
      },
      deleteTodoItem({commit}, todoID) {
        commit('DELETE_TODO', todoID);
      }
    }
});

export default store;
