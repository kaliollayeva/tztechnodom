(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(e){if(e.ep)return;e.ep=!0;const c=n(e);fetch(e.href,c)}})();const a=document.querySelector(".card__price"),u=parseFloat(a.textContent.replace(" $","")),f=Math.floor(u);a.textContent=`${f} $`;const p=document.querySelector(".card__list"),s=document.querySelector(".card__button--more");let o=4;const _=4;let i=[];function m(t){const r=document.createElement("li");return r.classList.add("card__item"),r.innerHTML=`
    <div class="card__sticker">
      <p>${t.category}</p>
    </div>
    <div class="card__image">
      <img src="${t.image}" alt="${t.title}">
    </div>
    <div class="card__text">
      <h2 class="card__title">${t.title}</h2>
      <p class="card__description">${t.description}</p>
    </div>
    <p class="card__price">${Math.floor(t.price)} $</p>
    <div class="card__button">
      <button class="card__button--delete">Удалить</button>
    </div>
  `,r.querySelector(".card__button--delete").addEventListener("click",()=>{r.remove(),o--,o<i.length&&s.style.display==="none"&&(s.style.display="block")}),r}function y(){i.slice(o,o+_).forEach(r=>{const n=m(r);p.appendChild(n),o++}),o>=i.length&&(s.style.display="none")}fetch("https://fakestoreapi.com/products").then(t=>t.json()).then(t=>{i=t}).catch(t=>console.error("Error fetching data:",t));s.addEventListener("click",y);
