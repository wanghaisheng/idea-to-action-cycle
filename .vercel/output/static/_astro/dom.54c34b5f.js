function f(e){throw typeof e=="string"?new Error(e):e}function i(e,n,o=document){const t=o.querySelector(e)??f(`Element not found: ${e}`);return t instanceof n||f(`Element is not of type ${n.name}: ${e}`),t}function a(e,n,o=document){const t=o.querySelectorAll(e);for(const m of t)m instanceof n||f(`Element is not of type ${n.name}: ${e}`);return t}export{i as a,a as g,f as r};