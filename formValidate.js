let submitForm =document.getElementById("submitForm");

let username = document.getElementById("username");
let usermail = document.getElementById("usermail");
let userpassword = document.getElementById("userpassword");

let nameValue = document.getElementById("nameValue");
let emailValue = document.getElementById("emailValue");
let passwordValue = document.getElementById("passwordValue");

let nameExp = /^[A-Z][a-z]+$/;
let mailExp = /^[a-z 0-9]+@gmail\.(com|in)$/;
let passwordExp = /^(?=.{8,})[A-Z][a-z]+[!@#$%^&*]\d{2,3}$/;

username.addEventListener("input",()=>{                           // change
    if(!nameExp.test(username.value)){
        nameValue.innerText="Invalid Username" ;
        nameValue.style.color = "brown" ;
    }
    else{
    nameValue.innerText="valid UserName" ;
    nameValue.style.color="green"
}
})


usermail.addEventListener("input",()=>{                           // change
    let value  = usermail.value.trim();
    if(!mailExp.test(value)){
        emailValue.innerText="Invalid UserEmail" ;
        emailValue.style.color = "brown" ;
    }
    else{
    emailValue.innerText="valid UserMail" ;
    emailValue.style.color="green"
}
})
 


userpassword.addEventListener("input",()=>{                         // change
    if(!passwordExp.test(userpassword.value)){
        passwordValue.innerText="Invalid UserPassword" ;
        passwordValue.style.color = "brown" ;
    }
    else{
    passwordValue.innerText="valid UserPassword" ;
    passwordValue.style.color="green"
}
})

submitForm.addEventListener("submit",(e)=>{
     e.preventDefault();  
    if(nameExp.test(username.value) && mailExp.test(usermail.value)
    && passwordExp.test(userpassword.value)){
            alert("Login Successfull");
}
else{
    alert("Please enter valid details")
}
})