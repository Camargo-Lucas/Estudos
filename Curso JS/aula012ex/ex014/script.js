function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        document.body.style.background = "#e2cd9f"
    //BOM DIA!
    img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = "#b9846f"
    // BOA TARDE!
    img.src = "fototarde.png"
    } else {
        document.body.style.background = "#515154"
    //BOA NOITE!
    img.src = 'fotonoite.png'
    }
}