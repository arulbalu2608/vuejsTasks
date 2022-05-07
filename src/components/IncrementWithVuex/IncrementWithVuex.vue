<template>
  <h3 class="value">{{ counterState.count }}</h3>
  <div class="button-block">
    <button class="button" @click="increment">Increment</button>
    <button class="button" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IncrementWithVuex",
  methods: {
    increment() {
      this.$store.dispatch("counterModule/incrementCounter");
    },
    decrement() {
      if (this.counterState.count > 0) {
        this.$store.dispatch("counterModule/decrementCounter");
      }
    },
  },
  computed: mapGetters({
    counterState: "getCounterState",
  }),
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
