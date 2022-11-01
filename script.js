function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  20 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        saudacao.innerHTML = `Bom dia!!`
        img.src='./img/manha.png'
        document.body.style.background = '#fedea0'
        
    } else if (hora >= 12 && hora <= 18) {
        saudacao.innerHTML = `Boa Tarde!!`
        img.src= './img/tarde.png'
        document.body.style.background = '#d88c33'
        
    } else {
        saudacao.innerHTML = `Boa Noite!!`
        img.src= './img/noite.png'
        document.body.style.background = '#9375aa'
    }
}

