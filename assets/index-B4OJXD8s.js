(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(t){if(t.ep)return;t.ep=!0;const c=i(t);fetch(t.href,c)}})();const a=document.querySelector(".card__price"),f=parseFloat(a.textContent.replace(" $","")),p=Math.floor(f);a.textContent=`${p} $`;const _=document.querySelector(".card__list"),n=document.querySelector(".card__button--more");let o=4;const y=4;let s=[];function m(e){const r=document.createElement("li");return r.classList.add("card__item"),r.innerHTML=`
    <div class="card__sticker">
      <p>${e.category}</p>
    </div>
    <div class="card__image">
      <img src="${e.image}" alt="${e.title}">
    </div>
    <div class="card__text">
      <h2 class="card__title">${e.title}</h2>
      <p class="card__description">${e.description}</p>
    </div>
    <p class="card__price">${Math.floor(e.price)} $</p>
    <div class="card__button">
      <button class="card__button--delete">Удалить</button>
    </div>
  `,r.querySelector(".card__button--delete").addEventListener("click",()=>{r.remove(),o--,o<s.length&&n.style.display==="none"&&(n.style.display="block")}),r}function u(){s.slice(o,o+y).forEach(r=>{const i=m(r);_.appendChild(i),o++}),o>=s.length&&(n.style.display="none")}const h=document.querySelectorAll(".card__item");h.forEach(e=>{e.querySelector(".card__button--delete").addEventListener("click",()=>{e.remove(),o--,o<s.length&&n.style.display==="none"&&(n.style.display="block")})});fetch("https://fakestoreapi.com/products").then(e=>e.json()).then(e=>{s=e,u()}).catch(e=>console.error("Error fetching data:",e));n.addEventListener("click",u);
