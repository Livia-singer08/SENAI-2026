function calcular() {
    let valor = Number(document.getElementById("valor").value);
    let dias = Number(document.getElementById("dias").value);
    let multa = dias > 0 ? valor * 0.02 : 0;
    resultado.innerHTML = `Multa: R$ ${multa.toFixed(2)}<br>Total: R$ ${(valor + multa).toFixed(2)}`;
}