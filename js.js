// DOMContentLoaded

// let sonya = document.getElementById("soniya");
// let newTime = function(){
//     sonya.textContent =parseFloat(sonya.textContent)-1;
// }
// window.setInterval(newTime , 1000);

// let vaqt = function(){
    
//     let nowTime = parseFloat(sonya.textContent);
//     if( nowTime > 0){
//         sonya.textContent =nowTime-1; 
//     } else{  window.clearInterval(endTime); }
//     }
//     let endTime = window.setInterval(vaqt, 1000)



// document.addEventListener("DOMContentLoaded" , function(){
//     const loader = document.querySelector(".loader")
//         setTimeout(function(){
//             loader.style.opacity ="0";
//             setTimeout(function(){
//                 loader.style.display="none";
//             },1000)
//         },1500);
// })


let ekran = document.querySelector(".ekran");
let tugma = document.querySelector("#tugma");
let reset = document.querySelector("#reset");
let led = document.querySelector("#led");
tugma.addEventListener('click', function(){
ekran.value = parseInt(ekran.value)+1;

});
reset.addEventListener('click', function(){
    ekran.value = 0; 
});

led.addEventListener('click', function(){
    ekran.classList.toggle("active")}) 