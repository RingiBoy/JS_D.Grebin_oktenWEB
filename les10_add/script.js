// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина




// document.onclick =function(e){
//     console.log('class list:', e.target.classList)
//     console.log('id:', e.target.id)
//     console.log('teg: ', e.target.localName)
//     console.log(e)
//     console.log('Высота блока:' , e.target.scrollHeight)
//     console.log('Ширина блока:' , e.target.scrollWidth)
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 18, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


//Инициализация:
let checkBoxFalseStatus = document.getElementById('check1');
let checkBoxOld29 = document.getElementById('check2');
let checkBoxWhithKiev = document.getElementById('check3');
let box = document.getElementById('box')
let arr = [];




let frm = document.forms.f1
frm.onsubmit = function(e){    
    e.preventDefault();             //отключение Экшина при нажатии сабмита
    
    if (checkBoxFalseStatus.checked){
        usersWithAddress= usersWithAddress.filter(user=>user.status);
    }
    
    
   
    
    if (checkBoxOld29.checked){
       
        usersWithAddress = usersWithAddress.filter(user=>user.age>=29)
    }
    
    if(checkBoxWhithKiev.checked){
        usersWithAddress = usersWithAddress.filter(user=>user.address.city === 'Kiev')
    }
    
                      //первый чекбокс нажат
            
            // let falseFiltr = usersWithAddress.filter(user=>user.status === status && user.age>=age29 && user.address.city === city)
          
            console.log('usersWithAddress:', usersWithAddress)
        

            for (const iterator of usersWithAddress) {            //выводим инфо с объектов
                let div = document.createElement('div');
                let h4= document.createElement('H4');
                let nameP = document.createElement('p');
                let ageP = document.createElement('p');
                let cityP = document.createElement('p');
                div.setAttribute('class', 'userBox');
                h4.innerText =`id: ${iterator.id}`;
                nameP.innerText = `name: ${iterator.name}`;
                ageP.innerText = `name: ${iterator.age}`;
                cityP.innerText = `city: ${iterator.address.city}`;
                box.appendChild(div);
                div.append(h4,nameP,ageP,cityP);
                console.log(iterator.address.city);
                
            
        
          





}

//




    // else if ((checkBoxFalseStatus.checked)&&(checkBoxOld29.checked)){
    //     let falseFiltr = (usersWithAddress.filter(user=>user.status));
    //     let ages = falseFiltr.filter(user=>user.age>=29)
    //         console.log('agessss:', ages)
    // }
    


}


// checkBoxOld29.onclick=function(){
//     if(this.checked){
//         let age29= usersWithAddress.filter(user=>user.age>=29)
//         console.log('age29xxx:', age29)
        
//     }
// }


// checkBoxWhithKiev.onclick = function(){
//     if(this.checked){
        
//         let onlyKiev = usersWithAddress.filter(item=>item.address.city == 'Kyiv')
//         console.log('onlyKiev:', onlyKiev)

//     }
// }





