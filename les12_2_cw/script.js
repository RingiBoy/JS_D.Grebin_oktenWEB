
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста



let wrap = document.createElement('div')
wrap.setAttribute('id','wrap')
wrap.innerText='Блоки c постами:';
document.body.appendChild(wrap)
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(someResponse =>someResponse.json())
    .then(somePosts=>{
        for (let i = 0; i < somePosts.length; i++) {
            const post = somePosts[i];
            // console.log(post)
            let divPost = document.createElement('div');
            divPost.setAttribute('id','post')
            let idPos = document.createElement('p');
            let idUser = document.createElement('p');
            let title = document.createElement('p');
            let body = document.createElement('p');
            let btn = document.createElement('button')
            //innerText:
            divPost.innerText=`Post #  ${post.id}`;
            idPos.innerText = `ID: ${post.id}`;
            idUser.innerText = `UserID: ${post.userId}`;
            title.innerText = `TITLE: ${post.title}`;
            body.innerText = `BODY: ${post.body}`;
            
            //btn:
            
            btn.innerText='download comments>>>'
            
            btn.onclick = function(e){
                
                fetch('https://jsonplaceholder.typicode.com/comments')
                .then(someDate=>someDate.json())
                .then(someComments => {
                   
                        for (const comment of someComments) {
                            if(comment.postId == post.id){
                                let commWrap = document.createElement('div');
                                commWrap.setAttribute('class','commWrap');
                                let commName = document.createElement('h5');
                                let commEmail= document.createElement('p');
                                let commBody= document.createElement('p');
                                
                                //innerText:
                                commWrap.innerText='all Comments for this post:';
                                commName.innerText=`Name:  ${comment.name}`;
                                commEmail.innerText=`email:  ${comment.email}`;
                                commBody.innerText=`Body:  ${comment.body}`;
                                

                                //append Comment to blok:

                                divPost.appendChild(commWrap);
                                commWrap.append(commName,commEmail,commBody);

                            }
                        }
                    
                })
                
            }



            //append:
            wrap.appendChild(divPost);
            divPost.append(idPos,idUser,title,body,btn);


            
        }
    })

    
    

 
    