(function() {
    const numLock = document.getElementById('num-lock');
    const numLockLight = document.getElementById('num-lock-light');
    const capsLock = document.getElementById('caps-lock');
    const capsLockLight = document.getElementById('caps-lock-light');
    const scrollLock = document.getElementById('scroll-lock');
    const scrollLockLight = document.getElementById('scroll-lock-light');
    
    addLightToggle(numLock, numLockLight);
    addLightToggle(capsLock, capsLockLight);
    addLightToggle(scrollLock, scrollLockLight);

    function addLightToggle(toggleElement, lightElement) {
        toggleElement.addEventListener('click', function() {
            lightElement.classList.toggle('light--lit');
        });
    };

    const f11 = document.getElementById('f11');
    f11.addEventListener('click', function toggleFullScreen() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        } else {
           if (document.cancelFullScreen) {
              document.cancelFullScreen();
           } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
           } else if (document.webkitCancelFullScreen) {
             document.webkitCancelFullScreen();
           }
        }
    });

    const f5 = document.getElementById('f5');
    f5.addEventListener('click', function() {
        location.reload()
    });
})();