// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let s = (a,b)=> a*b


// s(10,2)  //?






// - створити функцію яка обчислює та повертає площу кола

// let s=(r,pi)=> (r*r)*pi


// s(4, 3.14) //?


// - створити функцію яка обчислює та повертає площу циліндру

// let s=(pi,r,h)=>2*pi*r*h


// s(3.14, 4, 5)

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr=(param)=>{
//     for (const iterator of param) { 
//         console.log(iterator)
//     }
// }

// arr([5,3,6,'5555', true, 4]) //?

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let str=(text)=> `   ${text}`


// str('text is zadaniya')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ull=(t1,t2,t3)=> {document.write(
//     `<ul>
//             <li>${t1}</li>
//             <li>${t2}</li>
//             <li>${t3}</li>
//     </ul>`
// )}


// ull('text111111', 'text222222','text3333333')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ul2=(str,nimber)=>{
//     document.write('<ul>')
//     for (let i = 0; i < nimber; i++) {
//         document.write(`<li>${str}</li>`)
        
//     }
//     document.write('</ul>')
// }


// ul2('text for lesson5',6)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// arr=[343,433,'text',true];


// let a=(b) => {
//     document.write('<ul>')
  
//         for (let i = 0; i < arr.length; i++) {
            
//             document.write(`<li>${arr[i]}</li>`)
//             }
//         document.write('</ul>')
// }

// console.log(a(arr));




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let objS=[{id:1, name:'Dima', age:36}, {id:2, name:'Olya', age:4}, {id:3, name:'Yura', age:6}, {id:4, name:'Serg', age:17}]
// let massObj=(params)=>{

//     for (const obj of params) {
//                 document.write('<div>')
                
//                 for (const key in obj) {
//                     const element = obj[key];
//                     document.write(`<p>${element}</p>`)
//                     }
//                 document.write('</div>')
//             }

// }


// massObj(objS)