// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")
const markup = galleryItems.map((galleryItem) => createElement(galleryItem)).join('');

function createElement({preview, original, description }){
    return `
  
   <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"" alt="${description}" />
   </a>`
}

galleryContainer.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox('.gallery a', {

    captionsData:'alt',
    captionDelay: 250,
});