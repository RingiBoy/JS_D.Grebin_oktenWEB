// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage


// let inp1 = document.getElementsByClassName('input')[0];
// let inp2 = document.getElementsByClassName('input')[1];

// let frm = document.forms.f1
// frm.onsubmit = function(e){    
//     e.preventDefault(); 
    
  
// localStorage.setItem(inp1.value, inp2.value)

// }



// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let inp1 = document.getElementsByClassName('input')[0];
let inp2 = document.getElementsByClassName('input')[1];
let inp3 = document.getElementsByClassName('input')[2];
arr=[];
let frm = document.forms.f2
frm.onsubmit = function(e){    
    e.preventDefault(); 
   arr.push({model:inp1.value, type:inp2.value, volume:inp3.value}); 
  
localStorage.setItem('arr', JSON.stringify(arr));

}