const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyStyle:document.querySelector("body")};t.startBtn.addEventListener("click",(function(o){if(!n)return;n=!1,e=setInterval((()=>{t.bodyStyle.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(t){clearInterval(e),n=!0}));let e=null,n=!0;
//# sourceMappingURL=01-color-switcher.8146d032.js.map
