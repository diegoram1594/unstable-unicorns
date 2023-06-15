let unicornVisibility = true;
let upgradeVisibility = true;
let downgradeVisibility = true;
let instantVisibility = true;
let magicVisibility = true;
let validLanguages = ["en", "es"];
let containerUnicorns = document.getElementById('container_unicorns');
let appLanguage = getDefaultLanguage();
let backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

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

let containerInstant = document.getElementById('container_instant');
let instants = JSON.parse(instantData);
instants.forEach(instant => {
   addCard(instant, containerInstant);
});

let containerMagic = document.getElementById('container_magic');
let magics = JSON.parse(magicData);
magics.forEach(magic => {
   addCard(magic, containerMagic);
});

function addCard(item, container){
    let imgCard = document.createElement("img");
    if (appLanguage == "es") {
        imgCard.src = item.imgSrcSpanish;
    } if (appLanguage == "en") {
        imgCard.src = item.imgSrcEnglish;
    }
    imgCard.className = "container_card";
    imgCard.id = item.id;
    imgCard.onclick = function() { modalView(item.id) };
    imgCard.loading = "lazy";
    container.appendChild(imgCard);
}

function searchContainer(container, list, separatorName, visibility){
    let text = document.getElementById("search").value.toLowerCase().trim();
    let separator = document.getElementById(separatorName);
    let filterElements = list.filter(value => 
        (value.name.toLowerCase().includes(text) || 
        value.nameSpanish.toLowerCase().includes(text)) &&  visibility);
    container.replaceChildren();
    filterElements.forEach(item => {
        addCard(item, container);
    });
    if(filterElements.length == 0){
        separator.style.display = "none";
    }
    else{
        separator.style.display = "flex";
    }   
}

function searchBar(){
    searchContainer(containerUnicorns, unicorns, "separator_unicorn", unicornVisibility);
    searchContainer(containerUpgrades, upgrades, "separator_upgrade", upgradeVisibility);
    searchContainer(containerDowngrades, downgrades, "separator_downgrade", downgradeVisibility);
    searchContainer(containerInstant, instants, "separator_instant", instantVisibility);
    searchContainer(containerMagic, magics, "separator_magic", magicVisibility);
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
            downgradeVisibility = true;
            instantVisibility = true;
            magicVisibility = true;
            return;
        }
        unicornVisibility = categoryUnicorn;
        upgradeVisibility = categoryUpgrade;
        downgradeVisibility = categoryDowngrade;
        instantVisibility = categoryInstant;
        magicVisibility = categoryMagic;
    } finally{
        searchBar();
    }
}

function getDefaultLanguage(){
    let language = navigator.language;
    if (language) {
        let defaultNavLang = language.substring(0,2);
        if (validLanguages.includes(defaultNavLang)){
            return defaultNavLang;
        }
    }
    return "en";
}

function changeLanguage(language){
    if (language != appLanguage){
        appLanguage = language;
        searchBar();
        modalViewUpdate(appLanguage);
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
  }

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}