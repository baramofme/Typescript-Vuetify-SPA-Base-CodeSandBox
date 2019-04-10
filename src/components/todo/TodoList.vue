<template>
  <v-content>
    <v-layout>
      <v-flex>
        <h1>TODO</h1>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-list v-for="(todo, i) in todos" :key="i">
          <v-list-tile @click="showDeleteConfirm(todo.id)">
            <v-list-tile-title>{{todo.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list v-if="todos.length == 0">no entries</v-list>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-btn to="/todo/add">Add new Todo</v-btn>
      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
import { todoService } from "../../services/TodoService";
// secould <router-vue/> cannot regognize typescript component.
export default {
  data() {
    return {
      x: 2,
      todoList: []
    };
  },
  computed: {
    todos: {
      get: function() {
        return this.todoList;
      },
      set: function(todos) {
        this.todoList = todos;
      }
    }
  },
  methods: {
    async showDeleteConfirm(id) {
      const res = await this.$dialog
        .warning({
          text: "Do you really want to delete?",
          title: "Warning"
        })
        .then(boolean => {
          boolean ? this.rmTodo(id) : "";
        });
    },
    rmTodo(id) {
      todoService.remove(id);
      this.todos = todoService.get();
    }
  },
  mounted() {
    this.todos = todoService.get();
  }
};
</script>
