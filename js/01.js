let lang = prompt("Select Lang");
let month;
let msg;
switch (lang) {
  case "fr":
    lang = "Français";
    month = prompt("Saisissez un mois.");
    switch (month) {
      case "1":
        msg = "Janvier";
        break;
      case "2":
        msg = "Février";
        break;
      case "3":
        msg = "Mars";
        break;
      case "4":
        msg = "Avril";
        break;
      case "5":
        msg = "Mai";
        break;
      case "6":
        msg = "Juin";
        break;
      case "7":
        msg = "Juillet";
        break;
      case "8":
        msg = "Août";
        break;
      case "9":
        msg = "Septembre";
        break;
      case "10":
        msg = "Octobre";
        break;
      case "11":
        msg = "Novembre";
        break;
      case "12":
        msg = "Décembre";
        break;
        default:
            lang = "?"
    }
    break;
  case "en":
    lang = "English";
    month = prompt("Enter a month.");
    switch (month) {
      case "1":
        msg = "January";
        break;
      case "2":
        msg = "February";
        break;
      case "3":
        msg = "March";
        break;
      case "4":
        msg = "April";
        break;
      case "5":
        msg = "May";
        break;
      case "6":
        msg = "June";
        break;
      case "7":
        msg = "July";
        break;
      case "8":
        msg = "August";
        break;
      case "9":
        msg = "September";
        break;
      case "10":
        msg = "October";
        break;
      case "11":
        msg = "November";
        break;
      case "12":
        msg = "December";
        break;
        default:
            lang = "?"
    }
    break;
  case "ru":
    lang = "Русский";
    month = prompt("Введите месяц.");
    switch (month) {
        case "1":
          msg = "Январь";
          break;
        case "2":
          msg = "Февраль";
          break;
        case "3":
          msg = "Март";
          break;
        case "4":
          msg = "Апрель";
          break;
        case "5":
          msg = "Май";
          break;
        case "6":
          msg = "Июнь";
          break;
        case "7":
          msg = "Июль";
          break;
        case "8":
          msg = "Август";
          break;
        case "9":
          msg = "Сентябрь";
          break;
        case "10":
          msg = "Октябрь";
          break;
        case "11":
          msg = "Ноябрь";
          break;
        case "12":
          msg = "Декабрь";
          break;
          default:
            lang = "?"
      }
    break;
  case "ua":
    lang = "Українською";
    month = prompt("Введіть місяць.");
    switch (month) {
      case "1":
        msg = "Січень";
        break;
      case "2":
        msg = "Лютий";
        break;
      case "3":
        msg = "Березень";
        break;
      case "4":
        msg = "Квітень";
        break;
      case "5":
        msg = "Травень";
        break;
      case "6":
        msg = "Червень";
        break;
      case "7":
        msg = "Липень";
        break;
      case "8":
        msg = "Серпень";
        break;
      case "9":
        msg = "Вересень";
        break;
      case "10":
        msg = "Жовтень";
        break;
      case "11":
        msg = "Листопад";
        break;
      case "12":
        msg = "Грудень";
        break;
        default:
            lang = "?"
    }
}
console.log(`${msg} will be on ${lang} language.`)