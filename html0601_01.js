const slider=document.querySelector(".slider")
const slides=document.querySelectorAll(".slide")
const hamburger=document.querySelector(".hamburger")
const menu=document.querySelector(".menu")

let index=0
let realTotal=3
let isMove=false

hamburger.addEventListener("click", function(){
    menu.classList.toggle("on")
}) //클릭을 할 때 on을 나타났다 사라졌다를 실행.

//css에서 누구한테 on을 넣어야 할지 내가 알아서 구현하기..

function playTextUp(){
    slides.forEach((item)=>{
        item.classList.remove("on")
    }) //뭐가 될지는 잘 모르겠는데 일단 깔끔하게 다 지우고 시작하는 게 국룰.

    //on을 지웠다가 즉시 on을 붙이면 작동 오류가 발생할 가능성이 높음
    // 그것을 reflex라고 함. 분위기 전환을 한번 해줘야 무리없이 on을 켰다 지웠다 할 수 있음
    void slides[index].offsetHeight //화면의 높이가 얼마예요?/리셋해봐. 라는 아무 쓸데 없는 명령어 하나를 추가해줌.
    //분위기 전환으로 이런 명령어 하나 주고 (reset 역할)
    slides[index].classList.add("on")
    //on을 추가하라는 명령어를 줘야 오류가 날 가능성이 적음.
}
function moveSlide(){
    slider.style.transition=`all 0.9s linear`
    slider.style.transform=`
        translateX(-${index*100}vw)
        `

        playTextUp()
}

function nextSlide(){
    if(isMove){
        return
    }
    isMove=true
    index++

    // if(index>=slides.length){
    //     index=0 //초기화 시켜줘야 함!
    // }
    moveSlide()
}

slider.addEventListener("transitionend", function(){
    if(index===realTotal){
        slider.style.transition="none"
        index=0
        slider.style.transform="translateX(0)"
    }
    isMove=false
})
playTextUp()
setInterval(nextSlide, 3000)
