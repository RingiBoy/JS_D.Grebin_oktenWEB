// Все робити за допомоги js.
// - створити блок,
// let div =document.createElement('div')



// // - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap')
// div.classList.add('collapse')
// div.classList.add('alpha')
// div.classList.add('beta')
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.background= 'yellow';
// div.style.color= 'blue';
// div.style.fontSize= '14px';
// div.style.fontFamily=  'Arial, Helvetica, sans-serif';
// div.innerText='Hello OktenWEB'

// // - додати цей блок в body.
// document.body.appendChild(div)
// // - клонувати його повністю, та додати клон в body.

// let divClone = div.cloneNode(true)
// divClone.innerText=`Clone:${div.innerText}`
// document.body.appendChild(divClone)



// - Є масив:
let arr= ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let menuClass = document.getElementsByClassName('menu')[0];
console.log(menuClass);

let liAdd = document.createElement('li')


i=0;
while (i<3) {
    menuClass.appendChild(liAdd);
    i++;
}

  

    //  menuClass[0].appendChild(liAdd.innerText=`${arr[i]}`);
    
    



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.