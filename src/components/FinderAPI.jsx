import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '16958018-5870f5be4b9a0ed4e53bb3835',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getApi = (query, page) =>
  axios.get(`?q=${query}&page=${page}`).then(({ data }) => data);
// axios
//   .get(
//     `https:pixabay.com/api/?q=${query}&page=${page}&key=16958018-5870f5be4b9a0ed4e53bb3835&image_type=photo&orientation=horizontal&per_page=12`,
//   )
//   .then(({ data }) => data);
export default getApi;
