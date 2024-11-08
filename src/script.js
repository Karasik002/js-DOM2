const numberOfImages = 4;
const gallery = document.getElementById("gallery");

async function loadImages() {
    const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${numberOfImages}`);
    const data = await response.json();
    
    data.forEach(image => {
        const img = document.createElement("img");
        img.src = image.download_url;
        img.alt = image.author;
        gallery.appendChild(img);
    });
}

async function loadMoreImages() {
    const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=${numberOfImages}`);
    const data = await response.json();
    
    data.forEach(image => {
        const img = document.createElement("img");
        img.src = image.download_url;
        img.alt = image.author;
        gallery.appendChild(img);
    });
}

function clearGallery() {
    gallery.innerHTML = '';
}
function removeLastImage() {
    const images = gallery.getElementsByTagName("img");
    if (images.length > 0) {
        gallery.removeChild(images[images.length - 1]);
    }
}

function reverseGallery() {
    const images = gallery.getElementsByTagName("img");
    const imagesArray = Array.from(images);
    gallery.innerHTML = ''; // Очищаємо галерею
    imagesArray.reverse().forEach(img => gallery.appendChild(img));
}

document.getElementById("loadMore").addEventListener("click", loadMoreImages);
document.getElementById("clearGallery").addEventListener("click", clearGallery);
document.getElementById("removeLast").addEventListener("click", removeLastImage);
document.getElementById("reverseGallery").addEventListener("click", reverseGallery);

loadImages();
