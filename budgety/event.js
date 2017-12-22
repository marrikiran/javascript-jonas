document.querySelector('.level-1').addEventListener('click', function(e) {
    console.log(e);
    console.log('Section-level-1 clicked');
    console.log(e.target.textContent);
});

document.querySelector(".level-2").addEventListener("click", function(e) {
    console.log(e);
    console.log("Div-level-2 clicked");
    console.log(e.target.textContent);
});

document.querySelector(".level-3").addEventListener("click", function(e) {
    console.log(e);
    console.log("Div-level-3 clicked");
    console.log(e.target.textContent);
});

document.querySelector(".level-4").addEventListener("click", function(e) {
    console.log(e);
    console.log("Button-level-4 clicked");
    console.log(e.target.textContent);
});

document.querySelector("body").addEventListener("click", function(e) {
    console.log(e);
    console.log("Body clicked");
    console.log(e.target.textContent);
});

document.querySelector("html").addEventListener("click", function(e) {
    console.log(e);
    console.log("HTML clicked");
    console.log(e.target.textContent);
});

