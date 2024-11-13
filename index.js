import{S as k,a as x,i as p}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m=document.querySelector(".gallery"),P=new k(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"buttom",captionDelay:250,overlayOpacity:.7});function f(s){const t=s.map(({webformatURL:o,largeImageURL:c,tags:e,likes:r,views:n,comments:q,downloads:S})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${c}">
		<img
			class="gallery-image"
			src="${o}"
			alt="${e}"
			/>
	</a>
    <ul class="gallery-image-descr">
    <li>
    <p class="image-descr-text">Likes</p>
    <p class="image-descr-number">${r}</p>
    </li>
    <li>
    <p class="image-descr-text">Views</p>
    <p class="image-descr-number">${n}</p>
    </li>
    <li>
    <p class="image-descr-text">Comments</p>
    <p class="image-descr-number">${q}</p>
    </li>
    <li>
    <p class="image-descr-text">Downloads</p>
    <p class="image-descr-number">${S}</p>
    </li>
    </ul>
</li>
      `).join("");m.insertAdjacentHTML("beforeend",t),P.refresh()}const $="https://pixabay.com/api/",v="46912435-f669d0ff50839d2359d53ff0c",u=document.querySelector(".loader"),w=15;async function g(s,t=1){u.style.display="block";const{data:o}=await x(`${$}`,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,leng:"en",page:t,per_page:w}}).finally(()=>{u.style.display="none"});return o}const h=document.querySelector(".form"),i=document.querySelector(".loader"),b=document.querySelector(".end-loader"),l=document.querySelector(".btn-load-more"),d=document.querySelector(".loader-more");let a=1;const L=15;let y="";d.style.display="none";i.style.display="none";b.style.display="none";l.style.display="none";h.addEventListener("submit",E);l.addEventListener("click",M);async function E(s){if(s.preventDefault(),a=1,m.innerHTML="",i.style.display="block",l.style.display="none",y=s.target.elements.query.value,y.trim()===""){p.error({title:"Error",message:"Please enter the name of the image in the search field!"}),i.style.display="none";return}try{const t=await g(y,a);t.hits.length?(i.style.display="block",f(t.hits)):p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),t.totalHits>a*L?l.style.display="block":l.style.display="none"}catch(t){alert(t.message)}finally{i.style.display="none"}h.reset()}async function M(){a+=1;try{l.style.display="none",d.style.display="block";const s=await g(y,a);f(s.hits),d.style.display="none",s.totalHits>a*L?l.style.display="block":(l.style.display="none",p.info({title:"Hello",message:"We're sorry, but you've reached the end of search results."}),b.style.display="block");const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}catch(s){alert(s.message)}finally{d.style.display="none"}}
//# sourceMappingURL=index.js.map
