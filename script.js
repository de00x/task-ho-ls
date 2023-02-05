// Сообразительность //

// 1 task - 70 Говорят правду
// 2 task - 11, 5, 8
//          10, 7, 3
//           4, 6, 9
// 3 task - Максимально эффективный способ - это сбросить материал с середины,
// тем самым мы сразу отсеиваем половину, если он разбивается,
// и так далее продолжаем отсеивать половины, пока не достигнем точного результата.
// 4 task - Всего 60 пирожков

// Сообразительность //

// const firstTask = (cities) => {
//   const lastCity = cities.length - 1;
//   const addPoint = `${cities[lastCity]}.`;
//   cities[lastCity] = addPoint;

//   return cities.toString();
// };

// console.log(
//   "firstTask =>",
//   firstTask(["Москва", "Санкт-Петербург", "Воронеж"])
// );

// const secondTask = (float) => {
//   const lastSymbol = float % 10;
//   let result = 0;
//   if (lastSymbol > 5) {
//     if (lastSymbol - 5 > 2.5) result = float - lastSymbol + 10;
//     if (lastSymbol - 5 < 2.5) result = float - lastSymbol + 5;
//   }
//   if (lastSymbol < 5) {
//     if (lastSymbol > 2.5) result = float - lastSymbol + 5;
//     if (lastSymbol < 2.5) result = float - lastSymbol;
//   }
//   return result;
// };

// console.log("secondTask =>", secondTask(1077));

// const thirdTask = (int) => {
//   const intToString = int.toString();
//   const lastSymbol = int % 10;
//   const lastTwoSymbols = Number(intToString.substring(intToString.length - 2));
//   let result = "";

//   if (int < 105) {
//     if (lastSymbol === 1) result = `${int} Компьютер`;
//     if (lastSymbol === 2 || lastSymbol === 3 || lastSymbol === 4) {
//       result = `${int} Компьютера`;
//     }
//   }
//   if (int > 105) {
//     if (intToString === "01") result = `${int} Компьютер`;
//     if (lastSymbol === 2 || lastSymbol === 3 || lastSymbol === 4) {
//       result = `${int} Компьютеров`;
//     }
//   }

//   if (lastTwoSymbols > 4 && lastTwoSymbols < 21) result = `${int} Компьютеров`;
//   if (lastTwoSymbols === 11) result = `${int} Компьютеров`;
//   if (lastSymbol === 0) result = `${int} Компьютеров`;
//   if (lastSymbol > 4) result = `${int} Компьютеров`;

//   return result;
// };

// console.log("thirdTask =>", thirdTask(11));

// const fourthTask = (isSimple) => {
//   if (isSimple < 2) return "Число должно быть больше 1";
//   if (isSimple === 2) return "Простое число";

//   let i = 2;
//   const limit = Math.sqrt(isSimple);

//   while (i <= limit) {
//     if (isSimple % i === 0) return "Составное число";
//     i += 1;
//   }

//   return "Простое число";
// };

// console.log("fourthTask =>", fourthTask(13));

// const fifthTask = (array1, array2) => {
//   const duplicatesFirstArray = array1.filter((number, index, numbers) => {
//     return numbers.indexOf(number) !== index;
//   });
//   const duplicatesSecondArray = array2.filter((number, index, numbers) => {
//     return numbers.indexOf(number) !== index;
//   });

//   const sharedArray = duplicatesFirstArray.concat(duplicatesSecondArray)
//   const result = sharedArray.filter((number, index, numbers) => {
//     return numbers.indexOf(number) !== index;
//   });
//   const notRepeat = result.filter((number, index, numbers) => {
//     return numbers.indexOf(number) === index;
//   });

//   return notRepeat.reverse()
// };

// console.log(
//   "fifthTask =>",
//   fifthTask(
//     [7, 17, 1, 9, 1, 17, 56, 56, 23],
//     [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
//   )
// );

// const sixthTask = (value) => {
//   let table = "\n";
//   const maxLength = (value * value).toString().length;

//   for (let i = 0; i <= value; i++) {
//     let tableString = "";

//     for (let j = 0; j <= value; j++) {
//       let product = i * j;
//       let padding = " ".repeat(maxLength - product.toString().length + 1);
//       tableString += padding + (product || " ");
//     }

//     table += tableString + "\n";
//   }

//   console.log(table);
// };

// sixthTask(5);
