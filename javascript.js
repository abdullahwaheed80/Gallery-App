const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12];
let currentIndex = 0;

function updatePopupImage() {
    const currentImgNum = imageIndexes[currentIndex];
    selectedImage.src = `images/download ${currentImgNum}.png`;
    selectedImage.alt = `Cover for Image ${currentImgNum}`;
}

imageIndexes.forEach((item, index) => {
    const image = document.createElement('img');
    image.src = `images/download ${item}.png`;
    image.alt = `Cover for Image ${item}`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        currentIndex = index;
        popup.style.transform = 'translateY(0)';
        updatePopupImage();
    });

    gallery.appendChild(image);
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    currentIndex = (currentIndex + 1) % imageIndexes.length;
    updatePopupImage();
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + imageIndexes.length) % imageIndexes.length;
    updatePopupImage();
});

popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
    selectedImage.src = '';
    selectedImage.alt = '';
});


