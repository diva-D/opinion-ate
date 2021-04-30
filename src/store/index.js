import Vue from 'vue';
import Vuex from 'vuex';
import restaurants from './restaurants';
import RestaurantService from '@/services/RestaurantService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    restaurants: restaurants(RestaurantService),
  },
});
