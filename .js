document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides .carousel__slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        // Define a transparência total para todos os slides
        slides.forEach(slide => {
            slide.style.opacity = '0.3'; // Opacidade reduzida para slides não focados
        });

        // Define a opacidade total para o slide atual
        slides[currentSlide].style.opacity = '1';

        // Ajusta a transformação para criar um efeito de proximidade visual no slide atual
        if (currentSlide === 0) {
            slides[0].style.transform = 'scale(1.2)';
            slides[1].style.transform = 'scale(1)';
            slides[2].style.transform = 'scale(1)';
        } else if (currentSlide === 1) {
            slides[0].style.transform = 'scale(1)';
            slides[1].style.transform = 'scale(1.2)';
            slides[2].style.transform = 'scale(1)';
        } else if (currentSlide === 2) {
            slides[0].style.transform = 'scale(1)';
            slides[1].style.transform = 'scale(1)';
            slides[2].style.transform = 'scale(1.2)';
        }

        // Atualiza o índice do slide atual
        currentSlide = (currentSlide + 1) % totalSlides;
    }

    // Chama a função showNextSlide inicialmente
    showNextSlide();

    // Define o intervalo para mudança automática de slide a cada 5 segundos
    let interval = setInterval(showNextSlide, 3000); // Mudança de slide a cada 5 segundos

    // Seleciona todos os botões
    const buttons = document.querySelectorAll('.social-button, .lista-botoes');

    // Adiciona eventos de passar e remover o mouse para todos os botões
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            slides.forEach(slide => {
                slide.style.transform = 'scale(1)'; // Reinicia o tamanho dos slides ao passar o mouse
            });
            clearInterval(interval); // Pausa a mudança automática ao passar o mouse
        });

        button.addEventListener('mouseleave', () => {
            interval = setInterval(showNextSlide, 3000); // Reinicia a mudança automática ao remover o mouse
        });
    });
});
