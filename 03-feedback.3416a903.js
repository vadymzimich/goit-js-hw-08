var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=a);var r=a("kEUo3");const l=document.querySelector(".feedback-form"),n=document.querySelector('input[name="email"]'),s=document.querySelector('textarea[name="message"]');l.addEventListener("input",(0,r.throttle)((e=>{e.preventDefault();const t={email:n.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),l.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:n.value,message:s.value}),l.reset(),localStorage.removeItem("feedback-form-state")}));const i=localStorage.getItem("email");i&&(n.value=i);const u=localStorage.getItem("message");u&&(s.value=u);
//# sourceMappingURL=03-feedback.3416a903.js.map