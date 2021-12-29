const count = document.querySelector(".count")
const btn=document.querySelector(".Generate")

 const generateNumber = () => {

const randomNum = Math.floor(Math.random()*10)
count.innerHTML=randomNum;
 }

 btn.addEventListener("click", generateNumber)