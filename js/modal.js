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

function modalViewUpdate(appLanguage){
    if (imageIdModal == "rules"){
        if(appLanguage == "es"){
            modalImg.src = "assets/reglas.webp";
        }
        if(appLanguage == "en"){
            modalImg.src = "assets/rules.webp";
        }
        modalImg.classList.add('flip-card-inner');
        setTimeout(()=> modalImg.classList.remove('flip-card-inner'), 255);
    }else{
        let img = document.getElementById(imageIdModal);
        modalImg.classList.add('flip-card-inner');
        setTimeout(()=> modalImg.src = img.src, 100);
        setTimeout(()=> modalImg.classList.remove('flip-card-inner'), 255);
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
    modalImg.src = "assets/reglas.webp";
    document.body.style.overflowY= "hidden";
}