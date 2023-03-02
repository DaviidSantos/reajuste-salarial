const form = document.querySelector('.form')
const salarioAtualInput = document.querySelector('.salario-atual')
const porcentagemInput = document.querySelector('.porcentagem-aumento')
const reajuste = document.querySelector('.reajuste')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const salarioAtual = salarioAtualInput.value;
    const porcentagem = 1 + ( porcentagemInput.value / 100 );

    const salarioReajustado = salarioAtual * porcentagem;

    reajuste.innerHTML = `R$ ${salarioReajustado.toFixed(2)}`
})