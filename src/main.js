// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createMarkup } from './js/render-functions';
import { serviseImage } from './js/pixabay-api';
import { gallery } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const endLoaderText = document.querySelector('.end-loader');
const btnLoadMore = document.querySelector('.btn-load-more');
const loaderMore = document.querySelector('.loader-more');

let page = 1;
const perPage = 15;
let queryValue = '';

loaderMore.style.display = 'none';
loader.style.display = 'none';
endLoaderText.style.display = 'none';
btnLoadMore.style.display = 'none';

form.addEventListener('submit', onFormBtnClick);
btnLoadMore.addEventListener('click', onBtnLoadMoreClick);

async function onFormBtnClick(event) {
  event.preventDefault();

  page = 1;

  gallery.innerHTML = '';
  loader.style.display = 'block';
  btnLoadMore.style.display = 'none';
  endLoaderText.style.display = 'none';

  queryValue = event.target.elements.query.value;

  if (queryValue.trim() === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter the name of the image in the search field!',
    });
    loader.style.display = 'none';
    return;
  }
  try {
    const data = await serviseImage(queryValue, page);

    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      loader.style.display = 'block';
      createMarkup(data.hits);
    }

    if (data.totalHits > page * perPage) {
      btnLoadMore.style.display = 'block';
    } else {
      btnLoadMore.style.display = 'none';
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Oops! Something went wrong. Try again.',
    });
  } finally {
    loader.style.display = 'none';
  }

  form.reset();
}

async function onBtnLoadMoreClick() {
  page += 1;

  try {
    btnLoadMore.style.display = 'none';
    loaderMore.style.display = 'block';

    const data = await serviseImage(queryValue, page);
    createMarkup(data.hits);

    loaderMore.style.display = 'none';

    if (data.totalHits > page * perPage) {
      btnLoadMore.style.display = 'block';
    } else {
      btnLoadMore.style.display = 'none';

      iziToast.info({
        title: 'Hello',
        message: `We're sorry, but you've reached the end of search results.`,
      });

      endLoaderText.style.display = 'block';
    }
    const card = document.querySelector('.gallery-item');
    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Oops! Something went wrong. Try again.',
    });
  } finally {
    loaderMore.style.display = 'none';
  }
}
