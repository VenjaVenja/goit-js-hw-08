import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
.map(({preview,original,description})=>
`<div class = "gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`
)
.join("");


galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

let lightBox = new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay:250,
    navText:['←','→'],
    captionPosition:'bottom',
});