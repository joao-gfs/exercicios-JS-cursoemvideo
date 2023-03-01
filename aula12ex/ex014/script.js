function carregar() {
    var msg = document.getElementById('msg') // var referente à div da mensagem dizendo as horas
    var img = document.getElementById('imagem') // var referente à imagem que será "escolhida" dependendo da hora
    var cump = document.getElementById('cump') // var referente à div da mensagem que cumprimenta o usuário
    var data = new Date() //o operador new cria uma nova instância de objeto definido pelo usuário ou um tipo nativo, que é o caso dessa aplicação que usa Date.
    var hora = data.getHours() //a var "hora" recebe o valor das horas do objeto Date contido na variável "data" através do método .getHours()
    //var hora = 2 //o comentário ao lado foi usado para testar o programa sem necessitar de mudar as horas no cliente
    msg.innerHTML = `Agora são ${hora} horas.` //edita o conteudo da div "msg"

    if(hora >= 0 && hora< 12) //testa horário da manhã
    {
        img.src = 'fotomanha.png'
        document.body.style.background = '#89587e' //muda cor do background
        cump.innerHTML = 'Bom dia!' //edita conteúdo da div 'cump'
    } else if(hora >= 12 && hora <= 18) //testa horário da tarde
    {
        img.src = 'fototarde.png'
        document.body.style.background = '#f7b35d'
        cump.innerHTML = 'Boa tarde!'
    } else{ //logicamente, se não é manhã nem tarde, será noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#31464c'
        cump.innerHTML = 'Boa noite!'
    }
}