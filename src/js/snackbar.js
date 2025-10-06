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
          title: 'Fulfilled',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch(delay => {
        iziToast.error({
          title: 'Rejected',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });

    // очищення форми
    form.reset();
  });
});
