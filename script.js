let buttonP = document.getElementById("p-button");
let buttonImg = document.getElementById("img-button");
let divP = document.getElementById("p-div");
let divImg = document.getElementById("img-div");

buttonP.onclick = function () {
    divImg.style["display"] = "none";
    divP.style["display"] = "block";
    let newP = document.createElement("p");
    newP.textContent = "Hot chocolate is bad today";
    newP.style["font-size"] = "25px";
    divP.appendChild(newP);
    newP.style.backgroundColor = "black";
    newP.style.color = "white";
}

buttonImg.onclick = function(){
    divP.style["display"] = "none";
    divImg.style["display"] = "block";
    let newImg = document.createElement("img");
    newImg.style["width"] = "150px";
    divImg.appendChild(newImg);
    newImg.src = "pikachu.png";
}