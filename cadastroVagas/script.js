document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const placa = document.getElementById('placa').value;
    const proprietario = document.getElementById('proprietario').value;
    const apartamento = document.getElementById('apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;   
    const form = document.querySelector('#reservaForm');

    console.log('Informações da reserva:');
    console.log(`Placa: ${placa}`);
    console.log(`Proprietário: ${proprietario}`);
    console.log(`Apartamento: ${apartamento}`);
    console.log(`Bloco: ${bloco}`);
    console.log(`Modelo: ${modelo}`);
    console.log(`Cor: ${cor}`);
    console.log(`Vaga: ${vaga}`);

    alert('Cadastro realizado com sucesso!');
   
    const formData = new FormData(form);
    let json = {};
    
    for (const [key,values] of formData.entries()){
            json[key] = values;
        }
    
        console.log(json); 
        form.reset();
    });   

function irParaVagas (){
    window.location.href = '../vagasDisponiveis/listar.html';
}
    
function irParaHome (){
    window.location.href = '../paginaInicial/home.html';
}
    
document.getElementById('btn-lista').onclick = irParaVagas;
document.getElementById('btn-voltar').onclick = irParaHome;
    