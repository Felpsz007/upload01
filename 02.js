// Seleciona todos os botões
const buttons = document.querySelectorAll('.social-button, .menu-button');

// Adiciona eventos de passar e remover o mouse para todos os botões
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
