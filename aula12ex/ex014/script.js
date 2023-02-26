function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var cump = document.getElementById('cump')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora< 12) 
    {
        img.src = 'fotomanha.png'
        document.body.style.background = '#89587e'
        cump.innerHTML = 'Bom dia!'
    } else if(hora >= 12 && hora <= 18)
    {
        img.src = 'fototarde.png'
        document.body.style.background = '#f7b35d'
        cump.innerHTML = 'Boa tarde!'
    } else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#31464c'
        cump.innerHTML = 'Boa noite!'
    }
}