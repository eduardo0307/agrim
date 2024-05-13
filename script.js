let fazenda = 100;
let cidde = 0;
let dinheiro = 50;

 function atualizarStatus() {
    document.getElementById("farm").innerText = "Fazenda: " + fazenda;
    document.getElementById("city").innerText = "Cidade: " + cidade;
    document.getElementById("money").innerText ="Dinheiro: $" + dinheiro;
 }

 function cultivar() {
    let colheita = math.floor(math.random() * 21) + 10;
    fazenda += colheita;
    dinheiro += colheita * 2;
    dinheiro -= 10; //custo de manutençao
    document.getElementById("mensagem").innerText = " Você colheu " + colheita + "unidade de produtos agrícolas.";
 }

 function cidade() {
    let venda = math.floor(math.random() * 16) + 5;
    cidade += venda;
    dinheiro += venda * 5;
    dinheiro -= 10; //custo de manutençao
    atualizarStatus();
    document.getElementById("mensagem").innerText = "Você vendeu " + venda + " unidades de produtos na cidade.";
 }