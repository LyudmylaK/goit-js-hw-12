// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup } from './js/render-functions';
import { fetchData } from './js/pixabay-api';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
form.addEventListener('submit', onFormBtnClick);

function onFormBtnClick(event) {
  event.preventDefault();

  const { query } = event.target.elements;
  if (query.value === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter the name of the image in the search field!',
    });
    return;
  }
  gallery.innerHTML = '';
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

      new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'buttom',
        captionDelay: 250,
        overlayOpacity: 0.7,
      }).refresh();
      form.reset();
    })
    .catch(error => {
      console.log(error);
    });
}
