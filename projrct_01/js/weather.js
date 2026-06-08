const clock = document.querySelector("#clock");
const today = document.querySelector("#today");
const weatherMood = document.querySelector("#weatherMood");
const weatherNote = document.querySelector("#weatherNote");

const moods = [
  ["맑음 22°C", "잔잔한 우디 노트가 어울리는 날입니다."],
  ["흐림 19°C", "먹빛 머스크와 젖은 종이 향이 또렷해지는 날입니다."],
  ["비 17°C", "기와에 스민 흙내음이 가장 깊게 느껴지는 날입니다."]
];

function updateTime() {
  const now = new Date();
  const timeText = new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(now);

  const dateText = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "full"
  }).format(now);

  clock.textContent = timeText;
  today.textContent = dateText;
}

function updateWeatherMood() {
  const index = new Date().getDay() % moods.length;
  weatherMood.textContent = moods[index][0];
  weatherNote.textContent = moods[index][1];
}

updateTime();
updateWeatherMood();
setInterval(updateTime, 1000);
