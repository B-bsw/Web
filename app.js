window.onload = function(){
    document.addEventListener("dblclick",(e) => {
        e.preventDefault();
    },{
        passive: false
    });
    const txt = document.getElementById('gay');
    const btn = document.getElementById("btn-not");

    // txt.innerText = "test";

    btn.addEventListener("click",function(){
        btn.style.opacity = "0";
        btn.style.visibility = "hidden";
        txt.innerText = "You are lie?"
        setTimeout(() => {
            txt.innerText = "Your age is 20?"
        }, 2000);
    });
}