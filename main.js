const Projects  = {
    delay: 130000, // Automatically  
    container: null,  
    slides: [], 
    current: 0, 
    timer: null,
    start: function () {
      Projects.container = document.getElementById("projects");      
      const all = Projects.container.getElementsByTagName("img");
      if (all.length>0) {
        for (let slide of all) {
          Projects.slides.push({
            src : slide.src, 
          });
        }
        document.getElementById("left").addEventListener("click", Projects.prev);
        document.getElementById("right").addEventListener("click", Projects.next);
        Projects.draw();
      }
    },  
    draw: function () {
      var next = document.createElement("img");
      next.src = Projects.slides[Projects.current].src;
      next.classList.add("temp");
      Projects.container.innerHTML = "";
      Projects.container.appendChild(next);
      setTimeout(function(){
        next.classList.remove("temp");
      }, 1);
      projectSlide.timer = setTimeout(Projects.next, Projects.delay);
    },
    next: function () {
      if (Projects.timer != null) {
        clearTimeout(Projects.timer);
        Projects.timer = null;
      }
      Projects.current++;
      if (Projects.current == Projects.slides.length) { //start back prev
        Projects.current = 0;
      }
      Projects.draw();
    },
    prev: function () {   //Go to   prev picture
      if (Projects.timer != null) {
        clearTimeout(Projects.timer);
        Projects.timer = null;
      }
      Projects.current--;
      if (Projects.current <0 ) {
        Projects.current = Projects.slides.length - 1;
      }
      Projects.draw();
    }
  };
window.addEventListener("load", Projects.start);