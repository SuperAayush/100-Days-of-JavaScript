const count = document.querySelector(".count")
const btn=document.querySelector(".Generate")

 const generateColor = () => {

const randomColor = Math.random().toString(16).substring(2,8);
document.body.style.backgroundColor = "#" + randomColor;
count.innerHTML = "#" + randomColor;
 }

 btn.addEventListener("click", generateColor)