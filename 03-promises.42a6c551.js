function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function l(e,t){const n=Math.random()>.3;let o={position:e,delay:t};return new Promise(((e,t)=>{n&&e(o),t(o)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let{elements:{delay:n,step:o,amount:r}}=t.currentTarget;n=Number(n.value),o=Number(o.value),r=Number(r.value);for(let t=1;t<=r;t+=1)l(t,n).then((({position:t,delay:n})=>{setTimeout((()=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}),n)})).catch((({position:t,delay:n})=>{setTimeout((()=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}),n)})),n+=o}));
//# sourceMappingURL=03-promises.42a6c551.js.map
