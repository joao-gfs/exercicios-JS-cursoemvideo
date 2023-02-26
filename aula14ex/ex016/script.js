function contar(){
    let i = document.querySelector('input#txtinicio');
    let f = document.querySelector('input#txtfim');
    let p = document.querySelector('input#txtpasso');
    let res = document.querySelector('div#cont')
    let inicio = Number(i.value)
    let fim = Number(f.value)
    let passo = Number(p.value)


    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else if(passo <= 0){
        alert('Passo inválido! Considerando passo 1');
        passo = 1;
    } else {}
    
    if (inicio > fim){                                      //Contagem decrescente
        res.innerHTML = ''
        for ( inicio ; inicio >= fim ; inicio -= passo){
            res.innerHTML += inicio + ' &#128073 ';
    }
    } else{                                                //Contagem crescente
    
        res.innerHTML = ''
        for ( inicio ; inicio <= fim ; inicio += passo){
            res.innerHTML += inicio + '&#128073';
    }
}
    res.innerHTML += "&#127937";
}