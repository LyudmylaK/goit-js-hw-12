import{S as q,a as S,i as y}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const $=document.querySelector(".gallery"),k=new q(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"buttom",captionDelay:250,overlayOpacity:.7});function u(r){const t=r.map(({webformatURL:a,largeImageURL:c,tags:e,likes:s,views:i,comments:b,downloads:L})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${c}">
		<img
			class="gallery-image"
			src="${a}"
			alt="${e}"
			/>
	</a>
    <ul class="gallery-image-descr">
    <li>
    <p class="image-descr-text">Likes</p>
    <p class="image-descr-number">${s}</p>
    </li>
    <li>
    <p class="image-descr-text">Views</p>
    <p class="image-descr-number">${i}</p>
    </li>
    <li>
    <p class="image-descr-text">Comments</p>
    <p class="image-descr-number">${b}</p>
    </li>
    <li>
    <p class="image-descr-text">Downloads</p>
    <p class="image-descr-number">${L}</p>
    </li>
    </ul>
</li>
      `).join("");$.insertAdjacentHTML("beforeend",t),k.refresh()}const x="https://pixabay.com/api/",P="46912435-f669d0ff50839d2359d53ff0c",p=document.querySelector(".loader"),w=15;async function m(r,t=1){p.style.display="block";const{data:a}=await S(`${x}`,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,leng:"en",page:t,per_page:w}}).finally(()=>{p.style.display="none"});return a}const f=document.querySelector(".form"),v=document.querySelector(".gallery"),n=document.querySelector(".loader"),g=document.querySelector(".end-loader"),o=document.querySelector(".btn-load-more");let l=1;const h=15;let d="";n.style.display="none";g.style.display="none";o.style.display="none";f.addEventListener("submit",E);o.addEventListener("click",O);async function E(r){if(r.preventDefault(),l=1,v.innerHTML="",n.style.display="block",o.style.display="block",d=r.target.elements.query.value,!d.trim()===""){y.error({title:"Error",message:"Please enter the name of the image in the search field!"});return}try{const t=await m(d,l);console.log(t),t.hits.length?u(t.hits):y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),t.totalHits>l*h?o.style.display="block":(o.style.display="none",y.show({class:"toast",position:"topRight",messageColor:"white",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t)}finally{n.style.display="none"}f.reset()}async function O(){l+=1,n.style.display="block";try{const r=await m(d,l);u(r.hits),r.totalHits>l*h?o.style.display="block":(o.style.display="none",g.style.display="block")}catch(r){console.log(r.message)}finally{n.style.display="none"}}
//# sourceMappingURL=index.js.map
