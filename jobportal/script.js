function loginUser(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "admin@gmail.com" && password === "1234"){
    alert("Login Successful");
}
else{
    alert("Invalid Email or Password");
}

}