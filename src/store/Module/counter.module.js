export default {
  namespaced: true,

  state: {
    counter: {
      count: 0,
    },
  },

  mutations: {
    INCREMENT: function (state) {
      state.counter.count = state.counter.count + 1;
    },
    DECREMENT: function (state) {
      state.counter.count = state.counter.count - 1;
    },
  },

  actions: {
    incrementCounter: function ({ commit }) {
      return commit("INCREMENT");
    },
    decrementCounter: function ({ commit }) {
      return commit("DECREMENT");
    },
  },
};
