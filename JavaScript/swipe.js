
  var container = document.querySelector("body");

  container.addEventListener("touchstart", startTouch, false);
  container.addEventListener("touchmove", moveTouch, false);

  // Swipe Up / Down / Left / Right
  var initialX = null;
  var initialY = null;

  function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

  function moveTouch(e) {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        // swiped left
const apps = document.getElementById("container") ;
        apps.style.animation = "shrink 0.5s" ;
        apps.style.scale = 0.9 ;
        const panel = document.getElementById("more-apps") ;
        panel.style.opacity = 1 ;
        panel.style.zIndex = 10 ;
        panel.style.animation = "left 0.5s" ;
        s = 0;
        
      } else {
        // swiped right
        const apps = document.getElementById("container") ;
        apps.style.animation = "zoom 0.5s" ;
        apps.style.scale = 1 ;
        const panel = document.getElementById("more-apps") ;
        panel.style.opacity = 0 ;
        setTimeout(back, 250);
        panel.style.animation = "right 0.5s" ;
        function back() {
        	s = 1;
panel.style.zIndex = -10 ;
        }
      }  
    } else {
      // sliding vertically
      if (diffY > 0) {
        // swiped up
        console.log("swiped up");
      } else {
        // swiped down
        console.log("swiped down");
      }  
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
  };

	</script>
	<div id="more-apps" class="more-apps">
		<div onclick="close2()" class="back1">
		<script>
			function close2() {
        const apps = document.getElementById("container") ;
        apps.style.animation = "zoom 0.5s" ;
        apps.style.scale = 1 ;
        const panel = document.getElementById("more-apps") ;
        panel.style.opacity = 0 ;
        panel.style.animation = "right 0.5s" ;
setTimeout(() => {
  panel.style.zIndex = -10 ;
}, 250);
			}
