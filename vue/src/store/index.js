import {createStore} from 'vuex'

const store = createStore({
  state: {
    feed: {
      data: {
        title: 'Feed title',
        category: 'Feed Category',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae quibusdam, maiores, tenetur non eaque, accusantium dolorum iste nobis atque officiis id! Sed, laborum? Nemo voluptatibus sint eum cupiditate aperiam!'
      },
    }
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {}
})

export default store;
