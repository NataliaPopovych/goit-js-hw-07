import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector("ul.gallery");
const gallaryItem = createGallaryItemMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", gallaryItem);

galleryContainer.addEventListener("click", ongalleryContainerClick);

function createGallaryItemMarkup(galleryItems) {
	return galleryItems
    .map(({ preview, original, description }) => {
      return `
		<li class="gallery__item">
			<a class="gallery__link" href="${original}">
				<img
					class="gallery__image"
					src="${preview}"
					data-source="${original}"
					alt="${description}"
				/>
			</a>
		</li>
		`;
    })
    .join("");
}
function ongalleryContainerClick(evt) {
   
    evt.preventDefault();
  
    if (evt.target.nodeName !== "IMG") {
      return;
    }
    const originalImage = evt.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${originalImage}" width="800" height="600">
  `);
      instance.show(() => {
      
          galleryContainer.addEventListener("keydown", (evt) => {
              if (evt.code === "Escape") {
                  instance.close(() => {
                      galleryContainer.removeEventListener("keydown", () => {})
                  });
              }
          });
      });
  }

