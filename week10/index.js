let currentImage = 0;  

const image1 = '/week10/assets/cat.webp';
const image2 = '/week10/assets/cat2.jpg';

function updateImage() {
    const imagePath = currentImage === 0 ? image1 : image2;  
    document.getElementById('galleryImage').src = imagePath;
}

function nextImage() {
    currentImage = (currentImage + 1) % 2; 
    updateImage();
}

function backImage() {
    currentImage = (currentImage - 1 + 2) % 2; 
    updateImage();
}

document.getElementById('nextBtn').onclick = nextImage;
document.getElementById('backBtn').onclick = backImage;
updateImage();


