<template>
  <p>{{ title }}</p>
  <div>
    <p>For Loop</p>
    <li v-for="item in forItems" :key="item.name">
      {{ item.name }}
    </li>
  </div>
</template>

<script>
export default {
  name: "LoopConcept",
  props: {
    title: String,
  },
  data() {
    return {
      forItems: [{ name: "Arul" }, { name: "Prasad" }],
    };
  },
};
</script>

<style></style>
