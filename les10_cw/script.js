console.log('hello OktenWEB');


//// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let frm = document.forms.f1
// frm.onsubmit = function(e){    ////вариант -  кнопка в форме
//     e.preventDefault();
//     console.log(frm.username.value)

// }
// let btn2 = document.getElementById('testbtn')  ////вариант- за формой

// btn2.innerText = 'молучить данные полей ->'
// btn2.onclick=function(e){
//     console.log(frm.username.value,frm.age.value)
    
// }

////--------------------------------------------------

//// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let frm2 = document.forms.f2;
let numberLine = 0
let numberCell= 0;
let content = '';
let btnTabl = document.getElementById('btn2');
btnTabl.innerText = 'made a table';
btnTabl.onclick=function(){
    numberLine = (frm2.lines.value);
    numberCell= (frm2.cells.value);
    content = frm2.content.value;
    console.log(numberLine,numberCell,content);
    let tabl = document.createElement('table');
    let tbody = document.createElement('tbody');
    
    document.body.append(tabl);
    tabl.append(tbody);
    for (let i = 0; i < numberLine; i++) {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        
        for (let k = 0; k < numberCell; k++) {
            
            let td =document.createElement('td'); 
            td.innerText=`${content}`;
            tr.appendChild(td);
        }
    }
}






// (Додатковачастина для завдання)


// - Сворити масив нецензурних слів.

badWords=['Прививка', 'ЗагуглиСам','Полицейский']
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві нецензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// inputText =document.getElementById('inputText');
let btn3 = document.getElementById('btn3');
let inputText ='';
btn3.onclick=function(){
inputText =document.getElementById('inputText').value;
    
    for (const word of badWords) {
        if (inputText == word){ 
         return console.log( 'Ахтунг Ахтунг')   
        }

        else return console.log('Плохиг слов нет');
        
    }
}

// - Сворити масив нецензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку