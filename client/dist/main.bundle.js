document.querySelector("#main").innerHTML="",new Editor,"serviceWorker"in navigator?new Workbox("./src-sw.js").register():console.error("Service workers are not supported in this browser.");