window.onload = function() {
  // window.location.href = '../index.html';
    if (performance.navigation.type == 1) {
      window.location.replace('../index.html');
    }
    
  document.addEventListener("dblclick",(e) => {
      e.preventDefault();
  },
  {
      passive: false
  }
  );
  
  const image = document.getElementById("img_fan");
  const title = document.getElementById("title");
  const sub = document.getElementById("subtitle");
  const txt = document.getElementById("wish");
  const tch = document.getElementById("tch");
  const cld = document.getElementById("cld");
  const num_bd = document.getElementById("date");
  
  setTimeout(function () {
  for (let index = 0; index < 101; index++) {
    setTimeout(function () {
      title.style.opacity = index / 100;
    }, index * 10);
  }
  }, 1500);
  
  setTimeout(function () {
  var ind = 1;
  
  for (let index = 0; index < 101; index++) {
    setTimeout(function () {
      sub.style.opacity = index / 100;
    }, index * 10);
  }
  setTimeout(function () {
    for (let index = 0; index < 101; index++) {
      setTimeout(function () {
        cld.classList.add("slide-top");
        // num_bd.className = "slide-top";
        num_bd.classList.add("slide-top");
        txt.style.opacity = index / 100;
        cld.style.opacity = index / 100;
        num_bd.style.opacity = index / 100;
        cld.addEventListener('click',function(){
          document.getElementById('overlay').style.display = 'block';
          document.getElementById('cld_pop').style.display = 'block';
        });
        document.getElementById('overlay').onclick = function() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('cld_pop').style.display = 'none';
        };
      }, index * 10);
    }
    setTimeout(function () {
      image.addEventListener("click", function () {
          console.log("test")
        if (ind > 10) {
          ind = 1; 
        }
        image.setAttribute("src", "./Image/wan" + ind + ".jpg");
        ind++;
      });
      for (let index = 0; index < 101; index++) {
        setTimeout(function () {
          tch.style.opacity = index / 100;
        }, index * 10);
      }
    }, 800);
  }, 1000);
  }, 2000);
}