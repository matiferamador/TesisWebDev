// Codigo para hacer que el video se reproduzca solo cuando se muestre en pantalla

const video = document.getElementById("miVideo");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      video.play();
      console.log("videop reproduciinaod ");
    } else {
      video.pause();
      console.log("videop pausado ");
    }
  });
});

// NavBar Siempre presente
window.onscroll = function () {
  const scroll = window.scrollY;
  const barraNav = document.querySelector(".navBar");

  if (scroll > 200) {
    barraNav.classList.add("fixed-top-nav");
  } else {
    barraNav.classList.remove("fixed-top-nav");
  }
};

// //Codigo cards materiales
fetch("../data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const materiales = jsonData.materiales;
    const contenedor = document.querySelector(".cards-grid-materiales");

    materiales.forEach(function (item) {
      const cardHTML = `
        <div class="card" style="width: 40rem">
          <img src="${item.Imagen}" class="card-img-top" alt="..." />
          <div class="card-body d-flex flex-column justify-content-between my-4">
            <h1>${item.Titulo}</h1>
              <p>${item.Descripcion}</p>
          
              <a href="${item.Enlace}">
                  <div class="d-grid gap-2"> 
                  <button class="btn btn-primary py-3 fs-4" type="button">Explorar</button>
                  </div>
              </a>
          </div>
        </div>
      `;

      contenedor.innerHTML += cardHTML;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// swiper
var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
});
