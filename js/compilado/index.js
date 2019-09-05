"use strict";

var modeloR = function modeloR() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("display").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "./html/modeloR.html", true);
  xhttp.send();
};

var getJson = function getJson() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("display").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "./js/json/41ORKNZDU.json", true);
  xhttp.send();
};