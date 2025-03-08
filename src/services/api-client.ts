import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd4ebd8b94b6c4464950109077b3418a1',
  },
});
