!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("iU1Pc");function i(e,n){var t=Math.random()>.3,o={position:e,delay:n};return new Promise((function(e,n){t?e(o):n(o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,t=n.delay,o=n.step,u=n.amount;t=Number(t.value),o=Number(o.value),u=Number(u.value);for(var a=1;a<=u;a+=1)i(a,t).then((function(e){var n=e.position,t=e.delay;setTimeout((function(){r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}),t)})).catch((function(e){var n=e.position,t=e.delay;setTimeout((function(){r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)})),t+=o}))}();
//# sourceMappingURL=03-promises.aca28b59.js.map