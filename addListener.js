const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const title = document.querySelector("h1");

btn.addEventListener("click", function(e){
    console.log(title.textContent);
    let number = parseInt(title.textContent)+1;
    title.textContent = number;
    console.log(typeof number);
});
btn2.addEventListener("click", function(e){
    let number = parseInt(title.textContent)-1;
    title.textContent = number;
    console.log(e.target.nodeName);
});