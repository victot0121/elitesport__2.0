const slides = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicators');
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar ul");


let index = 0;

// code for the hero section
prev.addEventListener('click', function handleClick(){
    prevSlide();
    updateIndicator();
    resetTimer();
    
});
next.addEventListener('click', function handleClick(){
    nextSlide();
    updateIndicator();
    resetTimer();
});


function circleIndicatior(){
    for(let i=0; i<slides.length; i++){
        const div=document.createElement('div');
        // div.innerHTML=i+1;
        div.setAttribute('onclick', 'indicateSlide(this)');
        div.id=i;
        if(i==0){
            div.className='active'
        }
        indicator.appendChild(div);
    }
}

circleIndicatior()

function indicateSlide(element){
   index=element.id;
   changeSlide();
   updateIndicator();
   resetTimer();
}


function updateIndicator(){
    for(let i=0; i<indicator.children.length; i++){
       indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active');
}

function  prevSlide(){
    if(index==0){
        index=slides.length-1;
    }else{
        index--;
    }
    changeSlide()
}

function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide()
    
}

function changeSlide(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active');
}
function resetTimer(){
    clearInterval(timer)
    timer = setInterval(autoPlay, 3000)
}

// auto play
function autoPlay(){
    nextSlide()
    updateIndicator();
}

let timer = setInterval(autoPlay, 5000)



hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
    console.log('active')
})

document.querySelectorAll(".na-item").forEach(n => n.addEventListener("click" ,()=> {
 hamburger.classList.remove("active")   
 nav.classList.remove("active")

}))
