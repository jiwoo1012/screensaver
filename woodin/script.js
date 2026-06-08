
// 메인메뉴 구현
let header = document.querySelector("header")
let gnb = document.querySelectorAll(".gnb > li")
let snb = document.querySelectorAll(".snb")

gnb.forEach(function(item){
    item.addEventListener("mouseover", function(){
        header.classList.add("on")
        snb.forEach(function(menu){
            menu.classList.add("on")
        })
    })

     item.addEventListener("mouseleave", function(){
        header.classList.remove("on")
        snb.forEach(function(menu){
            menu.classList.remove("on")
        })
    })
})






//사이드 메뉴 구현
let sideMenuBtn = document.querySelectorAll(".sideMenuBtn")
let sideMenu = document.querySelector(".sideMenu")
let sideMenuCloseBtn = document.querySelector(".sideMenuCloseBtn")

sideMenuBtn.forEach(function(item){
    item.addEventListener("click", function(){
        sideMenu.classList.add("on")
    })
})

sideMenuCloseBtn.addEventListener("click", function(){
    sideMenu.classList.remove("on")
})


//옵저버 구현
let items = document.querySelectorAll(".up, .down, .left, .right, .scale")

const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add("on")
        }else{
            entry.target.classList.remove("on")
        }
    })
},{
    threshold : 0.5
})

items.forEach(function(box){
    observer.observe(box)
})
