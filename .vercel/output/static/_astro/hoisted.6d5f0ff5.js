import"./hoisted.0d42d3d6.js";import"./solid.8a95f544.js";import"./dom.54c34b5f.js";const t=document.querySelectorAll("video[autoplay]"),o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;o&&t.forEach(e=>{e.removeAttribute("autoplay"),e.setAttribute("controls","true")});