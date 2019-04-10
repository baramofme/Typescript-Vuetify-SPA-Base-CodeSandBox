// import Vue from "vue";
import { Vue } from "vue-property-decorator";
import VueRouter from "vue-router";

import * as TopStories from "../views/TopStories";
import * as CodeExamples from "../views/CodeExamples";
import * as MyFavorites from "../views/MyFavorites";

import * as TodoView from "../views/TodoView";
import * as TodoList from "../components/todo/TodoList";
import * as AddForm from "../components/todo/AddForm";

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
      redirect: "todo-list",
      component: TodoView,
      children: [
        { path: "", component: TodoList },
        { path: "list", name: "todo-list", component: TodoList },
        { path: "add", name: "add-form", component: AddForm }
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
