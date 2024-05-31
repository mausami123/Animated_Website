/* sidebar */
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

/*banner */

var bannerSlider = new Swiper('.banner-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    }
  });
  /*
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav a[href="Home"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#banner').scrollIntoView({ behavior: 'smooth' });
    });

  document.querySelector('nav a[href="Blog"]').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('nav a[href="About"]').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('nav a[href="Voluntree"]').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#voluntree').scrollIntoView({ behavior: 'smooth' });
  });
  document.querySelector('nav a[href="Contact"]').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });
});
*/
