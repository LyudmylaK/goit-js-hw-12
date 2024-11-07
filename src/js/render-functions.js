export function createMarkup(arr) {
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
