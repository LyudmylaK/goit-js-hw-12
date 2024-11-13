import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46912435-f669d0ff50839d2359d53ff0c';

const loader = document.querySelector('.loader');

const perPage = 15;

export async function serviseImage(query, page = 1) {
  loader.style.display = 'block';
  const { data } = await axios(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      leng: 'en',
      page,
      per_page: perPage,
    },
  }).finally(() => {
    loader.style.display = 'none';
  });

  return data;
}
