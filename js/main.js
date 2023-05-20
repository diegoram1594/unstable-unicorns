let unicornVisibility = true;
let upgradeVisibility = true;
let donwgradeVisibility = true;
let containerUnicorns = document.getElementById('container_unicorns');

let unicorns = JSON.parse(unicornData);
unicorns.forEach(unicorn => {
    addCard(unicorn, containerUnicorns);
});

let containerUpgrades = document.getElementById('container_upgrades');
let upgrades = JSON.parse(upgradeData);
upgrades.forEach(upgrade => {
   addCard(upgrade, containerUpgrades);
});

let containerDowngrades = document.getElementById('container_downgrades');
let downgrades = JSON.parse(downgradeData);
downgrades.forEach(downgrade => {
   addCard(downgrade, containerDowngrades);
});

function addCard(item, container){
    let imgCard = document.createElement("img");
    imgCard.src = item.imgSrcSpanish;
    imgCard.className = "container_card";
    imgCard.id = item.id;
    imgCard.onclick = function() { modalView(item.id) };
    imgCard.loading = "lazy";
    container.appendChild(imgCard);
}

function searchContainer(container, list, separatorName, visibility){
    let text = document.getElementById("search").value.toLowerCase();
    let separator = document.getElementById(separatorName);
    let filterElements = list.filter(value => 
        (value.name.toLowerCase().includes(text) || 
        value.nameSpanish.toLowerCase().includes(text)) &&  visibility);
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
    searchContainer(containerUnicorns, unicorns, "separator_unicorn", unicornVisibility);
    searchContainer(containerUpgrades, upgrades, "separator_upgrade", upgradeVisibility);
    searchContainer(containerDowngrades, downgrades, "separator_downgrade", donwgradeVisibility);
}

function categoryFilter(){
    try{
        let categoryUnicorn = document.getElementById('category_unicorn').checked;
        let categoryUpgrade = document.getElementById('category_upgrade').checked;
        let categoryInstant = document.getElementById('category_instant').checked;
        let categoryDowngrade = document.getElementById('category_downgrade').checked;
        let categoryMagic = document.getElementById('category_magic').checked;

        if (!categoryUnicorn && !categoryUpgrade && !categoryInstant &&
            !categoryDowngrade && !categoryMagic){
            unicornVisibility = true;
            upgradeVisibility = true;
            donwgradeVisibility = true;
            //TODO add all categories
            return;
        }
        unicornVisibility = categoryUnicorn;
        upgradeVisibility = categoryUpgrade;
        donwgradeVisibility = categoryDowngrade;
    } finally{
        searchBar();
    }
}
