const restaurants = RestaurantService => ({
  namespaced: true,
  state: {
    records: [],
  },
  actions: {
    async load({commit}) {
      const records = await RestaurantService.loadRestaurants();
      commit('UPDATE_RECORDS', records);
    },
  },
  mutations: {
    UPDATE_RECORDS(state, records) {
      state.records = records;
    },
  },
});

export default restaurants;
