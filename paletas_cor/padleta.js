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
        colors = ['#FF69B4', '#FFC0CB', '#FF1493'];
    } else if (audience === 'adolescentes' && product === 'roupas' && market === 'serviços') {
        colors = ['#8A2BE2', '#9370DB', '#4B0082'];
    } else if (audience === 'adolescentes' && product === 'roupas' && market === 'educação') {
        colors = ['#FFD700', '#FFA500', '#FF8C00'];
    } else if (audience === 'adolescentes' && product === 'roupas' && market === 'saúde') {
        colors = ['#32CD32', '#228B22', '#006400'];

    } else if (audience === 'adolescentes' && product === 'tecnologia' && market === 'varejo') {
        colors = ['#4682B4', '#5F9EA0', '#6495ED'];
    } else if (audience === 'adolescentes' && product === 'tecnologia' && market === 'serviços') {
        colors = ['#FFD700', '#FFA500', '#FF8C00'];
    } else if (audience === 'adolescentes' && product === 'tecnologia' && market === 'educação') {
        colors = ['#FF4500', '#FF6347', '#CD5C5C'];
    } else if (audience === 'adolescentes' && product === 'tecnologia' && market === 'saúde') {
        colors = ['#00CED1', '#20B2AA', '#48D1CC'];

    } else if (audience === 'adolescentes' && product === 'alimentos' && market === 'varejo') {
        colors = ['#FF6347', '#FF4500', '#CD5C5C'];
    } else if (audience === 'adolescentes' && product === 'alimentos' && market === 'serviços') {
        colors = ['#32CD32', '#228B22', '#006400'];
    } else if (audience === 'adolescentes' && product === 'alimentos' && market === 'educação') {
        colors = ['#FFD700', '#FFA500', '#FF8C00'];
    } else if (audience === 'adolescentes' && product === 'alimentos' && market === 'saúde') {
        colors = ['#8A2BE2', '#9370DB', '#4B0082'];

    } else if (audience === 'adolescentes' && product === 'cosmeticos' && market === 'varejo') {
        colors = ['#FF69B4', '#FFC0CB', '#FF1493'];
    } else if (audience === 'adolescentes' && product === 'cosmeticos' && market === 'serviços') {
        colors = ['#8B008B', '#FF00FF', '#C71585'];
    } else if (audience === 'adolescentes' && product === 'cosmeticos' && market === 'educação') {
        colors = ['#4169E1', '#4682B4', '#1E90FF'];
    } else if (audience === 'adolescentes' && product === 'cosmeticos' && market === 'saúde') {
        colors = ['#FFB6C1', '#FF69B4', '#FF1493'];

    // Adultos
    } else if (audience === 'adultos' && product === 'roupas' && market === 'varejo') {
        colors = ['#A52A2A', '#D2691E', '#8B4513'];
    } else if (audience === 'adultos' && product === 'roupas' && market === 'serviços') {
        colors = ['#4682B4', '#5F9EA0', '#1E90FF'];
    } else if (audience === 'adultos' && product === 'roupas' && market === 'educação') {
        colors = ['#8B0000', '#B22222', '#FF6347'];
    } else if (audience === 'adultos' && product === 'roupas' && market === 'saúde') {
        colors = ['#32CD32', '#228B22', '#006400'];

    } else if (audience === 'adultos' && product === 'tecnologia' && market === 'varejo') {
        colors = ['#00CED1', '#20B2AA', '#48D1CC'];
    } else if (audience === 'adultos' && product === 'tecnologia' && market === 'serviços') {
        colors = ['#FFD700', '#FFA500', '#FF8C00'];
    } else if (audience === 'adultos' && product === 'tecnologia' && market === 'educação') {
        colors = ['#FF4500', '#FF6347', '#CD5C5C'];
    } else if (audience === 'adultos' && product === 'tecnologia' && market === 'saúde') {
        colors = ['#4682B4', '#5F9EA0', '#6495ED'];

    } else if (audience === 'adultos' && product === 'alimentos' && market === 'varejo') {
        colors = ['#FF6347', '#FF4500', '#CD5C5C'];
    } else if (audience === 'adultos' && product === 'alimentos' && market === 'serviços') {
        colors = ['#32CD32', '#228B22', '#006400'];
    } else if (audience === 'adultos' && product === 'alimentos' && market === 'educação') {
        colors = ['#FFD700', '#FFA500', '#FF8C00'];
    } else if (audience === 'adultos' && product === 'alimentos' && market === 'saúde') {
        colors = ['#8A2BE2', '#9370DB', '#4B0082'];

    } else if (audience === 'adultos' && product === 'cosmeticos' && market === 'varejo') {
        colors = ['#FF69B4', '#FFC0CB', '#FF1493'];
    } else if (audience === 'adultos' && product === 'cosmeticos' && market === 'serviços') {
        colors = ['#8B008B', '#FF00FF', '#C71585'];
    } else if (audience === 'adultos' && product === 'cosmeticos' && market === 'educação') {
        colors = ['#4169E1', '#4682B4', '#1E90FF'];
    } else if (audience === 'adultos' && product === 'cosmeticos' && market === 'saúde') {
        colors = ['#FFB6C1', '#FF69B4', '#FF1493'];

    // Crianças
    } else if (audience === 'crianças' && product === 'roupas' && market === 'varejo') {
        colors = ['#FFD700', '#FFA500', '#FF8C00'];
    } else if (audience === 'crianças' && product === 'roupas' && market === 'serviços') {
        colors = ['#32CD32', '#228B22', '#006400'];
    } else if (audience === 'crianças' && product === 'roupas' && market === 'educação') {
        colors = ['#FF6347', '#FF4500', '#CD5C5C'];
    } else if (audience === 'crianças' && product === 'roupas' && market === 'saúde') {
        colors = ['#FF69B4', '#FFC0CB', '#FF1493'];

    } else if (audience === 'crianças' && product === 'tecnologia' && market === 'varejo') {
        colors = ['#00CED1', '#20B2AA', '#48D1CC'];
    } else if (audience === 'crianças' && product === 'tecnologia' && market === 'serviços') {
        colors = ['#6A5ACD', '#483D8B', '#7B68EE'];
    } else if (audience === 'crianças' && product === 'tecnologia' && market === 'educação') {
        colors = ['#B22222', '#FF6347', '#CD5C5C'];
    } else if (audience === 'crianças' && product === 'tecnologia' && market === 'saúde') {
        colors = ['#7FFF00', '#32CD32', '#ADFF2F'];

    // Idosos
    } else if (audience === 'idosos' && product === 'roupas' && market === 'varejo') {
        colors = ['#808080', '#A9A9A9', '#696969'];
    } else if (audience === 'idosos' && product === 'roupas' && market === 'serviços') {
        colors = ['#B0C4DE', '#87CEEB', '#4682B4'];
    } else if (audience === 'idosos' && product === 'roupas' && market === 'educação') {
        colors = ['#B8860B', '#DAA520', '#FFD700'];
    } else if (audience === 'idosos' && product === 'roupas' && market === 'saúde') {
        colors = ['#FF69B4', '#FFC0CB', '#FF1493'];

    } else if (audience === 'idosos' && product === 'tecnologia' && market === 'varejo') {
        colors = ['#4682B4', '#5F9EA0', '#1E90FF'];
    } else if (audience === 'idosos' && product === 'tecnologia' && market === 'serviços') {
        colors = ['#FF4500', '#FF6347', '#CD5C5C'];
    } else if (audience === 'idosos' && product === 'tecnologia' && market === 'educação') {
        colors = ['#6A5ACD', '#483D8B', '#7B68EE'];
    } else if (audience === 'idosos' && product === 'tecnologia' && market === 'saúde') {
        colors = ['#B0C4DE', '#87CEEB', '#4682B4'];

    }

    return colors;
}

function displayPalette(colors) {
    const paletteDisplay = document.getElementById('paletteDisplay');
    paletteDisplay.innerHTML = '';

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
