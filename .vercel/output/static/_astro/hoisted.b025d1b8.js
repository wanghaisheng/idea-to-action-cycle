import{c as n,f as s}from"./solid.8a95f544.js";import{g as i,a as o}from"./dom.54c34b5f.js";import"./RichTextEditor.astro_astro_type_script_index_0_lang.5f121582.js";import"./hoisted.0d42d3d6.js";const a=i("[name=paidStatus]",HTMLInputElement),t=o("[for=themeUrl]",HTMLLabelElement),[r,l]=n([...a].find(e=>e.checked)?.value);for(const e of a)e.addEventListener("input",()=>{e.checked&&l(e.value)});s(()=>{r()==="free"?t.textContent="Public repo URL":t.textContent="website URL"});
