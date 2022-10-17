
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar ul");




hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
    console.log('active')
})

document.querySelectorAll(".na-item").forEach(n => n.addEventListener("click" ,()=> {
 hamburger.classList.remove("active")   
 nav.classList.remove("active")

}))
