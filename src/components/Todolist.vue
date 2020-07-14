<template>
  <div class="pt-3">
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-text-field label="New Todo" outlined v-model="newItem" @keyup.enter="addItem"></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn Large color="primary" @click="addItem">Add</v-btn>
      </v-col>
    </v-row>
    <transition-group name="fade">
      <v-card
        class="mx-auto pa-3 ma-2 text-center"
        max-width="400"
        v-for="ToDo in AllTodos"
        :key="ToDo.id"
      >
        <v-row>
          <v-col cols="8">
            <v-list-item-title class="headline mb-1">{{ ToDo.name }}</v-list-item-title>
          </v-col>
          <v-col cols="4">
            <v-btn icon color="red" @click="deleteToDo(ToDo.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </transition-group>
  </div>
</template>

<script>
import db from "@/firebase/db.js";

export default {
  data() {
    return {
      AllTodos: [],
      newItem: ""
    };
  },
  methods: {
    async addItem() {
      await db.collection("ToDos").add({ name: this.newItem });
      this.newItem = "";
    },
    deleteToDo(id) {
      db.collection("ToDos")
        .doc(id)
        .delete();
    }
  },
  firestore: {
    AllTodos: db.collection("ToDos")
  }
};
</script>