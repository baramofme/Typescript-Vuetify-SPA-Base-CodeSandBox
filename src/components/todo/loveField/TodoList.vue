<template>
  <v-content>
    <v-layout>
      <v-flex>
        <h1>LoveField TODO</h1>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-list v-for="(todo, i) in todos" :key="i">
          <v-list-tile @click>
            <v-list-tile-action>
              <v-checkbox v-model="todo.done"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="invites = !invites">
              <v-list-tile-title>{{todo.description}}</v-list-tile-title>
              <v-list-tile-sub-title>{{todo.deadline}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action @click="showDeleteConfirm(todo.id)">
              <v-list-tile-action-text>제거</v-list-tile-action-text>
              <v-icon>delete</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-list v-if="todos.length == 0">no entries</v-list>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex v-if="isView">
        <v-btn @click="isView = false">Add new Todo</v-btn>
      </v-flex>
      <v-flex xs12 v-else>
        <v-form ref="form">
          <v-text-field v-model="todo.description" label="decription" required></v-text-field>

          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="todo.deadline"
            persistent
            lazy
            full-width
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="todo.deadline"
                label="Picker in dialog"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="todo.deadline" scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.dialog.save(todo.deadline)">OK</v-btn>
            </v-date-picker>
          </v-dialog>

          <v-layout row wrap>
            <v-flex xs12 sm4>
              <v-btn color="error" @click="addTodo(todo)">save</v-btn>
            </v-flex>
            <v-flex xs12 sm4>
              <v-btn color="warning" @click="isView=!isView">cancel</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
import { lfs } from "../../../services/loveFieldService";
import * as lf from "lovefield";
import TodoVO from "../../../models/TodoVO.ts";
window.lfs = lfs;
// secould <router-vue/> cannot regognize typescript component.
export default {
  data() {
    return {
      x: 2,
      todoList: [],
      isView: true,
      description: "",
      loading: false,
      modal: false,
      todo: new TodoVO(null)
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
      lfs.remove(id).then(() => {
        this.getAll();
      });
    },
    addTodo(todo) {
      const newTodo = new TodoVO(todo);
      lfs.add(newTodo).then(() => {
        this.closeAddPane();
        this.getAll();
      });
    },
    resetTodo() {
      this.todo = new TodoVO(null);
    },
    closeAddPane() {
      this.isView = true;
      this.resetTodo();
    },
    getAll() {
      lfs.getAll().then(res => {
        this.todoList = res;
      });
    }
  },
  mounted() {
    this.getAll();
    this.isView = true;
  },

  created() {}
};
</script>
