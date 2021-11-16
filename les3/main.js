// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let arr=[0,5,4,3,2]
// let arr2=['0','5','4','3','2']
// let arr3=['0',5,'4',true,'2']

// console.log(arr, arr2, arr3);



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// arr=[]
// arr[0]=55
// arr[1]=44
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let index = 0; index < 10; index++) {
    
//     document.write('<div> text </div>')
// }

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let index = 0; index < 10; index++) {
    
//     document.write(`<div> index[${index}] </div>`)
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0;
// while (i<20) {
//     document.write('<h1> index </h1>')
//     i++;
// }



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i=0;
// while (i<20) {
//     document.write(`<h1> index${i} </h1>`)
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// array=[0,5,4,3,2,0,5,4,3,2,0,5,4,3,2]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// array=['0','5','4','3','2','0','5','4','3','2','0','5','4','3','2']

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.


// array=['0','5',-14,'3','2',true,'5','4','3',55,'0','5','4','3','2']

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// array=['0','5',-14,'3','2',true,'5','4','3',55,'0',false,'4','3','2']

// for (let index = 0; index < array.length; index++) {
//     if (typeof( array[index])==='boolean')  {
//     console.log(array[index])
    
// }}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// array=['0','5',-14,'3','2',true,'5','4','3',55,'0',false,'4','3','2']

// for (let index = 0; index < array.length; index++) {
//     if (typeof( array[index])==='number')  {
//     console.log(array[index])
    
// }}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// array=['0','5',-14,'3','2',true,'5','4','3',55,'0',false,'4','3','2']

// for (let index = 0; index < array.length; index++) {
//     if (typeof( array[index])==='string')  {
//     console.log(array[index])
    
// }}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array=[];

// array[0]=8;
// array[1]=false;
// array[2]=59;
// array[3]=55;
// array[4]=0;
// array[5]=55;
// array[6]=95;
// array[7]=0;
// array[8]='55';
// array[9]=true;


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// 00000



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write



// for (let index = 0; index < 10; index++) {
//     console.log(`шаг № ${index}`);
//     document.write(`<div> шаг № ${index}</div>`);
    
    
// }



// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let index = 0; index < 100; index++) {
//     console.log(`шаг № ${index}`);
//     document.write(`<div> шаг № ${index}</div>`);
    
    
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let index = 0; index < 100; index=index+2) {
//     console.log(`шаг № ${index}`);
//     document.write(`<div> шаг № ${index}</div>`);
    
    
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let index = 0; index < 100; index++) {
//     if (index%2===0){
    
//     console.log(`шаг № ${index}`);
//     document.write(`<div> шаг № ${index}</div>`);
//     }
    
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    

// for (let index = 0; index < 100; index++) {
//     if (index%3===0){
    
//     console.log(`шаг № ${index}`);
//     document.write(`<div> шаг № ${index}</div>`);
//     }
    
// }