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
const file = document.querySelector('#file');

let photoID;

const addPhoto = () => {
    photoPanel.style.display = 'block';
}

const cancelPhoto = () => {
    photoPanel.style.display = 'none';
    country.value = '';
    city.value = '';
    date.value = '';
    file.value = '';
    continent.value = '0';
}

const savePhoto = () => {
    if(country.value !== '0' && city.value !== '' && country.value !== '' && date.value !== '' && file.value !== ''){
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible'
    }
}

addBtn.addEventListener('click', addPhoto);
cancelBtn.addEventListener('click', cancelPhoto);
saveBtn.addEventListener('click', savePhoto);