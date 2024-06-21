// Função para calcular a média das cores RGB de uma imagem
function calcularMediaCores(img) {
    // Cria um canvas invisível para extrair as cores da imagem
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Obtém os dados de pixels da imagem
    var imageData = ctx.getImageData(0, 0, img.width, img.height);
    var pixels = imageData.data;

    var r = 0, g = 0, b = 0;

    // Calcula a média das cores RGB
    for (var i = 0; i < pixels.length; i += 4) {
        r += pixels[i];
        g += pixels[i + 1];
        b += pixels[i + 2];
    }

    var totalPixels = pixels.length / 4;
    r = Math.round(r / totalPixels);
    g = Math.round(g / totalPixels);
    b = Math.round(b / totalPixels);

    return { r: r, g: g, b: b };
}

// Seleciona a imagem
var img = document.getElementById('img');
var rectangle = document.getElementById('rectangle');

// Carrega a imagem
img.onload = function() {
    // Calcula a média das cores da imagem
    var mediaCores = calcularMediaCores(img);

    // Ajusta o tamanho da imagem conforme a largura do retângulo
    var rectangleWidth = rectangle.clientWidth; // largura atual do retângulo
    var imageWidth = rectangleWidth / 2; // largura da imagem (50% do retângulo)

    img.style.width = imageWidth + 'px';
    img.style.height = 'auto'; // altura automática para manter a proporção da imagem

    // Aplica o degradê de cores ao retângulo
    rectangle.style.background = `linear-gradient(to right, rgb(${mediaCores.r}, ${mediaCores.g}, ${mediaCores.b}), #272727)`;
};
