function calcular() {
    let valor = Number(document.getElementById("valor").value);
    let frete = valor >= 150 ? 0 : 20;
    let total = valor + frete;
    resultado.innerHTML = `Frete: R$ ${frete.toFixed(2)}<br>Total: R$ ${total.toFixed(2)}`;
}