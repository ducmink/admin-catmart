

// =================popupSP===================

const popUpBtn = document.querySelectorAll(".popup-btn");
console.log(popUpBtn);
const niga = document.querySelector(".bg-black");
const popUpContent = document.querySelector(".overlay");
const closeBtn = document.querySelector(".iconX");
popUpBtn.forEach((button) =>{
    button.addEventListener("click", ()=>{
        event.preventDefault()
        niga.style.display = niga.style.display === "block" ? "none" :"block";
        popUpContent.style.display = popUpContent.style.display === "flex" ? "none" :"flex";
    });

})
niga.addEventListener("click",()=>
{
    niga.style.display = niga.style.display === "none" ? "block" :"none";
    popUpContent.style.display = popUpContent.style.display === "none" ? "flex" :"none";
})
closeBtn.addEventListener("click",()=>
{
    niga.style.display = niga.style.display === "none" ? "block" :"none";
    popUpContent.style.display = popUpContent.style.display === "none" ? "flex" :"none";
})