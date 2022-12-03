

function initSwiper() {
  // lib carousel
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

}


function listProjects() {
  const carousel = document.getElementById('carousel');

  list = '';
  projects.forEach(item => {
    list += `
              <div class="swiper-slide">
                    <div class="project-img">
                        <img src=${item.image} alt="Foto de um site">
                    </div>
                    <div class="project-info">
                        <h2>${item.title}</h2>
                        <p>${item.message}</p>
                        <p>
                              <a href=${item.link} target="_blank" class="link-site">Link do Projeto</a>
                        </p>
                    </div>
              </div>
        `
  });
  carousel.innerHTML = list;
  initSwiper();
}

listProjects();