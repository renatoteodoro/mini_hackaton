// --- FUNCIONALIDADE 1: CONTADOR REGRESSIVO ---
const deadline = new Date("Sep 23, 2025 22:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        countdownElement.innerHTML = `<span class="timer-item">${days}d</span> <span class="timer-item">${hours}h</span> <span class="timer-item">${minutes}m</span> <span class="timer-item">${seconds}s</span>`;

        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "DESAFIO CONCLUÍDO!";
            countdownElement.style.color = "#e74c3c";
        }
    }
}, 1000);

// --- FUNCIONALIDADE 2: ANIMAÇÃO DA FRASE E IMAGEM DO BANNER ---
document.addEventListener('DOMContentLoaded', () => {
    const bannerImage = document.getElementById('bannerImage');
    const fraseChamada = document.getElementById('fraseChamada');
    
    let isImageShowing = true;

    function toggleBannerContent() {
        if (isImageShowing) {
            // Se a imagem está visível, esconde-a e mostra o texto
            if (bannerImage) bannerImage.classList.remove('show');
            if (fraseChamada) fraseChamada.classList.add('show');
        } else {
            // Se o texto está visível, esconde-o e mostra a imagem
            if (fraseChamada) fraseChamada.classList.remove('show');
            if (bannerImage) bannerImage.classList.add('show');
        }
        isImageShowing = !isImageShowing;
    }
    
    // Inicia a animação com a imagem visível
    if (bannerImage) bannerImage.classList.add('show');

    // Alterna o conteúdo a cada 5 segundos
    setInterval(toggleBannerContent, 7000);
});

// --- FUNCIONALIDADE 3: CARROSSEL DE SLIDES (RENATO) ---
const track = document.getElementById('carousel-track');
const slides = track ? Array.from(track.children) : [];
const nav = document.getElementById('carousel-nav');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let curr = 0;
let autoSlide;

if (track && nav && prevBtn && nextBtn) {
    function updateClasses() {
        slides.forEach((slide, i) => {
            slide.className = "carousel-slide";
            if (i === curr) slide.classList.add('active');
            else if (i === (curr - 1 + slides.length) % slides.length) slide.classList.add('prev');
            else if (i === (curr + 1) % slides.length) slide.classList.add('next');
        });
        nav.querySelectorAll('.carousel-dot').forEach((dot, i) => dot.classList.toggle('active', i === curr));
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
}