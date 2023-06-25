import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector("ul.gallery");
const gallaryItem = createGallaryItem(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", gallaryItem);

galleryContainer.addEventListener("click", onGalleryContainerClick);


const gallery = new SimpleLightbox(".gallery__item a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
	}); 

function createGallaryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
			return `
			<li class="gallery__item">
				<a class="gallery__link" href="${original}">
				<img class="gallery__image" src="${preview}" alt="${description}"/>
				</a>
			</li>
			`;
			})
    .join("");
}

function onGalleryContainerClick(evt) {

  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }  
	
  
	gallery.on("closed.simplelightbox", () => {
    gallery.refresh();
  });  
}
