<script setup lang="ts">
import { store } from "./store/store.ts"
import { ref } from 'vue';
import Panel from "./components/Panel.vue";

const root = ref({
  children: [
    {
      children: [
        {
          children: [],
          id: 'fgdnsaj',
          layout: "row",
          title: "grandchildren"
        },
        {
          children: [],
          id: 'fnnn',
          layout: "row",
          title: "grandchildren"
        }

      ],
      id: 'aaaa',
      layout: "row",
      title: "children"
    },
    {
      children: [],
      id: 'asdf',
      layout: "row",
      title: "children"
    }

  ],
  id: 'root',
  layout: "column",
  title: "root"
})

</script>

<template>
  <div class="newButton">
    <button>Add horizontal child</button>
    <button>Add vertical child</button>
    <span>{{store.inFocusId}}</span>
  </div>
  <div class="top">
    <Panel :title="root.title" :children="root.children" :layout="root.layout" :id="root.id" />
  </div>
</template>

<style>
#inFocus {
  border: 3px solid red;
}

.top {
  background: hsla(124, 18%, 50%, 1);
  height: 100vh;
}

.newButton {
  position: absolute;
}
</style>
