import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const FEEDBACK_FORM_STATE = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(event => {
    event.preventDefault();
    const objectForm = { email: email.value, message: message.value };
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(objectForm));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

// const storageData = load(FEEDBACK_FORM_STATE);
// if (storageData) {
//   email.value = storageData.email;
//   message.value = storageData.message;
// }

const savedEmail = localStorage.getItem('email');
if (savedEmail) {
  email.value = savedEmail;
}

const savedMessage = localStorage.getItem('message');
if (savedMessage) {
  message.value = savedMessage;
}
