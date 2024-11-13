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

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const endLoaderText = document.querySelector('.end-loader');
const btnLoadMore = document.querySelector('.btn-load-more');

let page = 1;
const perPage = 15;
let queryValue = '';

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
  btnLoadMore.style.display = 'block';
  // endLoaderText.style.display = 'none';

  queryValue = event.target.elements.query.value;
  // console.log(queryValue);

  if (!queryValue.trim() === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter the name of the image in the search field!',
    });
    return;
  }
  try {
    const data = await serviseImage(queryValue, page);
    console.log(data);
    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createMarkup(data.hits);
    }

    if (data.totalHits > page * perPage) {
      btnLoadMore.style.display = 'block';
    } else {
      btnLoadMore.style.display = 'none';
      iziToast.show({
        class: 'toast',
        position: 'topRight',
        messageColor: 'white',
        message: `We're sorry, but you've reached the end of search results.`,
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = 'none';
  }

  form.reset();
}

async function onBtnLoadMoreClick() {
  page += 1;
  loader.style.display = 'block';
  // btnLoadMore.style.display = 'none';
  // endLoaderText.style.display = 'none';
  try {
    const data = await serviseImage(queryValue, page);
    createMarkup(data.hits);

    if (data.totalHits > page * perPage) {
      btnLoadMore.style.display = 'block';
    } else {
      btnLoadMore.style.display = 'none';
      endLoaderText.style.display = 'block';
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.style.display = 'none';
  }
}
