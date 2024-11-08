// Задаємо кількість картинок для початкового завантаження
const numberOfImages = 4;
const gallery = document.getElementById("gallery");

// Функція для завантаження картинок з API
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

// Функція для завантаження ще 4 картинок
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

// Функція для очищення галереї
function clearGallery() {
    gallery.innerHTML = '';
}

// Функція для видалення останньої картинки
function removeLastImage() {
    const images = gallery.getElementsByTagName("img");
    if (images.length > 0) {
        gallery.removeChild(images[images.length - 1]);
    }
}

// Функція для перевертання галереї
function reverseGallery() {
    const images = gallery.getElementsByTagName("img");
    const imagesArray = Array.from(images);
    gallery.innerHTML = ''; // Очищаємо галерею
    imagesArray.reverse().forEach(img => gallery.appendChild(img));
}

// Додаємо події для кнопок
document.getElementById("loadMore").addEventListener("click", loadMoreImages);
document.getElementById("clearGallery").addEventListener("click", clearGallery);
document.getElementById("removeLast").addEventListener("click", removeLastImage);
document.getElementById("reverseGallery").addEventListener("click", reverseGallery);

// Завантажуємо 4 картинки при першому завантаженні сторінки
loadImages();
