console.log('Hello OktenWEB');


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// a=5;
// b=6;

// function ploscha(par1, par2) {
//     let c=par1*par2
//     return c
// }
// console.log(ploscha(a,b));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const pi=3.141592653589;
// r=4;
// function PloschadCi(r,pi) {
//     let s=(r*r)*pi
//     console.log(s)
//     return s
// }

// PloschadCi(r,pi)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function t(pi,r,h) {
//     let s=2*pi*r*h
//     return s
// }

// console.log(t(3.14, 3,5))



// - створити функцію яка приймає масив та виводить кожен його елемент

// array = ['t',6673,true]

// function ar(params) {
//     for (const iterator of params) {
//         console.log(iterator)
//     }
    
// }



// ar(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let text = 'Reprehenderit minim non deserunt velit velit incididunt amet consequat.Dolore irure reprehenderit dolore ea anim consectetur labore esse nisi incididunt magna. Reprehenderit culpa do proident elit consequat id cupidatat velit deserunt aute irure veniam fugiat nisi. Minim nostrud sit aliqua fugiat excepteur nulla ad aliqua culpa. Excepteur eu cupidatat commodo ex reprehenderit. Cupidatat dolor enim eu amet sint laboris et. Ipsum consequat ullamco quis et voluptate eu ad culpa. Laboris anim proident irure ipsum velit do elit aliquip dolor sit fugiat do adipisicing.'


// function testWhith(params) {
//     let tw= `    ${params}`
//     return tw
// }

// console.log(testWhith(text))



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ul(params1,params2,params3) {
    
//     let razm = document.write(
//     `<ul>
//         <li>${params1}</li>
//         <li>${params2}</li>
//         <li>${params3}</li>
//     </ul>`)
    

// }
// ul('створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)',
// 'створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список',
// 'створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список'
// )


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ul2(str, numLi) {
//     document.write('<ul>')
//     for (let i = 0; i < numLi; i++) {
//         document.write(`<li>${str}</li>`)
//         }
//     document.write('</ul>')
   
// }

// ul2('створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)',6)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// function ul2(arr) {
//     document.write('<ul>')
  
//     for (let i = 0; i < arr.length; i++) {
        
//         document.write(`<li>${arr[i]}</li>`)
//         }
//     document.write('</ul>')
   
// }

// ul2(['555',555,false])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let objS=[{id:1, name:'Dima', age:36}, {id:2, name:'Olya', age:4}, {id:3, name:'Yura', age:6}, {id:4, name:'Serg', age:17}]

// function massObj(params) {
//     for (const obj of params) {
//         document.write('<div>')
//         console.log(obj)
//         for (const key in obj) {
//             const element = obj[key];
//             document.write(`<p>${element}</p>`)
//             }
//         document.write('</div>')
//     }

// }


// massObj(objS)