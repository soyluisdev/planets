let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() {
    showSlider('next');
}
prevDom.onclick = function() {
    showSlider('prev');
}

let timeRunning = 2000;
let timeAutoNext = 30000;
let runTimeOut;
let runAutoRun = setTimeout(autoNext, timeAutoNext);

function autoNext() {
    nextDom.click();
    runAutoRun = setTimeout(autoNext, timeAutoNext);
}

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(autoNext, timeAutoNext);
}

// Añadir event listeners a las imágenes del carrusel
let thumbnails = document.querySelectorAll('.carousel .thumbnail .item');
thumbnails.forEach((thumbnail, index) => {
    thumbnail.onclick = function() {
        showSelectedSlider(index);
    }
});

function showSelectedSlider(index) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    // Mover la imagen seleccionada al frente
    for (let i = 0; i < index; i++) {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
    }

    carouselDom.classList.add('next');

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(autoNext, timeAutoNext);
}