<template>
  <v-layout>
    <h3>Add Todo</h3>
    <v-form v-model="isInvalid">
      <!-- 
        <b-form-group label="Title" :invalid-feedback="invalidFeedback()" :state="getState()">
        <b-form-input v-model="title" placeholder="title" :state="getState()" ref="title"></b-form-input>
      </b-form-group>
      -->
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
</template>
<script>
import { localService } from "../../../services/localService";
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
        localService.add(this.title);
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
      this.$router.push("/todo/list");
    }
  }
};
</script>