import{S as w,a as k,i as c}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const g=document.querySelector(".gallery"),x=new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"buttom",captionDelay:250,overlayOpacity:.7});function f(s){const t=s.map(({webformatURL:l,largeImageURL:d,tags:e,likes:r,views:n,comments:S,downloads:q})=>`
      <li class="gallery-item">
	<a class="gallery-link" href="${d}">
		<img
			class="gallery-image"
			src="${l}"
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
    <p class="image-descr-number">${S}</p>
    </li>
    <li>
    <p class="image-descr-text">Downloads</p>
    <p class="image-descr-number">${q}</p>
    </li>
    </ul>
</li>
      `).join("");g.insertAdjacentHTML("beforeend",t),x.refresh()}const E="https://pixabay.com/api/",P="46912435-f669d0ff50839d2359d53ff0c",m=document.querySelector(".loader"),$=15;async function h(s,t=1){m.style.display="block";const{data:l}=await k(`${E}`,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,leng:"en",page:t,per_page:$}}).finally(()=>{m.style.display="none"});return l}const b=document.querySelector(".form"),i=document.querySelector(".loader"),u=document.querySelector(".end-loader"),o=document.querySelector(".btn-load-more"),y=document.querySelector(".loader-more");let a=1;const L=15;let p="";y.style.display="none";i.style.display="none";u.style.display="none";o.style.display="none";b.addEventListener("submit",v);o.addEventListener("click",O);async function v(s){if(s.preventDefault(),a=1,g.innerHTML="",i.style.display="block",o.style.display="none",u.style.display="none",p=s.target.elements.query.value,p.trim()===""){c.error({title:"Error",message:"Please enter the name of the image in the search field!"}),i.style.display="none";return}try{const t=await h(p,a);t.hits.length?(i.style.display="block",f(t.hits)):c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),t.totalHits>a*L?o.style.display="block":o.style.display="none"}catch{c.error({title:"Error",message:"Oops! Something went wrong. Try again."})}finally{i.style.display="none"}b.reset()}async function O(){a+=1;try{o.style.display="none",y.style.display="block";const s=await h(p,a);f(s.hits),y.style.display="none",s.totalHits>a*L?o.style.display="block":(o.style.display="none",c.info({title:"Hello",message:"We're sorry, but you've reached the end of search results."}),u.style.display="block");const l=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:l*2,behavior:"smooth"})}catch{c.error({title:"Error",message:"Oops! Something went wrong. Try again."})}finally{y.style.display="none"}}
//# sourceMappingURL=index.js.map
