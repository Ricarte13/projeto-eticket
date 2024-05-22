limpar();

function comprar() {
    //escolher o tipo de ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso');
    
    //escolher a quantidade de ingresso
    let quantidade = parseInt(document.getElementById('qtd').value);

    //validar a quantidade
    if(quantidade <= 0 || isNaN(quantidade)) {
        alert('Por favor, insira uma quantidade válida!');
        return;
    }
    
    //diminuir da quantidade disponível o valor selecionado;
    if(tipoIngresso.value == 'pista') {
        let quantidadeTotalPista = document.getElementById('qtd-pista');
        let quantidadeAtualPista = parseInt(quantidadeTotalPista.textContent);
        let novoValorPista = quantidadeAtualPista - quantidade;
        if(novoValorPista < 0) {
            alert('Ingresso indisponível!')
        }else {
            quantidadeTotalPista.textContent = novoValorPista;
        }
    }
    
    if(tipoIngresso.value == 'superior') {
        let quantidadeTotalSuperior = document.getElementById('qtd-superior');
        let quantidadeAtualSuperior = parseInt(quantidadeTotalSuperior.textContent);
        let novoValorSuperior = quantidadeAtualSuperior - quantidade;
        if(novoValorSuperior < 0) {
            alert('Ingresso indisponível!')
        }else {
            quantidadeTotalSuperior.textContent = novoValorSuperior;
        }
    }    
    
    if(tipoIngresso.value == 'inferior') {
        let quantidadeTotalInferior = document.getElementById('qtd-inferior');
        let quantidadeAtualInferior = parseInt(quantidadeTotalInferior.textContent);
        let novoValorInferior = quantidadeAtualInferior - quantidade;
        if(novoValorInferior < 0) {
            alert('Ingresso indisponível!')
        }else {
            quantidadeTotalInferior.textContent = novoValorInferior; 
        }
    }

    limpar();
    
}

function limpar() {
    let quantidade = document.getElementById('qtd').value = "";
    let tipoIngresso = document.getElementById('tipo-ingresso').selectedIndex = 0; 
}