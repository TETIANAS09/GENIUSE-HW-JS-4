//---1---
//Перепишіть функцію, використовуючи '?' або '||'
/*
/function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Батьки дозволили?');
}
}
*/

//RESULT//
/*
let age = prompt("Скільки вам років?", 18);
let checkAge =
  age > 18
    ? function () {
        return true;
      }
    : function () {
        return confirm("Батьки дозволили?");
      };
checkAge(18);
*/
//---2---
//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

//RESULT//
/*
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
let result = min(5, 7);
console.log(result);
*/
//---3---
//Перепишіть з використанням стрілкових функцій
//Замініть Функціональні Вирази на стрілкові функції у коді нижче:
/*
function ask(question, yes, no) {
if (confirm(question)) yes();
else no();
}
ask(
"Ви згодні?"
,
function() { alert("Ви погодились."); },
function() { alert("Ви скасували виконання."); }
);
*/

//RESULT//
/*
const ask = (question, yes, no) => (confirm(question) ? yes() : no());
ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання")
);
*/
