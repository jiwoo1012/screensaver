let gnb=document.querySelector(".gnb")
    let nav=document.querySelector(".nav")
    gnb.addEventListener("mouseenter", function(){
         nav.classList.add("on")
    })
    gnb.addEventListener("mouseleave", function(){
        nav.classList.remove("on")
    })
