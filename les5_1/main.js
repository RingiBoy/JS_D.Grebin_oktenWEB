// - Дано натуральное число n. Выведите все числа от 1 до n.
// let i=0
// let  n=8;
// while (n>=0) {
//     //?
//     n--
//     console.log(i++) 
// }

// 10,5

// 5,10
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let res=(a,b)=>{
// if (a<b){
//     for (let index = a; index <= b; index++) {
//      console.log(index)
//     }
// }
// else if (a<b)
// {
//     for (let index = a; index >= b; index--) {
//         console.log(index)
        
//     }
// }
// else console.log('a=b')
// }

// res(5,5)//?







// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]

//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]



// res=(array, i)=>{
//     xxx=array[i];
//     array[i]=array[i+1]
//     array[i+1]=xxx //?
//     return array
// }

// (res([9,8,0,4], 1) )



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

xxx=[];
res=(arr)=>{

    for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]) 
        if(!!(arr[index])){
        xxx.push(arr[index])
        }
    }
    console.log(xxx)
    let xxxLenght = xxx.length
    
    let lenght = arr.length-xxx.length;
    
        for (let k = 0; k < lenght; k++, xxxLenght++ ) {
            xxx[xxxLenght]=0;
        }
   return xxx;
}

 
array=[0,0,1,0,0,1,0,0,1,0,0,1,0,1,2,3,4,1,2,3,4,1,2,3,4];
console.log(res(array));
