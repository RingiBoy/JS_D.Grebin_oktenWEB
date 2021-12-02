console.log('hello OktenWEB');


// - Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"

let contentId= document.getElementById('content');
console.log(contentId);

//     -- отримує текст з блоку з id "rules"
let rulesId = document.getElementById('rules');
console.log(rulesId);

//     -- замініть текст параграфа з id 'content' на будь-який інший
contentId.innerText='javascript - Обращение к элементу по id - Stack OverflowSearch domain ru.stackoverflow'

//     -- замініть текст параграфа з id 'rules' на будь-який інший
rulesId.innerText='"Если элементу назначен специальный атрибут id, то можно получить его прямо по переменной с именем из значения id. Это поведение соответствует стандарту . Оно существует, в первую очередь, для совместимости, как осколок далёкого прошлого и не очень приветствуется, поскольку использует глобальные переменные. Браузер пытается помочь нам, смешивая пространства имён JS и DOM, но при этом возможны конфликты. Более правильной и общепринятой практикой является доступ к элементу вызовом document.getElementById("идентификатор")"'

//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
contentId.style.color ='blue';
rulesId.style.background='red';



// console.log(rulesId.classList);

//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// 1 
console.log(rulesId.classList);

// 2
let classAllByIdRules = (rulesId)=>{
    for (const iter of rulesId.classList){
        
        console.log(iter);
    }
}
classAllByIdRules(rulesId)

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementFcRules = document.getElementsByClassName('fc_rules')
// console.log(elementLi);
for (const element of elementFcRules) {
    element.style.background ='yellow';
    
}