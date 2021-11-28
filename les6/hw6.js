console.log('hello oktenWEB!!!');

// // - Знайти та вивести довижину настипних стрінгових значень
// //     'hello world', 'lorem ipsum', 'javascript is cool'


// function str(text1,text2,text3){
//     console.log(text1.length, text2.length, text3.length, )
// }

// str('hello world', 'lorem ipsum', 'javascript is cool')




// - Перевести до великого регістру наступні стрінгові значення

//       'hello world', 'lorem ipsum', 'javascript is cool'


// let upCase =(a,b,c)=> {
    
   
//    let aUp=a.toUpperCase()
//    let bUp=b.toUpperCase()
//    let cUp=c.toUpperCase() 
//    console.log(aUp, bUp, cUp)
   

// }

// upCase('hello world', 'lorem ipsum', 'javascript is cool')





// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// let downCase =(a,b,c)=> {
    
   
//        let aD=a.toLowerCase()
//        let bD=b.toLowerCase()
//        let cD=c.toLowerCase() 
//        console.log(aD, bD, cD)
       
    
//     }
    
//     downCase('hello world', 'lorem ipsum', 'javascript is cool')



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// let clearStr=(a)=> {
//    let b= a.trim();
//  console.log(b)
// }


// clearStr(' dirty string   ')



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    // let str = 'Каждый охотник желает знать';
    
    // function stringToarray(str){
    //     return str.split(' ')
        
    // }


    // let arr = stringToarray(str);
    
    // console.log("🚀 ~ file: hw6.js~ arr", arr)
    // document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
    


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    // let str = 'Каждый охотник желает знать';

    // function delete_characters(str, numb){
    //     return str.slice('',numb)
    // }



    // document.writeln(delete_characters(str, 7)); // Каждый






// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";

// let insert_dash=(str)=> {
//     return str.replaceAll(' ', '-').toUpperCase()
// }
// // console.log(insert_dash(str));
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = "hTML JavaScript PHP";

// let oneWordToUp=(str)=>{
    
    
//      let word = str.charAt(0).toUpperCase();
//      return newStr= str.replaceAll(str.charAt(0), word)

//     //  console.log(word)
// }
// console.log(oneWordToUp(str))



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str = "html javaScript php";
let capitalize=(str)=>{
    let arr=str.split(' ')
    let arr2=[];
    console.log(arr)
    for (const iterator of arr) {
        const word = iterator.charAt(0).toUpperCase();
        const newStr= iterator.replaceAll(iterator.charAt(0), word)
        arr2.push(newStr)

    }
        console.log(arr2.toString().replaceAll(',', ' '))
}

console.log(capitalize(str))
document.write(capitalize(str))   //? почему андефайн 