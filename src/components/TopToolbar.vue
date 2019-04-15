<template>
  <div>
    <v-navigation-drawer app fixed v-model="showMenu">
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <span>
                <a @click="toggleDialog()">Pop Dialog</a>
              </span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <template v-for="(item, i) in items">
          <v-layout row v-if="item.heading" align-center :key="i">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" no-action>
            <v-list-tile slot="item" @click>
              <v-list-tile-action>
                <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click>
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-if="child.route">
                  <router-link :to="{ name: child.route }">{{ child.text }}</router-link>
                </v-list-tile-title>
                <v-list-tile-title v-else>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link v-if="item.route" :to="{ name: item.route }">{{ item.text }}</router-link>
                <span v-else>{{ item.text }}</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app dark color="primary">
      <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Vue News</v-toolbar-title>
    </v-toolbar>

    <popup :isShow="dialog" @close="toggleDialog"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Popup from "./Popup";
@Component({
  components: {
    Popup
  }
})
export default class TopToolbar extends Vue {
  private showMenu: boolean = false;
  private toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  private dialog: boolean = false;
  private toggleDialog(): void {
    console.log(this.dialog);
    this.dialog = !this.dialog;
  }

  private team: string = "Philadelphia Eagles";

  private items: any = [
    { icon: "contacts", text: "Top Stories", route: "top-stories" },
    { icon: "event", text: "Code Example", route: "code-examples" },
    { icon: "account_balance", text: "My Favorites", route: "my-favorites" },
    {
      icon: "keyboard_arrow_up",
      "icon-alt": "keyboard_arrow_down",
      text: "Todo",
      model: true,
      children: [
        { icon: "done", text: "localstorage Todo", route: "local-todo-list" },
        { icon: "done", text: "lovefield Todo", route: "love-field-todo-list" }
      ]
    },
    {
      icon: "keyboard_arrow_up",
      "icon-alt": "keyboard_arrow_down",
      text: "Labels",
      model: true,
      children: [{ icon: "add", text: "Create label" }]
    },
    {
      icon: "keyboard_arrow_up",
      "icon-alt": "keyboard_arrow_down",
      text: "More",
      model: false,
      children: [
        { text: "Import" },
        { text: "Export" },
        { text: "Print" },
        { text: "Undo changes" },
        { text: "Other contacts" }
      ]
    },
    { icon: "settings", text: "Settings" },
    { icon: "chat_bubble", text: "Send feedback" },
    { icon: "help", text: "Help" },
    { icon: "phonelink", text: "App downloads" },
    { icon: "keyboard", text: "Go to the old version" }
  ];
}
</script>