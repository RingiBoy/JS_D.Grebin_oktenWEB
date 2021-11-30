console.log('hello oktenWEB');


// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     -- отримує текст з параграфа з id "content"


let contentId= document.getElementById('content');


//     -- отримує текст з блоку з id "rules"
let rulesId= document.getElementById('rules');
// console.log(rulesId.innerText)

//     -- замініть текст параграфа з id 'content' на будь-який інший
contentId.innerText='-- замініть текст параграфа з id content на будь-який інший';
contentId.style.background ='red';
console.log(contentId.innerText);
//     -- замініть текст параграфа з id 'rules' на будь-який інший
rulesId.innerHTML='<b> -- замініть текст параграфа з id rules на будь-який інший</b>';

//     -- змініть кожному елементу колір фону на червоний
rulesId.style.background ='red';

//     -- змініть кожному елементу колір тексту на синій
rulesId.style.color='blue';

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rulesId.className);

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByClassName('fc_rules')
console.log(fcRules)
// fcRules[0].style.color='red';
for (const item of fcRules) {
    item.style.color = 'red'
}