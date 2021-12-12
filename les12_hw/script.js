// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts



// let wrap = document.createElement('div')
// wrap.setAttribute('id','wrap')
// wrap.innerText='Блоки для постов:';
// document.body.appendChild(wrap)
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(someResponse =>someResponse.json())
//     .then(somePosts=>{
//         for (let i = 0; i < 10; i++) {
//             const post = somePosts[i];
//             console.log(post)
//             let divPost = document.createElement('div');
//             divPost.setAttribute('id','post')
//             let idPos = document.createElement('p');
//             let idUser = document.createElement('p');
//             let title = document.createElement('p');
//             let body = document.createElement('p');

//             //innerText:
//             divPost.innerText=`Post #  ${post.id}`;
//             idPos.innerText = `ID: ${post.id}`;
//             idUser.innerText = `UserID: ${post.userId}`;
//             title.innerText = `TITLE: ${post.title}`;
//             body.innerText = `BODY: ${post.body}`;
            
//             //append:
//             wrap.appendChild(divPost);
//             divPost.append(idPos,idUser,title,body);





//         }
//     })
    // 2.
    // Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
    // Для кожного елементу свій блок div.comment
    // Всі характеристики повинні мати свої блоки всередені div.comment
    // https://jsonplaceholder.typicode.com/comments




    let wrap = document.createElement('div')
wrap.setAttribute('id','wrap')

document.body.appendChild(wrap)
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(someResponse =>someResponse.json())
    .then(someComment=>{
        for (let i = 0; i < 10; i++) {
            const comment = someComment[i];
            console.log(comment)
            let divComment = document.createElement('div');
            divComment.setAttribute('id','comment')
            let idComment = document.createElement('p');
            let name = document.createElement('p');
            let email = document.createElement('p');
            let body = document.createElement('p');

            //innerText:
            divComment.innerText=`PostID ${comment.postId}`;
            idComment.innerText = `ID: ${comment.id}`;
            name.innerText = `name: ${comment.name}`;
            email.innerText = `TITLE: ${comment.email}`;
            body.innerText = `BODY: ${comment.body}`;
            
            //append:
            wrap.appendChild(divComment);
            divComment.append(idComment,name,email,body);





        }
    })