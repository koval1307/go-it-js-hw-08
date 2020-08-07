import galleryItem from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector('.js-lightbox');
const modalBtnRef = document.querySelector(".lightbox__button");
const LargeImgRef = document.querySelector(".lightbox__image");
const overlayRef = document.querySelector('.lightbox__content');

galleryItem.map((el) => {
    galleryRef.insertAdjacentHTML("beforeend", `<li class="gallery__item"<a class="gallery__link" href=${el.original}><img class="gallery__image"src=${el.preview} data-source=${el.original} alt=${el.description}/></a></li>`);
});

function onOpenModal() {
    modalRef.classList.add("is-open");
   LargeImgRef.setAttribute('src', `${event.target.dataset.source}`);
   LargeImgRef.setAttribute('alt', `${event.target.alt}`);
    LargeImgRef.setAttribute('data-element', `${event.target.dataset.element}`);
};

function onCloseModal() {
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
