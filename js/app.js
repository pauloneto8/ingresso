//Inicialização das variáveis.
document.getElementById('qtd').value = '01';
let qtdPista    = parseInt(document.getElementById('qtd-pista').textContent);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

//Função de compra dos ingressos.
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    verificarDisponibilidade(tipoIngresso,quantidade);

    document.getElementById('qtd').value = '01';
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
    } else if(tipo=='superior'){
        if(qtdSuperior>=qtd){
            alert(`Você comprou ${qtd} para ${tipo}!`);
            qtdSuperior -= qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
        }else{
            alert("Não há disponibilidade para essa quantidade! :(");
        }
    }else{
        if(qtdInferior>=qtd){
            alert(`Você comprou ${qtd} para ${tipo}!`);
            qtdInferior -= qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
        }else{
            alert("Não há disponibilidade para essa quantidade! :(");
        }        
    }

}
