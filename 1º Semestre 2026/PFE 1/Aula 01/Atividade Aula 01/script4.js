function calcular() {
    let conta = Number(document.getElementById("conta").value);
    let taxa = conta > 100 ? conta * 0.10 : 0;
    let total = conta + taxa;

    document.getElementById("resultado").innerHTML =
            `Taxa: R$ ${taxa.toFixed(2)}<br>Total: R$ ${total.toFixed(2)}`;
}