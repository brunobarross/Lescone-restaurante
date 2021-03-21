function aberto() {
  var pegaData = new Date();
  var dia = pegaData.getDay(); //PEGA DATE ATUAL
  var hora = pegaData.getHours(); //PEGA HORÁRIO ATUAL
  var bolinha = document.querySelector('span.aberto'); //SELECIONA SPAN COM CLASSE ABERTP

  

    if (dia == 0) { // SE DIA FOR IGUAL A DOMINGO BOLINHA VERDE
      bolinha.style.background="#BD1B01"; // FECHADO
    } else if (hora < 7 && hora > 18) {
      bolinha.style.background="#BD1B01" // FECHADO
    } else {
      bolinha.style.background="green"; // ABERTO
    }
  
}

