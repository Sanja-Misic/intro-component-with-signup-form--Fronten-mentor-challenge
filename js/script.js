'use strict';

const formBtn = document.querySelector('.hero__form-button');

const form = document.querySelector('.hero__form');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const input = document.querySelectorAll('.hero__form-input');
const iconError = document.querySelectorAll('.hero__form-icon-error');
const textError = document.querySelectorAll('.hero__form-text-error');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const displayError = (errorClass, borderError) => {
  input.forEach(el => {
    if (el.classList.contains(borderError)) {
      el.classList.add('hero__form-input-error');
    }
  });
  iconError.forEach(el => {
    if (el.classList.contains(errorClass)) {
      el.classList.remove(errorClass);
    }
  });
  textError.forEach(el => {
    if (el.classList.contains(errorClass)) {
      el.classList.remove(errorClass);
    }
  });
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === '') {
    displayError('hero__form-first-name-error', 'first-name-border-error');
  }
  if (lastNameValue === '') {
    displayError('hero__form-last-name-error', 'last-name-border-error');
  }
  if (emailValue === '') {
    displayError('hero__form-email-error', 'email-border-error');
  }
  if (passwordValue === '') {
    displayError('hero__form-password-error', 'password-border-error');
  }
};
