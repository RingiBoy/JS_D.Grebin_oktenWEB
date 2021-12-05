console.log('hello OktenWEB');


// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let textClass = document.getElementById('text');
let bt = document.getElementsByTagName('button');

bt[0].onclick = function(){
   
    textClass.style.display = 'none';
}



// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// bt[1].onclick=function(){
//     bt[1].style.visibility='hidden'
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form1 =document.forms.form1;
form1.onsubmit = e=>{

    e.preventDefault();
    if ((+(form1.age.value))<18) {
        console.log('возраст меньше допустимого');

    }
    else console.log('добро пожаловать во взрослый мир');
    }








// - Создайте меню, которое раскрывается/сворачивается при клике
let mMenu = document.getElementById('menuMain');
let sMenu = document.getElementById('menuSub');
let btn = document.getElementsByTagName('button')[3];

// btn.onclick=function(){      \\почему такой вариант не работает:??????????????????
   
//     // if(sMenu.style.visibility='hidden'){
//     //     sMenu.style.visibility = 'visible'
//     // }

//     // else sMenu.style.visibility='hidden';
//     console.log('click');
      
// }

btn.onclick=function(){
    sMenu.classList.toggle('dispNone');
}





// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
        {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
        {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
    
    ];


let wrap = document.createElement('div');
wrap.innerHTML='Блок комментариев:'
document.body.appendChild(wrap);

for (const comment of comments) {
    console.log('comment:', comment)
    let box=document.createElement('div')
    let titleAdd = document.createElement('h5');
    let bodyAdd=document.createElement('p');
    let butt = document.createElement('button')
    
    butt.innerText='hide comment'
    titleAdd.innerText = `Заглавие: ${comment.title}`;
    bodyAdd.innerText = `комментарий: : ${comment.body}`;
    
    wrap.appendChild(box)
    box.append(titleAdd,bodyAdd,butt);
    butt.onclick=function(){                        //каким образом этот клик знает,что конктерно к этому ббоди нужно применить тогл,  ведь цикл создал кнопку и на том все???????????????????????????
        bodyAdd.classList.toggle('displNone')
        console.log(butt)
    }

    
    

}