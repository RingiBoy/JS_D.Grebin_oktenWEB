console.log('hello okten')


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function sum(p1, p2) {
//     if((!!p1)&&(!!p2)){
//         const s=p1+p2;
        
//         return s
//     }
//     if (!!p1) {
//         return p1
//     } else {
//         return p2
        
//     }
// }

// console.log(sum('5 ghbdtn'))

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function sum(arr1,arr2) {
//    let arr=[];
//     for (let i = 0; i < arr1.length; i++) 
//     {
//         for (const key in arr2) 
//         {
//             if([i]=[key])
//                 {
//                 arr.push(arr1[i]+arr2[i])
//                 }
//         }

//     }
//         console.log(arr);
//     return arr
// }

  
// sum([1,2,3,4],[2,3,4,5])


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function keyObj(params) {
//    arr=[];
//     for (const objS of params) 
//         {
//             for (const key in objS) 
//                 {
//                     arr.push(key)  
                
//                 }
        
//         }
// return arr;
//     }


// console.log(keyObj([{name: 'Dima', age: 13}, {model: 'Camry'}] ))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// function znach(params) {
//     arr=[];
//     for (const obj of params) {

//        for (const key in obj) {

//            arr.push(obj[key])
//         }
//     }

//     return arr 
    
    
// }

// console.log(znach([{name: 'Dima', age: 13}, {model: 'Camry'}]))