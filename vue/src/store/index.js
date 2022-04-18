import axios from 'axios'
import {createStore} from 'vuex'
import axiosClient from '../axios';


const store = createStore({
  state: {
    feeds: {
      loading: false,
      data: []
    },
    feedProvider: {
      loading: false,
      data: []
    },
  },
  getters: {},
  actions: {
    getFeeds({commit}) {
      commit('setFeedsLoading', true);
      return axiosClient.get('/feeds').then((res) => {
        commit('setFeedsLoading', false);
        commit('setFeeds', res.data);
        return res;
      })
    },
    getFeedProvider({commit}, id) {
      commit('setFeedsLoading', true);
      return axiosClient.get(`/feedProvider/${id}`).then((res) => {
        commit('setFeedsLoading', false);
        commit('setFeedProvider', res.data);
        return res;
      })
    }
  },
  mutations: {
    setFeeds: (state, feeds) => {
      state.feeds.data = feeds.data;
    },
    setFeedProvider: (state, feedProvider) => {
      state.feedProvider.data = feedProvider.data;
    },
    setFeedsLoading: (state, loading) => {
      state.feeds.loading = loading;
    }
  },
  modules: {}
})

export default store;
