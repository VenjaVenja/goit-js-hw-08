import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGY_KEY = 'feedback-form-state';
let formData = {};
formFieldsOut();


refs.form.addEventListener('input', throttle(onInputChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onInputChange(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGY_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    console.log(`You message has been sent!`, formData)
    formData = {};
    event.target.reset();
    localStorage.removeItem(STORAGY_KEY);
};


function formFieldsOut() {
    const saveInputField = JSON.parse(localStorage.getItem(STORAGY_KEY));
    if (saveInputField === null || saveInputField === undefined) {
        return
    } formData = saveInputField;
        console.log(saveInputField);
        refs.email.value = saveInputField.email;
        refs.textarea.value = saveInputField.message;
};
