function i(l,e=50){let t=0;return(...r)=>{let s=new Date().getTime();if(!(s-t<e))return t=s,l(...r)}}function c(l){try{return parseInt(l)}catch{return}}class o extends HTMLElement{connectedCallback(){this.enhance(),this.update(),window.addEventListener("hashchange",()=>this.onHashChange()),this.mainScroller?.addEventListener("scroll",i(()=>this.onScroll())),this.next?.addEventListener("click",()=>{this.selected=(this.selected+1)%this.scrollerItems.length,this.scrollToItem(this.selected)}),this.previous?.addEventListener("click",()=>{this.selected===0?this.selected=this.scrollerItems.length-1:this.selected-=1,this.scrollToItem(this.selected)})}static get observedAttributes(){return["selected"]}attributeChangedCallback(e,t,r){e!=="selected"||t===r||this.update()}onHashChange(){this.selected=this.scrollerItems.findIndex(e=>e.matches(window.location.hash))}onScroll(){this.selected=this.calcSelected()}get selected(){return c(this.getAttribute("selected"))||0}set selected(e){this.setAttribute("selected",String(e))}get next(){return this.querySelector("#gallery-next")}get previous(){return this.querySelector("#gallery-prev")}get mainScroller(){return this.querySelector("#gallery")}get scrollerItems(){return Array.from(this.mainScroller?.querySelectorAll("li")||[])}get navScroller(){return this.querySelector("nav")}get navScrollerItems(){return Array.from(this.navScroller?.querySelectorAll('a[href^="#"]')||[])}get scrollIndicator(){return this.querySelector("nav > div")}get scrollIndicatorPills(){return Array.from(this.scrollIndicator?.querySelectorAll("div")||[])}update(){for(let e=0;e<this.scrollerItems.length;e++){const t=e===this.selected;this.navScrollerItems[e].setAttribute("aria-current",String(t)),this.scrollIndicatorPills[e].setAttribute("aria-current",String(t))}if(this.navScroller){const e=this.navScrollerItems[this.selected];this.navScroller.scrollTop>e.offsetTop?this.navScroller.scrollTo({top:e.offsetTop,behavior:"smooth"}):this.navScroller.offsetHeight<e.offsetTop+e.offsetHeight&&this.navScroller.scrollTo({top:e.offsetTop+e.offsetHeight-this.navScroller.offsetHeight,behavior:"smooth"})}}enhance(){this.navScrollerItems.forEach((e,t)=>{e.addEventListener("click",r=>{if(!this.mainScroller||!this.navScroller)return;const s=new URL(e.href);this.mainScroller.querySelector(s.hash)&&(r.preventDefault(),this.scrollToItem(t),this.selected=t)})})}scrollToItem(e){if(this.mainScroller){const t=this.scrollerItems[e];this.mainScroller.scrollLeft=t.offsetLeft}}calcSelected(){if(!this.mainScroller||!this.scrollerItems?.length)return 0;const e=this.mainScroller.getBoundingClientRect();return this.scrollerItems.findIndex(t=>Math.abs(t.getBoundingClientRect().left-e.left)<e.width/2)}}customElements.define("image-gallery",o);
