'use strict'


const btnSubmit = document.querySelector('.apparel__btn');
const inputEmail = document.querySelector('.apparel__input');
const containerInputEmail = document.querySelector('.apparel__input-group');
const inputError = document.querySelector('.apparel__input-error');
const iconError = document.querySelector('.apparel__input-icon');


btnSubmit.addEventListener('click', e => {

    e.preventDefault();

    handleError();

});

inputEmail.addEventListener('keyup', e => {

    handleError();

});

function handleError() {
    if (!inputEmail.checkValidity()) {
        showError(true);
    } else {
        showError(false);
    }
}

function showError(show) {
    if (show) {
        containerInputEmail.classList.add('apparel__input--danger');
        inputError.style.display = 'block';
        iconError.style.display = 'block';
        inputError.textContent = 'Please provide a valid email addresss';
    } else {
        containerInputEmail.classList.remove('apparel__input--danger');
        inputError.style.display = 'none';
        iconError.style.display = 'none';
        inputError.textContent = '';
    }

}