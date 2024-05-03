document.addEventListener('DOMContentLoaded', function () {
  let form1 = document.querySelector('.main__form');
  let status1 = document.querySelector('.main__form__text');
  let form2 = document.querySelector('.footer__form');
  let status2 = document.querySelector('.footer__form__text');


  function sendData(formData, status) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail.php');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          status.textContent = "Мы с вами свяжемся в ближайшее время";
          status.classList.remove('error')
          form.reset();
        } else {
          status.textContent = "Ошибка. Попробуйте еще раз";
          status.classList.add('error')
        }
      }
    };

    xhr.send(formData);
  }

  if (form1) {
    form1.addEventListener('submit', function (event) {
      event.preventDefault();
      let formData = new FormData(form1);
      sendData(formData, status1);
    });
  }

  if (form2) {
    form2.addEventListener('submit', function (event) {
      event.preventDefault();
      let formData = new FormData(form2);
      sendData(formData, status2);
    });
  }

});
