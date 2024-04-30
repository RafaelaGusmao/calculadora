function sair():void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit();
}

function adicao(): void{
    console.clear();
    const teclado = require(`prompt-sync`)();
    let nUm : number = parseInt(teclado(`Digite o 1º número: `));
    let nDois : number  = parseInt(teclado(`Digite o 2º número: `));
    console.log(`${nUm} + ${nDois} = ${nUm+nDois}`);
    console.log(`Aperte ENTER para continuar ...`);
    teclado();
    menu();
}

function multiplicacao (): void{
    console.clear();
    const teclado = require(`prompt-sync`)();
    let nUm : number = parseInt(teclado(`Digite o 1º número: `));
    let nDois : number  = parseInt(teclado(`Digite o 2º número: `));
    console.log(`${nUm} * ${nDois} = ${nUm*nDois}`);
    console.log(`Aperte ENTER para continuar ...`);
    teclado();
    menu();
}

function subtracao (): void{
    console.clear();
    const teclado = require(`prompt-sync`)();
    let nUm : number = parseInt(teclado(`Digite o 1º número: `));
    let nDois : number  = parseInt(teclado(`Digite o 2º número: `));
    console.log(`${nUm} - ${nDois} = ${nUm-nDois}`);
    console.log(`Aperte ENTER para continuar ...`);
    teclado();
    menu();
}

function divisao (): void{
    console.clear();
    const teclado = require(`prompt-sync`)();
    let nUm : number = parseInt(teclado(`Digite o 1º número: `));
    let nDois : number  = parseInt(teclado(`Digite o 2º número: `));
    console.log(`${nUm} / ${nDois} = ${nUm/nDois}`);
    console.log(`Aperte ENTER para continuar ...`);
    teclado();
    menu();
}

function opcao (selecao: string): void{
    console.clear();
    switch (selecao){
        case `+` : adicao(); break;
        case `-` : subtracao(); break;
        case `*` : multiplicacao(); break;
        case `/`: divisao(); break;
        case `@` : sair();

        default: break;
    }
}

function menu (): void{
    console.clear();
    const teclado = require(`prompt-sync`)();
    console.log(`Digite a operação que deseja:`);
    console.log(`+ --> Adição`);
    console.log(`- --> Subtração`);
    console.log(`* --> Multiplicação`);
    console.log(`/ --> Divisão`);
    console.log(`@ --> sair`);

    let selecao : string = teclado(`--> `);

    opcao(selecao);
}


menu();