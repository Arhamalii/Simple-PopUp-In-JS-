const showBtn=document.querySelector('.show')
const closeBtn=document.querySelector('.cross')
const popup =document.querySelector(".poopup-wrapperr")

showBtn.addEventListener("click",()=>{
    popup.style.display="block"
})
closeBtn.addEventListener("click",()=>{
    popup.style.display="none"
})