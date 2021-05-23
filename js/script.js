const addBtn = document.querySelector('.add-btn');
const deleteAllBtn = document.querySelector('.deleteAll-btn');
const deleteBtn = document.getElementsByClassName('.fa-times-circle');
const saveBtn = document.querySelector('.save-btn');
const cancelBtn = document.querySelector('.cancel-btn');

const photoPanel = document.querySelector('.photo-panel');
const photoArea = document.querySelector('.photo-area');
const error = document.querySelector('.error');
const continent = document.querySelector('#continent');
const country = document.querySelector('#country')
const city = document.querySelector('#city');
const date = document.querySelector('#date');
const imageBox = document.querySelector('.image-box');
let file = document.querySelector('#file');
const image = document.createElement('img');

let photoID = 0;
let selectedValue;
let resultPhoto;

const addPhoto = () => {
    photoPanel.style.display = 'block';
}

const cancelPhoto = () => {
    photoPanel.style.display = 'none';
    country.value = '';
    city.value = '';
    date.value = '';
    continent.value = '0';
    image.value = '';
}

const savePhoto = () => {
    if(country.value !== '0' && city.value !== '' && country.value !== '' && date.value !== ''){
        createPhoto();
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible'
    }
}

const createPhoto = () => {
    const newPhoto = document.createElement('div');
    newPhoto.classList.add('photo');
    newPhoto.setAttribute('id', photoID);
    newPhoto.innerHTML = `
                <div class="photo-header">
                    <h2 class="continent">${continent.value}</h2>
                    <i class="far fa-times-circle" onclick="deletePhoto(${photoID})"></i>
                </div>
                <div class="photo-body">
                    <p>Państwo: ${country.value}</p>
                    <p>Miasto: ${city.value}</p>
                    <p>Data: ${date.value}</p>
                    
                    <div class="image-box">
                        <img src="${image.src}" alt="zdjęcie">
                    </div>
                </div>`;
    photoArea.appendChild(newPhoto);
    photoID++;
    continent.value = '0';
    country.value = '';
    city.value = '';
    date.value = '';
    photoPanel.style.display = 'none';
    image.value = '';
}

const previewFile = () => {
    imageBox.appendChild(image);
    file = document.querySelector('#file').files[0];
    
    if(file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            image.setAttribute("src", this.result)
        });
        resultPhoto = reader.readAsDataURL(file);
    }
    imageBox.style.display = 'none';
}

const deleteAll = () => {
    photoArea.textContent = '';
}

const deletePhoto = id => {
    const photoToDelete = document.getElementById(id);
    photoArea.removeChild(photoToDelete);
}

addBtn.addEventListener('click', addPhoto);
cancelBtn.addEventListener('click', cancelPhoto);
saveBtn.addEventListener('click', savePhoto);
deleteAllBtn.addEventListener('click', deleteAll);