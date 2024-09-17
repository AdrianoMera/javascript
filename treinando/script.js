function carregar() {
  var msg = document.getElementById("msg")
  var img = document.getElementById("img")
  var data = new Date()
  var hora = data.getHours()

  if (hora >= 0 && hora < 12) {
    // bom dia
    msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
    img.src = "img/manha.png"
    document.body.style.background = "#8BCBF8"
  } else if (hora >= 12 && hora < 18) {
    // boa tarde
    msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
    img.src = "img/tarde.png"
    document.body.style.background = "#C37F50"
  } else {
    // boa noite
    msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
    img.src = "img/noite.png"
    document.body.style.background = "#2B3F48"
  }
}
