document.addEventListener('DOMContentLoaded', function() {
    const listaVagas = document.getElementById('listaVagas');
    
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.classList.add('vaga');
    
        if (i <= 4) {
            li.classList.add('vaga-reservada');
            li.innerHTML = `<p>Vaga ${i} - Reservada</p>`;
        } else {
            li.classList.add('vaga-disponivel');
            li.innerHTML = `<p>Vaga ${i} - Disponível</p>`;
        }
    
        listaVagas.appendChild(li);
        }
    });
function irParaIndex (){
    window.location.href = '../cadastroVagas/index.html';
}
    
function irParaHome (){
    window.location.href = '../paginaInicial/home.html';
}
    
document.getElementById('btn-cadastro').onclick = irParaIndex;
document.getElementById('btn-voltar').onclick = irParaHome;
    