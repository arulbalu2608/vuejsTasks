<template>
  <h1 class="title">{{ title }}</h1>

  <h3 class="value">{{ count }}</h3>
  <div class="button-block">
    <button class="button" @click="increment">Increment</button>
    <button class="button" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  name: "IncremenDecrement",
  props: {
    title: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count > 0 && this.count--;
    },
  },
};
</script>

<style scoped>
.title {
  color: black;
  font-size: 24px;
  font-weight: 600;
}

.value {
  font-size: 46px;
}

.button {
  margin: 0px 20px;
}
</style>
