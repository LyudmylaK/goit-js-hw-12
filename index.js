import{i as n,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(i){return i.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:o,downloads:m})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${r}">
		<img 
			class="gallery-image" 
			src="${s}" 
			alt="${a}" 
			/>
	</a>
    <ul class="gallery-image-descr">
    <li>
    <p class="image-descr-text">Likes</p>
    <p class="image-descr-number">${e}</p>
    </li>
    <li>
    <p class="image-descr-text">Views</p>
    <p class="image-descr-number">${t}</p>
    </li>
    <li>
    <p class="image-descr-text">Comments</p>
    <p class="image-descr-number">${o}</p>
    </li>
    <li>
    <p class="image-descr-text">Downloads</p>
    <p class="image-descr-number">${m}</p>
    </li>
    </ul>
</li>
      `).join("")}const d="https://pixabay.com/api/",g="46912435-f669d0ff50839d2359d53ff0c";function y(i){const s=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,leng:"en"});return fetch(`${d}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}const u=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";u.addEventListener("submit",h);function h(i){i.preventDefault();const{query:s}=i.target.elements;if(s.value===""){n.error({title:"Error",message:"Please enter the name of the image in the search field!"});return}c.innerHTML="",l.style.display="block",y(s.value).then(r=>{l.style.display="none",r.hits.length||n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=f(r.hits),new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"buttom",captionDelay:250,overlayOpacity:.7}).refresh(),u.reset()}).catch(r=>{console.log(r)})}
//# sourceMappingURL=index.js.map
