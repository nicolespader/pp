document.getElementById('drawButton').addEventListener('click', function() {
    const targetAudience = document.getElementById('targetAudience').value;
    const product = document.getElementById('product').value;
    const marketArea = document.getElementById('marketArea').value;

    let colors = generateColorPalette(targetAudience, product, marketArea);

    displayPalette(colors);
});

function generateColorPalette(audience, product, market) {
    let colors = [];

    // Adolescentes
    if (audience === 'adolescentes' && product === 'roupas' && market === 'varejo') {
        colors = ['#FF69B4', '#FF69B4', '#FF69B4']; // Cores aleatórias
    } else if (audience === 'adolescentes' && product === 'roupas' && market === 'serviços') {
        colors = ['#00008B', '#00008B', '#00008B']; 
    } else if (audience === 'adolescentes' && product === 'roupas' && market === 'educação') {
        colors = ['#FFD700', '#FFD700', '#FFD700']; 
    } else if (audience === 'adolescentes' && product === 'roupas' && market === 'saúde') {
        colors = ['#32CD32', '#32CD32', '#32CD32'];

    } else if (audience === 'adolescentes' && product === 'tecnologia' && market === 'varejo') {
        colors = ['#8B0000', '#8B0000', '#8B0000']; 
    } else if (audience === 'adolescentes' && product === 'tecnologia' && market === 'serviços') {
        colors = ['#FFA07A', '#FFA07A', '#FFA07A']; 
    } else if (audience === 'adolescentes' && product === 'tecnologia' && market === 'educação') {
        colors = ['#9370DB', '#9370DB', '#9370DB']; 
    } else if (audience === 'adolescentes' && product === 'tecnologia' && market === 'saúde') {
        colors = ['#20B2AA', '#20B2AA', '#20B2AA'];

    } else if (audience === 'adolescentes' && product === 'alimentos' && market === 'varejo') {
        colors = ['#FF4500', '#FF4500', '#FF4500']; 
    } else if (audience === 'adolescentes' && product === 'alimentos' && market === 'serviços') {
        colors = ['#DA70D6', '#DA70D6', '#DA70D6']; 
    } else if (audience === 'adolescentes' && product === 'alimentos' && market === 'educação') {
        colors = ['#FFDAB9', '#FFDAB9', '#FFDAB9']; 
    } else if (audience === 'adolescentes' && product === 'alimentos' && market === 'saúde') {
        colors = ['#FF6347', '#FF6347', '#FF6347'];

    } else if (audience === 'adolescentes' && product === 'cosmeticos' && market === 'varejo') {
        colors = ['#800080', '#800080', '#800080']; 
    } else if (audience === 'adolescentes' && product === 'cosmeticos' && market === 'serviços') {
        colors = ['#FFD700', '#FFD700', '#FFD700']; 
    } else if (audience === 'adolescentes' && product === 'cosmeticos' && market === 'educação') {
        colors = ['#4169E1', '#4169E1', '#4169E1']; 
    } else if (audience === 'adolescentes' && product === 'cosmeticos' && market === 'saúde') {
        colors = ['#8A2BE2', '#8A2BE2', '#8A2BE2'];

    // Adultos
    } else if (audience === 'adultos' && product === 'roupas' && market === 'varejo') {
        colors = ['#FF69B4', '#FFD700', '#FF69B4']; 
    } else if (audience === 'adultos' && product === 'roupas' && market === 'serviços') {
        colors = ['#00008B', '#FFA07A', '#00008B']; 
    } else if (audience === 'adultos' && product === 'roupas' && market === 'educação') {
        colors = ['#4682B4', '#4682B4', '#4682B4']; 
    } else if (audience === 'adultos' && product === 'roupas' && market === 'saúde') {
        colors = ['#7FFF00', '#7FFF00', '#7FFF00'];

    } else if (audience === 'adultos' && product === 'tecnologia' && market === 'varejo') {
        colors = ['#FF4500', '#FF4500', '#FF4500']; 
    } else if (audience === 'adultos' && product === 'tecnologia' && market === 'serviços') {
        colors = ['#6A5ACD', '#6A5ACD', '#6A5ACD']; 
    } else if (audience === 'adultos' && product === 'tecnologia' && market === 'educação') {
        colors = ['#4682B4', '#4682B4', '#4682B4']; 
    } else if (audience === 'adultos' && product === 'tecnologia' && market === 'saúde') {
        colors = ['#B22222', '#B22222', '#B22222'];

    } else if (audience === 'adultos' && product === 'alimentos' && market === 'varejo') {
        colors = ['#FF4500', '#FF6347', '#FF4500']; 
    } else if (audience === 'adultos' && product === 'alimentos' && market === 'serviços') {
        colors = ['#FFD700', '#32CD32', '#FFD700']; 
    } else if (audience === 'adultos' && product === 'alimentos' && market === 'educação') {
        colors = ['#8A2BE2', '#8A2BE2', '#8A2BE2']; 
    } else if (audience === 'adultos' && product === 'alimentos' && market === 'saúde') {
        colors = ['#7FFF00', '#7FFF00', '#7FFF00'];

    } else if (audience === 'adultos' && product === 'cosmeticos' && market === 'varejo') {
        colors = ['#FFB6C1', '#FFB6C1', '#FFB6C1']; 
    } else if (audience === 'adultos' && product === 'cosmeticos' && market === 'serviços') {
        colors = ['#FF69B4', '#FF69B4', '#FF69B4']; 
    } else if (audience === 'adultos' && product === 'cosmeticos' && market === 'educação') {
        colors = ['#8B0000', '#8B0000', '#8B0000']; 
    } else if (audience === 'adultos' && product === 'cosmeticos' && market === 'saúde') {
        colors = ['#FF4500', '#FF4500', '#FF4500'];

    // Crianças
    } else if (audience === 'crianças' && product === 'roupas' && market === 'varejo') {
        colors = ['#FFD700', '#FFD700', '#FFD700']; 
    } else if (audience === 'crianças' && product === 'roupas' && market === 'serviços') {
        colors = ['#32CD32', '#32CD32', '#32CD32']; 
    } else if (audience === 'crianças' && product === 'roupas' && market === 'educação') {
        colors = ['#FF4500', '#FF4500', '#FF4500']; 
    } else if (audience === 'crianças' && product === 'roupas' && market === 'saúde') {
        colors = ['#FF69B4', '#FF69B4', '#FF69B4'];

    } else if (audience === 'crianças' && product === 'tecnologia' && market === 'varejo') {
        colors = ['#00CED1', '#00CED1', '#00CED1']; 
    } else if (audience === 'crianças' && product === 'tecnologia' && market === 'serviços') {
        colors = ['#6A5ACD', '#6A5ACD', '#6A5ACD']; 
    } else if (audience === 'crianças' && product === 'tecnologia' && market === 'educação') {
        colors = ['#B22222', '#B22222', '#B22222']; 
    } else if (audience === 'crianças' && product === 'tecnologia' && market === 'saúde') {
        colors = ['#7FFF00', '#7FFF00', '#7FFF00'];

    // Idosos
    } else if (audience === 'idosos' && product === 'roupas' && market === 'varejo') {
        colors = ['#808080', '#808080', '#808080']; 
    } else if (audience === 'idosos' && product === 'roupas' && market === 'serviços') {
        colors = ['#B0C4DE', '#B0C4DE', '#B0C4DE']; 
    } else if (audience === 'idosos' && product === 'roupas' && market === 'educação') {
        colors = ['#B8860B', '#B8860B', '#B8860B']; 
    } else if (audience === 'idosos' && product === 'roupas' && market === 'saúde') {
        colors = ['#FF69B4', '#FF69B4', '#FF69B4'];

    } else if (audience === 'idosos' && product === 'tecnologia' && market === 'varejo') {
        colors = ['#4682B4', '#4682B4', '#4682B4']; 
    } else if (audience === 'idosos' && product === 'tecnologia' && market === 'serviços') {
        colors = ['#FF4500', '#FF4500', '#FF4500']; 
    } else if (audience === 'idosos' && product === 'tecnologia' && market === 'educação') {
        colors = ['#6A5ACD', '#6A5ACD', '#6A5ACD']; 
    } else if (audience === 'idosos' && product === 'tecnologia' && market === 'saúde') {
        colors = ['#B0C4DE', '#B0C4DE', '#B0C4DE'];

    // Continue com todas as combinações...
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
