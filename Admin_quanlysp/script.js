function openTable(evt, tableName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tableName).style.display = "block";
    evt.currentTarget.className += " active";
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn1')) {
        var dropdowns1 = document.getElementsByClassName("dropdown-content1");
        var t;
        for (t = 0; t < dropdowns.length; t++) {
            var openDropdown1 = dropdowns1[i];
            if (openDropdown1.classList.contains('show')) {
                openDropdown1.classList.remove('show');
            }
        }
    }
}


var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("add_admin")[0];
var span = document.getElementsByClassName("close")[0];
var btn2 = document.getElementById("yes");
var btn2 = document.getElementById("cancel");

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

btn2.onclick = function () {
    modal.style.display = "none";
}

btn3.onclick = function () {
    modal.style.display = "none";
}


