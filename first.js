
var form = document.getElementById('form');

form.addEventListener("Submit", function(event) {
 event.preventDefault();

 
 var fName= event.target. fname.value;
 var lName= event.target.lname.value;
 var email= event.target.email.value;
 var password = event.target.password.value;
 var country = event.target.country.value;
 var address = event.target.address.value;


 var info ={

    fName,
    lName,
    email,
    password,
    country,
    address,

 }
console.log(info)
})
