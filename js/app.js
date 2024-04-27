//Inicialização das variáveis.
document.getElementById('qtd').value = '01';
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

//Função de compra dos ingressos.
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    verificarDisponibilidade(tipoIngresso,quantidade);
}

//Função que verifica a disponibilidade de ingresso para compra.
function verificarDisponibilidade (tipo, qtd){

    if(tipo=='pista'){
        if(qtdPista>=qtd){
            alert(`Você comprou ${qtd} para ${tipo}!`);
            qtdPista -= qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
        }else{
            alert("Não há disponibilidade para essa quantidade! :(");
        }
    }

}