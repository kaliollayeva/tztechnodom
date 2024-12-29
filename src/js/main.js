import "../scss/style.scss";

const cardPrice = document.querySelector(".card__price");

const price = parseFloat(cardPrice.textContent.replace(" $", ""));
const roundedPrice = Math.floor(price);
cardPrice.textContent = `${roundedPrice} $`;

const cardList = document.querySelector(".card__list");
const loadMoreButton = document.querySelector(".card__button--more");

let displayedCount = 4;
const loadCount = 4;
let products = [];

function createCard(product) {
  const card = document.createElement("li");
  card.classList.add("card__item");

  card.innerHTML = `
    <div class="card__sticker">
      <p>${product.category}</p>
    </div>
    <div class="card__image">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="card__text">
      <h2 class="card__title">${product.title}</h2>
      <p class="card__description">${product.description}</p>
    </div>
    <p class="card__price">${Math.floor(product.price)} $</p>
    <div class="card__button">
      <button class="card__button--delete">Удалить</button>
    </div>
  `;

  const deleteButton = card.querySelector(".card__button--delete");
  deleteButton.addEventListener("click", () => {
    card.remove();
    displayedCount--;
    if (
      displayedCount < products.length &&
      loadMoreButton.style.display === "none"
    ) {
      loadMoreButton.style.display = "block";
    }
  });

  return card;
}


function renderProducts() {
  const nextProducts = products.slice(
    displayedCount,
    displayedCount + loadCount
  );
  nextProducts.forEach((product) => {
    const card = createCard(product);
    cardList.appendChild(card);
    displayedCount++;
  });

  if (displayedCount >= products.length) {
    loadMoreButton.style.display = "none";
  }
}

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    products = data;
  })
  .catch((error) => console.error("Error fetching data:", error));

loadMoreButton.addEventListener("click", renderProducts);
