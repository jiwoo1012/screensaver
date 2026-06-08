const navLinks = document.querySelectorAll("[data-target]");
const panels = document.querySelectorAll(".panel");
const productGrid = document.querySelector("#productGrid");
const fallbackProducts = [
  {
    name: "묵향",
    subtitle: "墨香",
    story: "서늘한 새벽 공기 속, 오래된 고서가 가득한 서재에서 먹을 갈 때 퍼지는 차분하고 지적인 향.",
    notes: ["Black Ink", "Cedarwood", "Paper Musk"],
    price: "128,000원",
    tone: "#22201c"
  },
  {
    name: "와우",
    subtitle: "瓦雨",
    story: "소나기가 지나간 뒤, 눅눅하게 젖은 한옥 기와와 이끼 낀 서까래에서 피어오르는 서정적인 흙내음.",
    notes: ["Wet Tile", "Moss", "Vetiver"],
    price: "132,000원",
    tone: "#1b2426"
  },
  {
    name: "고사",
    subtitle: "古寺",
    story: "깊은 산속 고찰의 차가운 새벽안개를 뚫고 은은하게 번지는 신비로운 향의 기운.",
    notes: ["Temple Incense", "Mist", "Hinoki"],
    price: "138,000원",
    tone: "#20231d"
  }
];

function activatePanel(targetId) {
  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === targetId);
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.target === targetId);
  });

  const activePanel = document.getElementById(targetId);
  if (activePanel) {
    activePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    activatePanel(link.dataset.target);
  });
});

async function renderProducts() {
  if (!productGrid) return;

  try {
    const response = await fetch("./data/products.json");
    if (!response.ok) throw new Error("Product data request failed");
    renderProductCards(await response.json());
  } catch (error) {
    renderProductCards(fallbackProducts);
  }
}

function renderProductCards(products) {
  productGrid.innerHTML = products.map((product) => `
    <article class="product-card">
      <div class="product-art" style="--tone: ${product.tone}">
        <div class="mini-bottle"></div>
      </div>
      <div class="product-body">
        <h3>${product.name} <span>${product.subtitle}</span></h3>
        <p>${product.story}</p>
        <div class="notes">
          ${product.notes.map((note) => `<span>${note}</span>`).join("")}
        </div>
        <strong class="price">${product.price}</strong>
      </div>
    </article>
  `).join("");
}

renderProducts();
