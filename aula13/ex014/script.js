function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12){
    // BOM DIA!
    img.src = 'img/manha.png'
    document.body.style.background = '#8BCBF8'
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'img/tarde.png'
    document.body.style.background = '#C37F50'
  } else {
    // BOA NOITE!
    img.src = 'img/noite.png'
    document.body.style.background = '#2B3F48'
  }


}
