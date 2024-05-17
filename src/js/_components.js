const images = {
  "sofaMilton": "./img/sofa/milton/01.webp",
  "sofaFrei": "./img/sofa/frei/01.webp",
  "sofaDion": "./img/sofa/dion/01.webp",
  "sofaTeo": "./img/sofa/teo/01.webp",
  "sofaLiv": "./img/sofa/liv/01.webp",
  "sofaLeon": "./img/sofa/leon/01.webp",
  "sofaEros": "./img/sofa/eros/01.webp",
  "sofaAutoReverse": "./img/sofa/autoReverse/01.webp",
  "sofaSoft": "./img/sofa/soft/01.webp",
  "sofaMain": "./img/sofa/main/01.webp",
  "sofaMoon": "./img/sofa/moon/01.webp",
  "sofaHilton": "./img/sofa/hilton/01.webp",
  "sofaTaos": "./img/sofa/taos/01.webp",
  "sofaBanoffy": "./img/sofa/banoffy/01.webp",
  "sofaGuinness": "./img/sofa/guinness/01.webp",
  "dedBora": "./img/bed/bora/01.webp",
  "dedIowa": "./img/bed/lowa/01.webp",
  "armchairArchibald": "./img/armchair/archibald/01.webp",
  "armchairBruno": "./img/armchair/bruno/01.webp",
  "dedArgo": "./img/bed/argo/01.webp",
  "bedPrada": "./img/bed/prada/01.webp",
  "dedCrown": "./img/bed/crown/01.webp",
  "dedEster": "./img/bed/ester/01.webp",
  "dedAlys": "./img/bed/alys/01.webp",
  "sofaCosmo": "./img/sofa/cosmo/01.webp",
  "sofaCrown": "./img/sofa/crown/01.webp",
};

document.addEventListener('DOMContentLoaded', function () {
  let form1 = document.querySelector('.main__form');
  let status1 = document.querySelector('.main__form__text');
  let form2 = document.querySelector('.footer__form');
  let status2 = document.querySelector('.footer__form__text');

  function sendData(formData, status, form) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail.php');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          status.textContent = "Мы с вами свяжемся в ближайшее время";
          status.classList.remove('error');
          form.reset();
        } else {
          status.textContent = "Ошибка. Попробуйте еще раз";
          status.classList.add('error');
        }
      }
    };

    xhr.send(formData);
  }

  if (form1) {
    form1.addEventListener('submit', function (event) {
      event.preventDefault();
      let formData = new FormData(form1);
      sendData(formData, status1, form1);
    });
  }

  if (form2) {
    form2.addEventListener('submit', function (event) {
      event.preventDefault();
      let formData = new FormData(form2);
      sendData(formData, status2, form2);
    });
  }

  function getModelFromUrl() {
    const path = window.location.pathname;
    const model = path.split('/').pop().split('.').shift();
    return model;
  }

  function getImagePath(model) {
    const imagePath = images[model];
    return imagePath;
  }

  function updateModalImage() {
    const model = getModelFromUrl();
    const imagePath = getImagePath(model);
    if (imagePath) {
      const pictureBlock = document.querySelector('.picture__block picture');
      const sourceElement = pictureBlock.querySelector('source');
      const imgElement = pictureBlock.querySelector('img');
      sourceElement.srcset = imagePath;
      imgElement.src = imagePath.replace('.webp', '.jpg');
    } else {
      console.log("No image path found for model: ", model);
    }
  }

  updateModalImage();
});
