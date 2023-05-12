function modalView(imageId){
    var modal = document.getElementById("myModal");
    var img = document.getElementById(imageId);
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}