import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    counter: 0,
    colorCode: 'green'
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber;
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    }
  },
  actions: {
    increaseCounter() {
       axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        this.commit('increaseCounter', response.data)
      })
    },
    decreaseCounter() {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
     .then(response => {
       this.commit('decreaseCounter', response.data)
     })
   },
   setColorCode({ commit }, newValue) {
    commit('setColorCode', newValue)
   }
  },
  modules: {
  }
})
