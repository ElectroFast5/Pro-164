AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (x) => {
        // Add the condition to play sound
        if(x.key=="ArrowUp"||x.key=="ArrowDown"||x.key=="ArrowLeft"||x.key=="ArrowRight") {
          var entity = document.querySelector("#sound2")
          entity.components.sound.playSound()
        }


      });
    },
  });


  