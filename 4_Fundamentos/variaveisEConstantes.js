//Tipos de Variavel VAR e LET
    var a = 3;
    let b = 4;

    //O tipo de variavel var permite sua redeclaração
    var a = 30;

    //let b = 40; O tipo de variavel let não permite sua redeclaração
    b = 40;
    //Porém é possivel atribuir novo valor, se no mesmo bloco ou escopo.

    console.log(a, b);

    a = 300;
    b = 400;

    console.log(a, b);

// Tipo Constante CONST
    const c = 5;
    //c = 50; O tipo const não permite a modificação do valor atribuido.
    console.log(c);
