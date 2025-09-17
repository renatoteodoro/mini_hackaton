/*ATENÇÃO! Este é um arquivo de desenvolvimento COLABORATIVO! 
Antes de realizar alterações verifique se está corretamente no seu arquivo.
Certifique-se utilizar a boa prática para não duplicar os códigos desnecessariamente*/

/*RENATO - Início*/
const track = document.getElementById('carousel-track');
  const slides = Array.from(track.children);
  const nav = document.getElementById('carousel-nav');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let curr = 0;
  let autoSlide;

  function updateClasses() {
    slides.forEach((slide, i)=>{
      slide.className = "carousel-slide";
      if(i === curr) slide.classList.add('active');
      else if(i === (curr - 1 + slides.length)%slides.length) slide.classList.add('prev');
      else if(i === (curr + 1)%slides.length) slide.classList.add('next');
    });
    nav.querySelectorAll('.carousel-dot').forEach((dot, i)=>dot.classList.toggle('active', i === curr));
  }

  slides.forEach((slide, i) => {
    let dot = document.createElement('span');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => { curr = i; updateClasses(); resetAutoSlide(); };
    nav.appendChild(dot);

    // Pausar autoplay ao passar o mouse
    slide.addEventListener('mouseenter', stopAutoSlide);
    slide.addEventListener('mouseleave', startAutoSlide);
  });

  function nextSlide() {
    curr = (curr + 1) % slides.length;
    updateClasses();
  }
  function prevSlide() {
    curr = (curr - 1 + slides.length) % slides.length;
    updateClasses();
  }

  nextBtn.onclick = () => { nextSlide(); resetAutoSlide(); };
  prevBtn.onclick = () => { prevSlide(); resetAutoSlide(); };

  function startAutoSlide() {
    stopAutoSlide();
    autoSlide = setInterval(nextSlide, 3000);
  }
  function stopAutoSlide() {
    clearInterval(autoSlide);
  }
  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  updateClasses();
  startAutoSlide();
/*RENATO - Fim*/




/*HUDSON - Início*/


/*HUDSON - Fim*/




/*GUSTAVO - Início*/


/*GUSTAVO - Fim*/




/*ARISTOTELES - Início*/


/*ARISTOTELES - Fim*/