<template>
  <v-content>
    <v-layout>
      <v-flex>
        <h1>LocalStorage TODO</h1>
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
        <v-btn to="/todo/local/add">Add new Todo</v-btn>
      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
import { localService } from "../../../services/localService";
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
      localService.remove(id);
      this.todos = localService.get();
    }
  },
  mounted() {
    this.todos = localService.get();
  }
};
</script>
