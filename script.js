let userName = document.getElementById("userInput");
let PasswordInput = document.getElementById("passwordInput");
let lefteyes = document.querySelector(".lefteye");
let righteyes = document.querySelector(".righteye");

let paddingLeft = 0;

const userFocus = ()=>{
lefteyes.style.top = "84px";
lefteyes.style.left = "107px";
righteyes.style.top = "84px";
righteyes.style.left = "169px";
}

const userBlur = ()=>{
    lefteyes.style.top = "75px";
    lefteyes.style.left = "110px";
    righteyes.style.top = "75px";
    righteyes.style.left = "174px"
}

const userKeyDown = (event)=>{

    if(paddingLeft > 13){
        return false
    }
    if(event.keyCode === 8 && paddingLeft > 0){
        paddingLeft--;

    }
    else if(paddingLeft<13){
        paddingLeft++;   
    }
    
    console.log(paddingLeft);
    lefteyes.style.paddingLeft = paddingLeft;
    righteyes.style.paddingLeft = paddingLeft;

}

const passwordFocus = ()=>{
    lefteyes.style.top = "65px";
    lefteyes.style.left = "116px";
    righteyes.style.top = "62px";
    righteyes.style.left = "177px";
}

userName.addEventListener("focus" ,userFocus);
userName.addEventListener("blur" , userBlur);
userName.addEventListener("keydown" , userKeyDown);
PasswordInput.addEventListener("focus" ,passwordFocus);
PasswordInput.addEventListener("blur" , userBlur);

