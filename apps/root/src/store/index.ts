import { createStore } from 'vuex'

interface IStore{
  count: number
}

const store = createStore<IStore>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    updateCount(state) {
      state.count += 1
    }
  }
})

export default store