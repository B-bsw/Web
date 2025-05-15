window.onload = function() {
  // window.location.href = '../index.html';

    // refresh
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
  const img_mys = document.getElementById('img_mys')
  
  setTimeout(function () {
    show('title')
  }, 1500);
  
  setTimeout(function () {
  var ind = 1;
  
  show('subtitle')
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
        if (ind > 10) {
          ind = 1; 
        }
        image.setAttribute("src", "./Image/wan" + ind + ".jpg");
        ind++;
      });
      show('tch')
      mys_box();
      img_mys.addEventListener("click",function() {
        window.location.href = './subpage/subpage.html';
      });
    }, 800);

  }, 1000);
  }, 2000);

  function mys_box() {
    const targetElement = document.querySelector('#mys');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          show('mys');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.6
    });
    observer.observe(targetElement);
  }

  function show(id) {
      for (let index = 0; index < 101; index++) {
        setTimeout(function () {
          document.getElementById(id).style.opacity = index/100
        }, index * 10);
      }
  }
}