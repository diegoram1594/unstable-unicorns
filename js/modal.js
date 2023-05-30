var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
let imageIdModal = null;

function modalView(imageId){
    document.getElementById("language_selector_modal").checked = false;
    imageIdModal = imageId;
    var img = document.getElementById(imageId);
    modal.style.display = "block";
    modalImg.src = img.src;
    document.body.style.overflowY= "hidden";
}

function modalViewUpdate(){
    if (imageIdModal == "rules"){
        modalImg.src = "assets/reglas.png";
    }else{
        let img = document.getElementById(imageIdModal);
        modalImg.src = img.src;
    }
    
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY= "";
}

function modalRules() {
    document.getElementById("language_selector_modal").checked = false;
    imageIdModal = "rules";
    modal.style.display = "block";
    modalImg.src = "assets/reglas.png";
    document.body.style.overflowY= "hidden";
}