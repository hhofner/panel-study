<script setup lang="ts">
import { store } from "./store/store.ts"
import { ref } from 'vue';
import Panel, { Node } from "./components/Panel.vue";

const root = ref<Node>({
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

function findAndAppend(node: Node, specifiedId: string, direction: string): Node {
  if (specifiedId === node.id && node.children.length <= 0) {
    return {
      ...node,
      layout: direction,
      children: [ 
        { id: node.id + Math.random(), title: 'grand' + node.title, layout: 'row', children: [] }, 
        { id: node.id + Math.random(), title: 'grand' + node.title, layout: 'row', children: [] } 
      ]
    }
  } else if (node.children.length > 0) {
    return {
      ...node,
      children: [findAndAppend(node.children[0], specifiedId, direction), findAndAppend(node.children[1], specifiedId, direction)]
    }
  } else {
    return node;
  }
}

function splitHorizontally() {
  if (store.inFocusId) {
    root.value = findAndAppend(root.value, store.inFocusId, 'column') 
  }
}

function splitVertically() {
  if (store.inFocusId) {
    root.value = findAndAppend(root.value, store.inFocusId, 'row') 
  }
}

</script>

<template>
  <div class="newButton">
    <button @click="splitHorizontally">Split horizontally</button>
    <button @click="splitVertically">Split vertically</button>
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
