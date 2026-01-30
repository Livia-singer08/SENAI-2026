function calcular() {
    let salario = Number(document.getElementById("salario").value);
    let bonus = salario > 2000 ? salario * 0.10 : 0;
    let total = salario + bonus;
    resultado.innerHTML = `Bônus: R$ ${bonus.toFixed(2)}<br>Salário Final: R$ ${total.toFixed(2)}`;
}