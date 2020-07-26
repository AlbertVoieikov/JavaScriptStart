// task 1

// const name = "«Генератор защитного поля»";
// console.log(name);

// let price = 1000;
// console.log(price);

// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(firstMessage);

// price = 2000;
// console.log(price);

// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(secondMessage);

// _________________________________

// task 2

// const invoice = 100;
// const stock = 100;

// // Write code under this line
// const message =
//   invoice <= 100
//     ? "Заказ оформлен, с вами свяжется менеджер"
//     : "На складе недостаточно товаров!";

//console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'

// _________________________________

// task 3

// const userPassword = "jqueryismyjam";

// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;

// if (userPassword === "jqueryismyjam") {
//   message = "Добро пожаловать!";
// } else if (userPassword === null) {
//   message = "Отменено пользователем!";
// } else {
//   message = "Доступ запрещен, неверный пароль!";
// }
// console.log(message);
//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

// _________________________________

// task 4

// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_DENIED = "Недостаточно средств на счету!";

// let totalPrice = pricePerDroid * orderPieces; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (credits < totalPrice) {
//   message = ACCESS_DENIED;
// } else {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// }
// console.log(message);
// Write code under this line

//

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

// _________________________________

// task 5

// const countryName = "Ямайка";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;

// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();

//   switch (country) {
//     case CHINA:
//       price = 100;
//       break;

//     case AUSTRALIA:
//       price = 170;
//       break;

//     case INDIA:
//       price = 80;
//       break;

//     case JAMAICA:
//       price = 120;
//       break;

//     default:
//       message = NO_DELIVERY;
//   }
// }
// // console.log(message);

// if (price) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// } else if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = NO_DELIVERY;
// }
// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'
