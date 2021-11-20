console.log('hello oktenWEB');

// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
// }

// let arr=[];
// i=0;
// while (arr.length <50)
// {

//     let a= (Math.round(Math.random()*20))
//     if (a%2===0){
//         arr.push(a)
//         i++
//         }
    
    

// }
// console.log(arr);


//        b. заповнити його 50 непарними числами за допомоги циклу.
// let arr=[];
// i=0;
// while (arr.length <50)
// {

//     let a= (Math.round(Math.random()*20))
//     if (a%3===0){
//         arr.push(a)
//         i++
//         }
    
    

// }
// console.log(arr);


//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arr=[];
// i=0;
// while (arr.length <20)
// {

//     let a= (Math.random()*20)
    
//         arr.push(a)
//         i++
        
    
    

// }
// console.log(arr);

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// let arr=[];
// i=0;
// while (arr.length <20)
// {

//     let a= (Math.round(Math.random()*732))
//     if (a>=8){
//         arr.push(a)
//         i++
//         }
    
    

// }
// console.log(arr);






//  2. Вивести за допомогою console.log кожен третій елемен

// for (let index = 0; index < arr.length; index+=3) {
    
//     console.log(arr[index]);
// }

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let index = 0; index < arr.length; index+=3) {
    
//     if((arr[index])%2===0){
//         console.log(arr[index]);
//     }
        
// }

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr2=[]
// for (let index = 0; index < arr.length; index+=3) {
    
//     if((arr[index])%2===0){
//         // console.log(arr[index]);
//         arr2.push(arr[index])    
//     }
        
// }
// console.log(`Новый массив: ${arr2}`);
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]

// for (let i = 0; i < array.length; i++) {
//     if ((array[i])%2===0)
//     {
//         console.log(array[i-1])
//     }
    
// }



//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array=[100,250,50,168,120,345,188]



// let sum=0;
// for (let i = 0; i < array.length; i++) {
    
//     sum = sum+array[i];
    
// }

// console.log(sum/array.length);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array1=[1,4,5,6,3,2,77];
// let array2=[];

// for (let i = 0; i < array1.length; i++) {
//     array2.push(array1[i]*5)
    
// }

// console.log(array1)
// console.log(array2)


//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.



// let array1=[1,'4',5,'6',3,'2',77];
// let array2=[];

// for (let i = 0; i < array1.length; i++) {
    
//     if(typeof( array1[i])==='number')
//     {
//         array2.push(array1[i])
//     }
    
    
// }

// console.log(array1)
// console.log(array2)



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];


// usersWithId[0]['address']={country: 'Ukraine', city: 'Ternopil'}
// let usersWithCities=[];

// for (const data of usersWithId) {

//     for (const key in citiesWithId) {

//         if((citiesWithId[key]['user_id'])===(data.id)){
//             i=(data.id)-1
            
//               usersWithCities.push(data)
//                usersWithCities[i]['address']=citiesWithId[key]


//         }

//     }
// }


// console.log(usersWithCities)


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]




// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.


// let user =['O','l','y','a',' ','P', 'r', 'i', 'v', 'e','t'];
// let newName=' ';
// for (const key in user) {
//      {
//         // console.log(user[key])
//         newName += user[key]
        
//     }
// }
// console.log(newName)

// let user =['O','l','y','a',' ','P', 'r', 'i', 'v', 'e','t'];
// let newName=' '
// for (let i = 0; i < user.length; i++) {
//     newName+= user[i];
    
// }
// console.log(newName)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let i=0;
// let newName=' '
// let user =['O','l','y','a',' ','P', 'r', 'i', 'v', 'e','t'];
// while (i<user.length) {
//     newName+= user[i];
//     i++
// }
// console.log(newName)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let user =['O','l','y','a',' ','P', 'r', 'i', 'v', 'e','t'];

//  let newName=' '
// for (const word of user) {
//     newName+= word;
// }
// console.log(newName)
