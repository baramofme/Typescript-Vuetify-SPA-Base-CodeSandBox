<template>
  <v-content>
    <v-layout>
      <h3>Add LoveField Todo</h3>
      <v-form v-model="isInvalid">
        <v-layout>
          <v-flex xs12 md4>
            <v-text-field v-model="title" label="title" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-form>

      <v-layout>
        <v-flex xs12 md4>
          <v-btn class="ml-auto" @click="goBack()">back</v-btn>
        </v-flex>
        <v-flex xs12 md4>
          <v-btn class="ml-2" :variant="'primary'" @click="add()">save</v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-content>
</template>
<script>
import { loveFieldService } from "../../../services/loveFieldService";
// secould <router-vue/> cannot regognize typescript component.
export default {
  data() {
    return {
      title: "",
      isInvalid: false,
      isSubmitted: false
    };
  },
  methods: {
    add() {
      this.isSubmitted = true;
      if (this.invalidFeedback() == "") {
        loveFieldService.add(this.title);
        this.isInvalid = null;
        this.title = "";
        this.isSubmitted = false;
        this.goBack();
      } else {
        this.isInvalid = true;
        this.$refs.title["$el"].focus();
      }
    },

    invalidFeedback() {
      let result = "";
      if (this.title.length == 0) {
        result = "Please enter something";
      }
      return result;
    },

    getState() {
      let result = null;
      if (this.isInvalid && this.isSubmitted) {
        result = false;
      }
      if (!this.isInvalid && this.isSubmitted) {
        result = true;
      }
      return result;
    },

    goBack() {
      this.$router.push("/todo/love/list");
    }
  }
};
</script>