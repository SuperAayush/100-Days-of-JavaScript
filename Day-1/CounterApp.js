const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if(e.target.classList.contains("add")){
        count.innerHTML ++;   
        colors();
    }
    if(e.target.classList.contains("sub")){
        count.innerHTML--;
        colors();
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML =0;
        colors();
    }
})

function colors() {
    if(count.innerHTML<0)
    {
        count.style.color="red";
    }
    else if(count.innerHTML>0)
    {
        count.style.color="green";
    }
     else 
    {
        count.style.color="white";
    }
}