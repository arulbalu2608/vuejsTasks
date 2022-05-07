import { createStore } from "vuex";
import counterModule from "./Module/counter.module";

export default createStore({
  state: {
    counterstate: counterModule.state,
  },
  getters: {
    getCounterState: function (state) {
      return state.counterstate.counter;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    counterModule,
  },
});
