document.getElementById('drawButton').addEventListener('click', function() {
    const targetAudience = document.getElementById('targetAudience').value;
    const product = document.getElementById('product').value;
    const marketArea = document.getElementById('marketArea').value;

    let colors = generateColorPalette(targetAudience, product, marketArea);

    displayPalette(colors);
});

function generateColorPalette(audience, product, market) {
    let colors = [];

    // Público-alvo
    if (audience === 'adolescentes') {
        colors.push('#FF69B4'); // Rosa vibrante para adolescentes
    } else if (audience === 'adultos') {
        colors.push('#00008B'); // Azul escuro para adultos
    } else if (audience === 'crianças') {
        colors.push('#FFD700'); // Amarelo para crianças
    } else if (audience === 'idosos') {
        colors.push('#708090'); // Cinza para idosos
    }

    // Produto
    if (product === 'roupas') {
        colors.push('#FF4500'); // Laranja para moda
    } else if (product === 'tecnologia') {
        colors.push('#4682B4'); // Azul claro para tecnologia
    } else if (product === 'alimentos') {
        colors.push('#32CD32'); // Verde para alimentos
    } else if (product === 'cosmeticos') {
        colors.push('#FFB6C1'); // Rosa claro para cosméticos
    }

    // Área de mercado
    if (market === 'varejo') {
        colors.push('#8B4513'); // Marrom para varejo
    } else if (market === 'serviços') {
        colors.push('#00CED1'); // Turquesa para serviços
    } else if (market === 'educação') {
        colors.push('#FFD700'); // Amarelo para educação
    } else if (market === 'saúde') {
        colors.push('#8A2BE2'); // Roxo para saúde
    }

    return colors;
}

function displayPalette(colors) {
    const paletteDisplay = document.getElementById('paletteDisplay');
    paletteDisplay.innerHTML = ''; // Limpa as cores anteriores

    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.style.backgroundColor = color;
        colorBox.style.width = '100px';
        colorBox.style.height = '100px';
        colorBox.style.display = 'inline-block';
        colorBox.style.margin = '5px';
        paletteDisplay.appendChild(colorBox);
    });
}
