// import Vue from "vue";
import { Vue } from "vue-property-decorator";
import VueRouter from "vue-router";

import * as TopStories from "../views/TopStories";
import * as CodeExamples from "../views/CodeExamples";
import * as MyFavorites from "../views/MyFavorites";

import * as TodoView from "../views/TodoView";
import * as LocalTodoList from "../components/todo/localstorage/TodoList";
import * as LocalAddForm from "../components/todo/localstorage/AddForm";
import * as LoveFieldTodoList from "../components/todo/loveField/TodoList";
import * as LoveFieldAddForm from "../components/todo/loveField/AddForm";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: {
        template: `
        <v-container>
          <h1>Home page</h1>
        </v-container>
        `
      }
    },
    {
      path: "/todo",
      name: "todo",
      // redirect: "local-todo-list",
      component: TodoView,
      children: [
        // { path: "", component: TodoList },
        {
          path: "local/list",
          name: "local-todo-list",
          component: LocalTodoList
        },
        { path: "local/add", name: "local-add-form", component: LocalAddForm },
        {
          path: "love/list",
          name: "love-field-todo-list",
          component: LoveFieldTodoList
        },
        {
          path: "love/add",
          name: "love-field-add-form",
          component: LoveFieldAddForm
        }
      ]
    },
    {
      path: "/code-examples",
      name: "code-examples",
      component: CodeExamples
    },
    {
      path: "/my-favorites",
      name: "my-favorites",
      component: MyFavorites
    },
    {
      path: "/top-stories",
      name: "top-stories",
      component: TopStories
    }
  ]
});
