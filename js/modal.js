var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

function modalView(imageId){
    var img = document.getElementById(imageId);
    modal.style.display = "block";
    modalImg.src = img.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

function modalRules(){
    modal.style.display = "block";
    modalImg.src = "assets/reglas.png";
}