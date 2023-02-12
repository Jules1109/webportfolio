// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontent = document.getElementsByClassName("tab-content");

// function opentab(tabname){
//     for(var i=0; i<tablinks.length; i++){
//         tablinks[i].className = tablinks[i].className.replace("active","");
//         tabcontent[i].style.display = "none";
//     }
//     document.getElementById(tabname).style.display = "block";
//     event.currentTarget.className += "active";
// }

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab (tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent  of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}