// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


// frm.onsubmit = function(e){    
//     e.preventDefault(); 
//    arr.push({model:inp1.value, type:inp2.value, volume:inp3.value}); 
  
// localStorage.setItem('arr', JSON.stringify(arr));

// }

let f1 = document.forms.f1;
console.log(f1);


let arr1=[];
f1.onsubmit = function(e){
    e.preventDefault();
    const nameItem = f1.elements.nameItem.value;
    const quantity = f1.elements.quantity.value;
    const price =f1.elements.price.value;
    const img = f1.elements.img.value;
    arr1.push({nameItem, quantity, price, img});
    console.log(arr1);
    localStorage.setItem('arr1', JSON.stringify(arr1));
    

}