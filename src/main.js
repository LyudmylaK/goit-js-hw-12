// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46912435-f669d0ff50839d2359d53ff0c';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
form.addEventListener('submit', onFormBtnClick);

function onFormBtnClick(event) {
  event.preventDefault();

  const { query } = event.target.elements;
  if (query.value === '') {
    alert('Ooooops!');
    return;
  }
  loader.style.display = 'block';
  fetchData(query.value)
    .then(data => {
      loader.style.display = 'none';

      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      gallery.innerHTML = ('beforeend', createMarkup(data.hits));

      const refreshPage = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'buttom',
        captionDelay: 250,
        overlayOpacity: 0.7,
      });
      refreshPage.refresh();
      form.reset();
    })
    .catch(error => {
      console.log(error);
    });
}

function fetchData(query) {
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

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
      <li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
			class="gallery-image" 
			src="${webformatURL}" 
			alt="${tags}" 
			/>
	</a>
    <ul class="gallery-image-descr">
    <li>
    <p class="image-descr-text">Likes</p>
    <p class="image-descr-number">${likes}</p>
    </li>
    <li>
    <p class="image-descr-text">Views</p>
    <p class="image-descr-number">${views}</p>
    </li>
    <li>
    <p class="image-descr-text">Comments</p>
    <p class="image-descr-number">${comments}</p>
    </li>
    <li>
    <p class="image-descr-text">Downloads</p>
    <p class="image-descr-number">${downloads}</p>
    </li>
    </ul>
</li>
      `
    )
    .join('');
}
