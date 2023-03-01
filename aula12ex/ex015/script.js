function verificar(){
    var data = new Date(); //vide script ex014
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if(fano.value.length == 0 || fano.value > ano) { //teste caso usuário insira nada ou um valor de ano maior que o ano atual
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex'); //coleta do dado de sexo do usuários
        var idade = ano - Number(fano.value); //cálculo da idade. Uso do método "Number()" para que cálculo seja possível, ja que o método ".value" retorna em string.
        var gen = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) { //teste para sexo maculino
            gen= 'homem';
            if( idade>=0 && idade < 10 ) { //teste para idade
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-m.png')
            } else if(idade < 50){
                img.setAttribute('src', 'adulto-m.png')
            } else {
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gen = 'mulher';
            if( idade>=0 && idade < 10 ) {
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-f.png')
            } else if(idade < 50){
                img.setAttribute('src', 'adulto-f.png')
            } else {
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`;
        res.appendChild(img)
    }
}