<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>VueFire ToDo</h2>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <TodoList />
    </v-main>
  </v-app>
</template>

<script>
import TodoList from "@/components/Todolist.vue";

export default {
  name: "App",

  components: {
    TodoList
  },

  data: () => ({
    //
  })
};
</script>
