import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://outside-in-dev-api.herokuapp.com/eQx7UgCivJGdSHorlmUrrdDli6dEqSRn`,
});

export default {
  async loadRestaurants() {
    const records = await apiClient.get('/restaurants');
    return records.data;
  },
};
