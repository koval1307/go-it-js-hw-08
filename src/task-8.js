
import galleryItems from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector('.js-lightbox');
const modalBtnRef = document.querySelector(".lightbox__button");
const LargeImgRef = document.querySelector(".lightbox__image");
const overlayRef = document.querySelector('.lightbox__content');
const gallerySrc = galleryItems.map((item) => item.original);
const galleryList = galleryItems.map((el) =>`<li class="gallery__item"><a class="gallery__link" href=${el.original}><img class="gallery__image" src=${el.preview} data-source=${el.original} data-position=${el.index} alt=${el.description}/></a></li>`
	).join(' ');

galleryRef.insertAdjacentHTML('beforeend', galleryList);

galleryItems.map((el) => {
    galleryRef.insertAdjacentHTML("beforeend", `<li class="gallery__item"<a class="gallery__link" href=${el.original}><img class="gallery__image"src=${el.preview} data-source=${el.original} alt=${el.description}/></a></li>`);
});

function onOpenModal() {
    event.preventDefault();
    modalRef.classList.add("is-open");
    const imageRef = event.target;
   LargeImgRef.setAttribute('src', `${imageRef.dataset.source}`);
   LargeImgRef.setAttribute('alt', `${imageRef.alt}`);
    LargeImgRef.setAttribute('data-element', `${imageRef.dataset.element}`);
};
function nextImage(key) {
    if (key.code === "ArrowRight") {
        for (let i = 0; i < gallerySrc.length -1; i++) {
            if (gallerySrc[i] === LargeImgRef.src) {
                LargeImgRef.src = gallerySrc[i + 1];
                break;
            }
            
        }
    }
    if (key.code === "ArrowLeft") {
        for (let i = 1; i < gallerySrc.length; i++){
            if (gallerySrc[i] === LargeImgRef.src) {
                LargeImgRef.src = gallerySrc[i - 1];
                break;
            }
        }
    }
}
function onCloseModal() {
    event.preventDefault();
    modalRef.classList.remove("is-open")
};
function escClose() {
    if (event.key === "Escape") { onCloseModal()}
}
function overlayClose() {
    if (event.target.nodeName !== 'IMG') {
        onCloseModal()
    }
};
overlayRef.addEventListener('click', overlayClose);
galleryRef.addEventListener('click', onOpenModal);
modalBtnRef.addEventListener('click', onCloseModal);
window.addEventListener('keyup', escClose);
window.addEventListener("keydown", nextImage);

