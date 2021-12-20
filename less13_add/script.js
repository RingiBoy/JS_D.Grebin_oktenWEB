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



let f1 = document.forms.f1;
console.log(f1);
function random() {
    return Math.floor(Math.random()*(100000000000-987654321)+1);
   };

let arr=[];
f1.onsubmit = function(e){
    e.preventDefault();
    const nameItem = f1.elements.nameItem.value;
    const quantity = f1.elements.quantity.value;
    const price =f1.elements.price.value;
    const img = f1.elements.img.value;
    const idCard = random();
    
    
    
   
    
    console.log(idCard)
    arr.push({nameItem, quantity, price, img, idCard});
    console.log(arr);
    localStorage.setItem('arr', JSON.stringify(arr));
}