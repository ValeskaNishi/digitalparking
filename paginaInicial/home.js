function irParaIndex (){
    window.location.href = '../cadastroVagas/index.html';
}

function irParaVagas (){
    window.location.href = '../vagasDisponiveis/listar.html';
}

document.getElementById('btn-cadastro').onclick = irParaIndex;
document.getElementById('btn-vagas').onclick = irParaVagas;
