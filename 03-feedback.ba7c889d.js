!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var o=r("1WSnx"),n=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]'),u="feedback-form-state";n.addEventListener("input",(0,o.throttle)((function(e){e.preventDefault();var t={email:l.value,message:i.value};localStorage.setItem(u,JSON.stringify(t))}),500)),n.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:l.value,message:i.value}),n.reset(),localStorage.removeItem(u)}));var d=localStorage.getItem("email");d&&(l.value=d);var s=localStorage.getItem("message");s&&(i.value=s)}();
//# sourceMappingURL=03-feedback.ba7c889d.js.map
