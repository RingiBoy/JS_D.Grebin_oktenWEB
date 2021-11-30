// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


let arr=[]
function RecPushClassName(startElement){
    // console.log(startElement);
    if(startElement.children.length){
        for (const iterator of startElement.children) {
            // console.log(iterator)
            if (iterator.className){
                arr.push(iterator.className)
            }
            RecPushClassName(iterator)
        }
    }
}


RecPushClassName(document.body)
console.log(arr)