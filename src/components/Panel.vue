<script setup lang="ts">
import { store } from "../store/store.ts"
interface Node {
  id: string
  children: Array<Node>
  layout: string
  title: string
}
const props = defineProps<Node>();
function generateRandomHsla() {
  // Generate random values for hue, saturation, lightness, and alpha
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100) + '%';
  const lightness = Math.floor(Math.random() * 100) + '%';
  const alpha = (Math.random() * 0.5 + 0.5).toFixed(2); // Alpha value between 0.5 and 1

  // Return the HSLA color string
  return `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`;
}

function setFocusedId() {
  store.inFocusId = props.id
}

</script>

<template>
  <div class="parent" @click.stop="setFocusedId" :id="store.inFocusId === id && 'inFocus'">
    <h2>{{ title }}</h2>
    <Panel v-for="(child) in children" :key="child.id" :title="child.title" :children="child.children"
      :layout="child.layout" :id="child.id" />
  </div>
</template>

<style scoped>
.parent {
  --random-bg: v-bind(generateRandomHsla());
  cursor: pointer;
  display: flex;
  flex-direction: v-bind(layout);
  min-width: 100px;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  background: var(--random-bg);
  border: 3px solid var(--random-bg);
}
</style>
