// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryHTML = galleryItems
  .map(
    ({ original, preview, description }) => `
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" title="${description}" alt="${description}">
  </a>
`
  )
  .join('');

galleryContainer.innerHTML = galleryHTML;

const lightBox = new SimpleLightbox('.gallery a', {});
