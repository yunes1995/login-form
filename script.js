let userName = document.getElementById("userInput");
let PasswordInput = document.getElementById("passwordInput");
let lefteyes = document.querySelector(".lefteye");
let righteyes = document.querySelector(".righteye");

// let leftEyeTop = 75 ; 
// let leftEyeLeft = 110; 
// let leftEyepaddingLeft = 0; 
// let leftEyepaddingTop = 0; 

// let rightEyeTop = 75 ; 
// let rightEyeLeft = 174; 
// let rightEyepaddingLeft = 0; 
// let rightEyepaddingTop = 0; 

let paddingLeft = 0;

const userFocus = ()=>{
lefteyes.style.top = "84px";
lefteyes.style.left = "107px";
righteyes.style.top = "84px";
righteyes.style.left = "169px";
}

// const userBlur = ()=>{
//     lefteyes.style.top = "75px";
//     lefteyes.style.left = "110px";
//     righteyes.style.top = "75px";
//     righteyes.style.left = "174px"
// }

const userKeyDown = ()=>{
paddingLeft++;
console.log(paddingLeft);
lefteyes.style.paddingLeft = paddingLeft;
}


const passwordFocus = ()=>{
    lefteyes.style.top = "65px";
    lefteyes.style.left = "116px";
    righteyes.style.top = "62px";
    righteyes.style.left = "177px";
}

const passwordBlur = ()=>{
console.log("passwordBlur");
}

userName.addEventListener("focus" ,userFocus);
// userName.addEventListener("blur" , userBlur);
userName.addEventListener("keypress" , userKeyDown);

PasswordInput.addEventListener("focus" ,passwordFocus);
// PasswordInput.addEventListener("blur" , userBlur);













// userName.addEventListener("focus", ()=>{
//  lefteyes.style.paddingLeft = "110px";
// //   lefteyes.style.right = "84px";
// });
// userName.addEventListener("blur", ()=>{
  
// });

// // let userName = document.getElementById();
