const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46912435-f669d0ff50839d2359d53ff0c';

export function fetchData(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    leng: 'en',
  });
  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
