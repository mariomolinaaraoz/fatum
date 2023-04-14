//Función que arma el slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 4 seconds
}

// Ajustar el tamaño de las imágenes a medida que se carga la página y cuando se cambia el tamaño de la ventana del navegador.
window.addEventListener('load', adjustImageSize);
window.addEventListener('resize', adjustImageSize);

function adjustImageSize() {
  const images = document.querySelectorAll('.image');
  images.forEach((image) => {
    const img = image.querySelector('img');
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    const containerWidth = image.offsetWidth;
    const containerHeight = image.offsetHeight;
    const containerAspectRatio = containerWidth / containerHeight;
    if (aspectRatio > containerAspectRatio) {
      img.style.width = '100%';
      img.style.height = 'auto';
    } else {
      img.style.width = 'auto';
      img.style.height = '100%';
    }
  });
}

//función que envia el correo desde contacto
const btn = document.getElementById("button_form_contact");
document
  .getElementById("form_contact")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Enviando...";

    const serviceID = "service_kl1plj1";
    const templateID = "template_codsbny";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Enviar Mensaje";
        alert("Enviado!");
      },
      (err) => {
        btn.value = "Enviar Mensaje";
        alert(JSON.stringify(err));
      }
    );
  });