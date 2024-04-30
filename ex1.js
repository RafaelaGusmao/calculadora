function sair() {
    console.clear();
    console.log("Fim de programa...");
    process.exit();
}
function adicao() {
    console.clear();
    var teclado = require("prompt-sync")();
    var nUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var nDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    console.log("".concat(nUm, " + ").concat(nDois, " = ").concat(nUm + nDois));
    console.log("Aperte ENTER para continuar ...");
    teclado();
    menu();
}
function multiplicacao() {
    console.clear();
    var teclado = require("prompt-sync")();
    var nUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var nDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    console.log("".concat(nUm, " * ").concat(nDois, " = ").concat(nUm * nDois));
    console.log("Aperte ENTER para continuar ...");
    teclado();
    menu();
}
function subtracao() {
    console.clear();
    var teclado = require("prompt-sync")();
    var nUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var nDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    console.log("".concat(nUm, " - ").concat(nDois, " = ").concat(nUm - nDois));
    console.log("Aperte ENTER para continuar ...");
    teclado();
    menu();
}
function divisao() {
    console.clear();
    var teclado = require("prompt-sync")();
    var nUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var nDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    console.log("".concat(nUm, " / ").concat(nDois, " = ").concat(nUm / nDois));
    console.log("Aperte ENTER para continuar ...");
    teclado();
    menu();
}
function opcao(selecao) {
    console.clear();
    switch (selecao) {
        case "+":
            adicao();
            break;
        case "-":
            subtracao();
            break;
        case "*":
            multiplicacao();
            break;
        case "/":
            divisao();
            break;
        case "@": sair();
        default: break;
    }
}
function menu() {
    console.clear();
    var teclado = require("prompt-sync")();
    console.log("Digite a opera\u00E7\u00E3o que deseja:");
    console.log("+ --> Adi\u00E7\u00E3o");
    console.log("- --> Subtra\u00E7\u00E3o");
    console.log("* --> Multiplica\u00E7\u00E3o");
    console.log("/ --> Divis\u00E3o");
    console.log("@ --> sair");
    var selecao = teclado("--> ");
    opcao(selecao);
}
menu();
