import"./hoisted.a3c4f345.js";import"./solid.8a95f544.js";import"./dom.54c34b5f.js";document.querySelectorAll("form.searchfilter").forEach(e=>{const t=e.querySelector("[type=submit]"),r=e.querySelector("[type=search]");t&&(r&&r.addEventListener("input",()=>t.classList.remove("hidden"),{once:!0}),e.addEventListener("change",()=>{t.classList.remove("hidden")},{once:!0}))});
