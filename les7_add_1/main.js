console.log('hello Okten')

function User(id,name,username,email,street,suite,city,phone,zipcode,website,lat,lng,nameCompany,catchPhrase,bs){
    this.id=id;
    this.name=name;
    this.username=username;
    this.email=email;
    this.address= {
        street:street,
        suite:suite,
        city:city,
        zipcode:zipcode,
        geo: {
            lat:lat, lng:lng
        }
    };
    this.phone=phone;
    this.website=website;
    this.company={
        name:nameCompany,
        catchPhrase:catchPhrase,
        bs:bs
    };

    
}

let LenyGrekhamUser0 = new User(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556','Gwenborough','1-770-736-8031 x56442','92998-3874','hildegard.org','-37.3159','81.1496','Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
console.log('LenyGrekhamUser0:', LenyGrekhamUser0)

