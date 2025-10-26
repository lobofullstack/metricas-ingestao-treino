const pesoInput = document.getElementById('peso');
const results = document.getElementById('results');

pesoInput.addEventListener('input', calcular);

function calcular() {
    const peso = parseFloat(pesoInput.value);

    if (!peso || peso <= 0) {
        results.style.display = 'none';
        return;
    }

    // Cálculos
    const calorias = (peso * 24).toFixed(0);
    const proteina = (peso * 1.7).toFixed(0);
    const carboidratos = (peso * 2.5).toFixed(0);
    const agua = (peso * 0.045).toFixed(3);
    const creatina = (peso * 0.07).toFixed(2);

    // Atualizar valores
    document.getElementById('calorias').textContent = calorias;
    document.getElementById('proteina').textContent = proteina;
    document.getElementById('carboidratos').textContent = carboidratos;
    document.getElementById('agua').textContent = agua;
    document.getElementById('creatina').textContent = creatina;

    // Mostrar resultados
    results.style.display = 'block';

}

