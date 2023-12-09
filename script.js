function chargeTheTabIndex() {
    var images = document.getElementsByClassName("preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", i + 1);
        
    }
}


function upDate(item){
    var url = item.src;
    var x = document.getElementById("image");
    x.style.backgroundImage = 'url(' + url + ')';
    x.style.backgroundSize = 'cover';
    document.getElementById("image").innerHTML = item.alt;
    }

function unDo(){
    var x = document.getElementById("image");
    x.style.backgroundColor = "#8e68ff";
    x.style.backgroundImage = 'none';
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    }