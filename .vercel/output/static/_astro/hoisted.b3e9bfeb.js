import{c as a}from"./solid.8a95f544.js";import{g as n,a as i}from"./dom.54c34b5f.js";import"./RichTextEditor.astro_astro_type_script_index_0_lang.0f8c8dee.js";import"./hoisted.a3c4f345.js";const e=n("[name=paidStatus]",HTMLInputElement);i("[for=themeUrl]",HTMLLabelElement);const[p,s]=a([...e].find(t=>t.checked)?.value);for(const t of e)t.addEventListener("input",()=>{t.checked&&s(t.value)});
