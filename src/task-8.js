import galleryItem from "./gallery-items.js";


// шаг 1 Создание и рендер разметки по массиву данных и предоставленному шаблону.

// const addGalleryItems = (image) => {
//     const galleryItem = document.createElement("li");
//     galleryItem.classList.add(".gallery__item");

//     const galleryLink = document.createElement("a");
//     galleryLink.classList.add("gallery__link");
//     galleryLink.href = image.original;


//     const galleryImg = document.createElement("img");
//     galleryImg.classList.add("gallery__image");
//     galleryImg.src = image.preview;
//     galleryImg.dataSource = image.original;
//     galleryImg.alt = image.descrition;

//     galleryItem.appendChild(galleryLink);
//     galleryLink.appendChild(galleryImg)

//     return image;

// }



const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector('.js-lightbox');
const modalBtnRef = document.querySelector(".lightbox__button");
const LargeImgRef = document.querySelector(".lightbox__image");
const overlayRef = document.querySelector('.lightbox__content');

galleryItem.map((el) => {
    galleryRef.insertAdjacentHTML("beforeend", `<li class="gallery__item"<a class="gallery__link" href=${el.original}><img class="gallery__image"src=${el.preview} data-source=${el.original} alt=${el.description}/></a></li>`);
});

function onOpenModal() {
    const target = event.target;
    modalRef.classList.add("is-open");
   LargeImgRef.setAttribute('src', `${target.dataset.source}`);
   LargeImgRef.setAttribute('alt', `${target.alt}`);
    LargeImgRef.setAttribute('data-element', `${target.dataset.element}`);
};

function onCloseModal() {
    modalRef.classList.remove("is-open")
};
function escClose() {
    if (event.key === "Escape") { modalRef.classList.remove("is-open")}
}
function overlayClose() {
    if (event.target.nodeName !== 'IMG') {
        modalRef.classList.remove("is-open")
    }
};



overlayRef.addEventListener('click', overlayClose);
galleryRef.addEventListener('click', onOpenModal);
modalBtnRef.addEventListener('click', onCloseModal);
window.addEventListener('keyup', escClose);
