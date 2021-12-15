// при переході на який відобразити на сторінці всі товари.
// // На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// // До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар




let wrap = document.createElement('div');
wrap.innerText='КОРЗИНА'
document.body.appendChild(wrap);




let techStack = localStorage.getItem("arr");
console.log(techStack);


(function () {
    for (const itemCard of JSON.parse(techStack)) {
        
        console.log(itemCard)
        
        //card box:
        let mainBox = document.createElement('div');
        mainBox.setAttribute('class','card');
        mainBox.setAttribute('style', 'width: 10rem;')
        
        // img:
        let img =document.createElement('img');
        img.setAttribute('class','card-img-top');
        img.setAttribute('src',`${itemCard.img}`);

        //name:
        let nameItem = document.createElement('h5');
        nameItem.setAttribute('class','card-title');
        //ulgroup:
        let groupUl = document.createElement('ul');
        groupUl.setAttribute('class','list-group list-group-flush');
            //li:
        let price = document.createElement('li');
        price.setAttribute('class','list-group-item');
        let quantity = document.createElement('li');
        quantity.setAttribute('class','list-group-item');
        let button = document.createElement('button');
        button.setAttribute('class',"btn btn-danger");
        
        nameItem.innerText=itemCard.nameItem;
        price.innerText=`price: ${itemCard.price}`;
        quantity.innerText=`quantity: ${itemCard.quantity}`;
        button.innerText= 'Delete';


wrap.appendChild(mainBox);
mainBox.append(img,nameItem,groupUl);
groupUl.append(price,quantity,button)

       




    }
    
}());
