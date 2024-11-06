import{i as u,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",f="46912435-f669d0ff50839d2359d53ff0c",n=document.querySelector(".form"),d=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";n.addEventListener("submit",g);function g(o){o.preventDefault();const{query:s}=o.target.elements;if(s.value===""){alert("Ooooops!");return}l.style.display="block",y(s.value).then(r=>{l.style.display="none",r.hits.length||u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),d.innerHTML=h(r.hits),new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"buttom",captionDelay:250,overlayOpacity:.7}).refresh(),n.reset()}).catch(r=>{console.log(r)})}function y(o){const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,leng:"en"});return fetch(`${p}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function h(o){return o.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:i,downloads:c})=>`
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
    <p class="image-descr-number">${i}</p>
    </li>
    <li>
    <p class="image-descr-text">Downloads</p>
    <p class="image-descr-number">${c}</p>
    </li>
    </ul>
</li>
      `).join("")}
//# sourceMappingURL=index.js.map
