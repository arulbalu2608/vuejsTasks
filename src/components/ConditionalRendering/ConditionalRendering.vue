<template>
  <h1>{{ title }}</h1>
  <div class="block">
    <p>IF Else</p>
    <p v-if="isShow">Hello World</p>
    <p v-else>Something Wrong</p>
    <button @click="ifelseMethod">change condition</button>
  </div>
  <hr />
  <div class="block">
    <p>Show</p>
    <p v-show="show">The content !!!</p>
    <button @click="showMethod">{{ show ? "Hide" : "Show" }}</button>
  </div>
  <hr />
  <div class="block">
    <p>If-Elif</p>
    <input v-model="type" />
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
  </div>

  <hr />
</template>

<script>
export default {
  name: "ConditionalRendering",
  props: {
    title: String,
  },
  data() {
    return {
      isShow: true,
      show: true,
      type: "",
    };
  },
  methods: {
    ifelseMethod() {
      this.isShow = !this.isShow;
    },
    showMethod() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.block {
  padding: 10px 0px;
}
</style>
