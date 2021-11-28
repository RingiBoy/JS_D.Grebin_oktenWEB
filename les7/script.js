console.log('!!!!!!!!!!!!!!!Hello OktenWEB!!!!!!!!!!!!!!');
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;


// }


// let user1 = new User(2,'Olya','Titova','olya@titova.com','+38063255555');
// let user2 = new User(1,'Kolya','Titova','olya@titova.com','+38063255555');
// let user3 = new User(3,'Olya','Titova','olya@titova.com','+38063255555');
// let user4 = new User(4,'Olya','Titova','olya@titova.com','+38063255555');
// let user5 = new User(5,'Olya','Titova','olya@titova.com','+38063255555');
// let user6 = new User(6,'Olya','Titova','olya@titova.com','+38063255555');
// let user7 = new User(7,'Olya','Titova','olya@titova.com','+38063255555');
// let user8 = new User(8,'Olya','Titova','olya@titova.com','+38063255555');
// let user9 = new User(9,'Olya','Titova','olya@titova.com','+38063255555');
// let user10 = new User(10,'Olya','Titova','olya@titova.com','+38063255555');
// let users=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]
// console.log(users)




// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUsers = users.filter(iaiaia => ((iaiaia.id)%2=='0'));
// console.log(filterUsers)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)



// let sortssss = users.sort(function(a,b){
//     return a.id - b.id
// })

// console.log(sortssss)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client{
    constructor(id, name, surname , email, phone, order){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order = order;
    }
        // lenght()
        // {
        //     return console.log(this.order.lenght)     //? почему эта функция не отрабатывает? :(
        // }
}


let client1= new Client(2,'Olya','Titova','olya@titova.com','+38063255555',['abb', 'ttt', 'poppr', 'dddd']);
let client2 =new Client(4,'Yyy','Max','misha@gmail.com','044 555-55-66', ['abb', 'ttt', 'poppr', 'dddd','tttr','ertert','ertert','ertert2','ertert4','ertert4'])
let client3 =new Client(1,'Misha','Gootov','misha@gmail.com','044 555-55-66', ['abb', 'ttt', 'poppr', 'dddd','tttr','ertert'])
let client4 =new Client(5,'Misha','Gootov','misha@gmail.com','044 555-55-66', ['abb', 'ttt', 'poppr', 'dddd','tttr','ertert'])
let client5 =new Client(6,'Misha','Gootov','misha@gmail.com','044 555-55-66', ['abb', 'ttt', 'poppr', 'dddd','tttr','ertert'])
let client6 =new Client(7,'Misha','Gootov','misha@gmail.com','044 555-55-66', ['abb', 'ttt', 'dddd','tttr','ertert'])
let client7 =new Client(8,'Misha','Gootov','misha@gmail.com','044 555-55-66', ['abb',  'poppr','tttr','ertert'])
let client8 =new Client(9,'Misha','Gootov','misha@gmail.com','044 555-55-66', ['abb', 'ttt', 'poppr', 'dddd','tttr','ertert'])
let client9 =new Client(10,'XXX','Smol','misha@gmail.com','044 555-55-66', ['abb'])
let client10 =new Client(3,'Misha','Gootov','misha@gmail.com','044 555-55-66', ['abb', 'ttt'])
let client11 = new Client(11,'dop', 'fff', 'dop@gmail.com','+38(096) 777-44-33', ['111','222','333'])
// створити пустий масив, наповнити його 10 об'єктами Client
let clients=[client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
console.log(clients) 
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClass = clients.sort((a,b)=> {
    // length();  // почему не отрабатывает?
    return a.order.length - b.order.length
    
});


console.log(sortClass )
