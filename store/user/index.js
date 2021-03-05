export default {
  state: {
    counter: 0,
  },
  mutations: {
    ADD_COUNTER(state){
        state.counter ++
    },
  },
  actions: {
    addCounter(ctx){
      ctx.commit('ADD_COUNTER')
    }
  },
  getters: {
    // getCounter: (state) => { return state.counter },
  }
}