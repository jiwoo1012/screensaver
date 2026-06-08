// const storyCards = document.querySelectorAll(".story-card");

// const storyObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     entry.target.classList.toggle("is-visible", entry.isIntersecting);
//   });
// }, { threshold: 0.35 });

// storyCards.forEach((card) => storyObserver.observe(card));

// function parallaxStory() {
//   storyCards.forEach((card) => {
//     const rect = card.getBoundingClientRect();
//     const depth = Number(card.dataset.depth || 0.15);
//     const offset = (window.innerHeight / 2 - rect.top) * depth;

//     if (card.classList.contains("is-visible")) {
//       card.style.transform = `translateY(${Math.max(-28, Math.min(28, offset))}px) scale(1)`;
//     }
//   });

//   requestAnimationFrame(parallaxStory);
// }

// requestAnimationFrame(parallaxStory);

// // 스크롤 감지 및 클래스 제어
// const observerOptions = {
//   root: null, 
//   threshold: 0.5 // 화면의 50% 정도 보일 때 트리거
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-active');
//     } else {
//       entry.target.classList.remove('is-active');
//     }
//   });
// }, observerOptions);

// // .story-card 클래스를 가진 모든 요소 감지 시작
// document.querySelectorAll('.story-card').forEach(card => {
//   observer.observe(card);
// });







// const storyCards = document.querySelectorAll(".story-card");

// const observerOptions = {
//   root: null,
//   threshold: 0.5 
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // 1. 클래스 토글
//     entry.target.classList.toggle("is-active", entry.isIntersecting);
//   });
// }, observerOptions);

// storyCards.forEach((card) => observer.observe(card));

// function updateStoryStyles() {
//   storyCards.forEach((card) => {
//     const rect = card.getBoundingClientRect();
//     const depth = Number(card.dataset.depth || 0.15);
//     const offset = (window.innerHeight / 2 - rect.top) * depth;
    
//     // 2. 패럴랙스(Y축)와 인터랙션(X축)을 동시에 적용
//     // is-active일 때는 X축 -50px, 아니면 0px
//     const xPos = card.classList.contains("is-active") ? -50 : 0;
//     const yPos = Math.max(-28, Math.min(28, offset));
//     const scale = card.classList.contains("is-active") ? 1.05 : 1;

//     card.style.transform = `translateX(${xPos}px) translateY(${yPos}px) scale(${scale})`;
//   });

//   requestAnimationFrame(updateStoryStyles);
// }

// requestAnimationFrame(updateStoryStyles);




const storyCards = document.querySelectorAll(".story-card");
let targetX = 0; // 목표 X 위치
let currentX = 0; // 현재 X 위치 (부드러운 이동을 위한 변수)

const observerOptions = { root: null, threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // 활성화 여부에 따라 목표치(targetX) 설정
    targetX = entry.isIntersecting ? -50 : 0;
    entry.target.classList.toggle("is-active", entry.isIntersecting);
  });
}, observerOptions);

storyCards.forEach((card) => observer.observe(card));

// 부드러운 움직임을 위한 lerp 함수
const lerp = (start, end, t) => start * (1 - t) + end * t;

function updateStoryStyles() {
  storyCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const depth = Number(card.dataset.depth || 0.15);
    const offset = (window.innerHeight / 2 - rect.top) * depth;
    
    // 현재 위치를 목표치까지 0.1의 속도로 따라가게 함 (부드러운 움직임의 핵심)
    currentX = lerp(currentX, targetX, 0.1);
    
    const yPos = Math.max(-28, Math.min(28, offset));
    const scale = card.classList.contains("is-active") ? 1.05 : 1;

    card.style.transform = `translateX(${currentX}px) translateY(${yPos}px) scale(${scale})`;
  });

  requestAnimationFrame(updateStoryStyles);
}

requestAnimationFrame(updateStoryStyles);