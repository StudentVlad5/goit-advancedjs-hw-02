import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('promiseForm');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    // створюємо проміс
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    // обробка результату
    promise
      .then(delay => {
        iziToast.success({
          title: '',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topRight',
          icon: '', // прибираємо іконку
          iconUrl: '', // додатково вимикаємо іконку, якщо була
          backgroundColor: '#28a745', // зелений бекграунд
          messageColor: '#ffffff', // білий текст
          titleColor: '#ffffff', // білий заголовок
        });
      })
      .catch(delay => {
        iziToast.error({
          title: '',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
          icon: '',
          iconUrl: '',
          backgroundColor: '#dc3545', // червоний бекграунд
          messageColor: '#ffffff',
          titleColor: '#ffffff',
        });
      });

    // очищення форми
    form.reset();
  });
});
