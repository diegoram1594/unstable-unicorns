var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

function modalView(imageId){
    var img = document.getElementById(imageId);
    modal.style.display = "block";
    modalImg.src = img.src;
    document.body.style.overflowY= "hidden";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY= "";
}

function modalRules(){
    modal.style.display = "block";
    modalImg.src = "assets/reglas.png";
    document.body.style.overflowY= "hidden";
}