window.addEventListener ("load", function() {
    alert("Welcome to Glowcare!");
});

document.getElementById("year").innerHTML=new Date().getFullYear();

/*
function checkStock(id){
   let check=document.getElementById(id).textContent;
   
   if(check.includes('In Stock')){
    alert("Product is in stock!");
   }
   else{
     alert("Product is out of stock!");
   }

}*/

function checkStock1(){
  alert("Product is in Stock!");
}
function checkStock2(){
  alert("Product is in Stock!");
}
function checkStock3(){
  alert("Product is out of Stock!");
}
function checkStock4(){
  alert("Product is in Stock!");
}
function checkStock5(){
  alert("Product is out of Stock!");
}


function validateForm(){

    let username=document.forms['input[name="username"]']["username"].value;
    let email=document.forms['input[name="email"]']["email"].value;
    let password=document.forms['input[name="password"]']["password"].value;

let validEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (username == "" || email == ""  || password == "") {
                alert("All fields must be filled out!");
                return false;
           }
if(!validEmail.test(email)){
    alert("Please enter a valid email address.");
    return false;
}
alert("Form is valid!");
    return true;
}




// function validateForm() {
//   event.preventDefault(); // stop page reload

//   // show modal
//   document.getElementById("successModal").style.display = "flex";

//   // close button
//   document.getElementById("closeBtn").onclick = function () {
//     document.getElementById("successModal").style.display = "none";
//   };

//   return false;  keep page from refreshing
// }
