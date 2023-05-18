var containerUnicorns = document.getElementById('container_unicorns');

var unicorns = JSON.parse(unicornData);
unicorns.forEach(unicorn => {
    addCard(unicorn, containerUnicorns);
});

var containerUpgrades = document.getElementById('container_upgrades');
var upgrades = JSON.parse(upgradeData);
upgrades.forEach(upgrade => {
   addCard(upgrade, containerUpgrades);
});

var containerDowngrades = document.getElementById('container_downgrades');
var downgrades = JSON.parse(downgradeData);
downgrades.forEach(downgrade => {
   addCard(downgrade, containerDowngrades);
});

function addCard(item, container){
    var imgCard = document.createElement("img");
    imgCard.src = item.imgSrcSpanish;
    imgCard.className = "container_card";
    imgCard.id = item.id;
    imgCard.onclick = function() { modalView(item.id) }
    container.appendChild(imgCard);
}

function searchContainer(container, list, separatorName){
    let text = document.getElementById("search").value.toLowerCase();
    var separator = document.getElementById(separatorName);
    var filterElements = list.filter(value => 
        value.name.toLowerCase().includes(text) || 
        value.nameSpanish.toLowerCase().includes(text));
    container.replaceChildren();
    filterElements.forEach(item => {
        addCard(item, container);
    });
    if(filterElements.length == 0){
        separator.style.visibility = "hidden";
    }
    else{
        separator.style.visibility = "visible";
    }
        
}

function searchBar(){
    searchContainer(containerUnicorns, unicorns, "separator_unicorn");
    searchContainer(containerUpgrades, upgrades, "separator_upgrade");
    searchContainer(containerDowngrades, downgrades, "separator_downgrade");
    document
}