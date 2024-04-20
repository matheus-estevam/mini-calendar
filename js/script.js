const day = document.querySelector(".day");
const numberDay = document.querySelector(".number-day");
const year = document.querySelector(".year");
const month = document.querySelector(".month");

function calendar() {
  const date = new Date();
  date;
  const dayOfWeek = date.getDay();
  const monthResult = date.getMonth();

  switch (dayOfWeek) {
    case 0:
      day.innerHTML = "Domingo";
      break;
    case 1:
      day.innerHTML = "Segunda-Feira";
      break;
    case 2:
      day.innerHTML = "Terça-Feira";
      break;
    case 3:
      day.innerHTML = "Quarta-Feira";
      break;
    case 4:
      day.innerHTML = "Quinta-Feira";
      break;
    case 5:
      day.innerHTML = "Sexta-Feira";
      break;
    case 6:
      day.innerHTML = "Sábado";
      break;

    default:
      day.innerHTML = "Erro no Dia da Semana";
      break;
  }

  switch (monthResult) {
    case 0:
      month.innerHTML = "Janeiro";
      break;
    case 1:
      month.innerHTML = "Fevereiro";
      break;
    case 2:
      month.innerHTML = "Março";
      break;
    case 3:
      month.innerHTML = "Abril";
      break;
    case 4:
      month.innerHTML = "Maio";
      break;
    case 5:
      month.innerHTML = "Junho";
      break;
    case 6:
      month.innerHTML = "Julho";
      break;
    case 7:
      month.innerHTML = "Agosto";
      break;
    case 8:
      month.innerHTML = "Setembro";
      break;
    case 9:
      month.innerHTML = "Outubro";
      break;
    case 10:
      month.innerHTML = "Novembro";
      break;
    case 11:
      month.innerHTML = "Dezembro";
      break;
    default:
      month.innerHTML = "Erro no nome do Mês do ano";
      break;
  }

  numberDay.innerHTML = date.getDate();
  year.innerHTML = date.getFullYear();
}

calendar();
