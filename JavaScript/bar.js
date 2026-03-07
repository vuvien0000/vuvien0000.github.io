function showTime() {
    const timeNow = new Date().toLocaleTimeString("en-US");
    document.getElementById('clock2').textContent = timeNow;
}
setInterval(showTime, 1000);
//
var s = 1 ;
function more2() {
	if (s == 1) {
const apps = document.getElementById("container") ;
        apps.style.animation = "shrink 0.5s" ;
        apps.style.scale = 0.9 ;
        const panel = document.getElementById("more-apps") ;
        panel.style.opacity = 1 ;
        panel.style.zIndex = 10 ;
        panel.style.animation = "left 0.5s" ;
        s = 0 ;
	} else {
const apps = document.getElementById("container") ;
        apps.style.animation = "zoom 0.5s" ;
        apps.style.scale = 1 ;
        const panel = document.getElementById("more-apps") ;
        panel.style.opacity = 0 ;
        panel.style.animation = "right 0.5s" ;
setTimeout(() => {
  panel.style.zIndex = -10 ;
s = 1 ;
}, 250);
	}
}
