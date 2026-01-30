function calcular() {
    let valor = Number(document.getElementById("valor").value);
    let desconto = valor > 200 ? valor * 0.05 : 0;
    resultado.innerHTML = `Desconto: R$ ${desconto.toFixed(2)}<br>Total: R$ ${(valor - desconto).toFixed(2)}`;
}