function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");l.addEventListener("submit",(function(t){t.preventDefault();const n=Number(l.elements.delay.value),o=Number(l.elements.step.value),i=Number(l.elements.amount.value);let u=n;for(let t=1;t<=i;t+=1){s(t,u).then((({position:t,nextDelay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,nextDelay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),u+=o}}));const s=(e,t)=>new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,nextDelay:t}):o({position:e,nextDelay:t})}),t)}));
//# sourceMappingURL=03-promises.b542aa9b.js.map
