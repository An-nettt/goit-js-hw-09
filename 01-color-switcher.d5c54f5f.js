!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyStyle:document.querySelector("body")};t.startBtn.addEventListener("click",(function(o){if(!e)return;e=!1,n=setInterval((function(){t.bodyStyle.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stopBtn.addEventListener("click",(function(t){clearInterval(n),e=!0}));var n=null,e=!0}();
//# sourceMappingURL=01-color-switcher.d5c54f5f.js.map
