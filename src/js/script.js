document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('#lightSwitch');
    checkbox.addEventListener('change', function() {
      if(checkbox.checked) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(xhttp.responseText);
            if(resp.response == "H") {
                document.getElementById("status").innerHTML = "Switching ON";
            }
          }
        };
        xhttp.open("GET", "data/on", true);
        xhttp.send();
      } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(xhttp.responseText);
            if(resp.response == "L") {
                document.getElementById("status").innerHTML = "Switching OFF";
            }
          }
        };
        xhttp.open("GET", "data/off", true);
        xhttp.send();
      }
    });

    var checkbox2 = document.querySelector('#pirSwitch');
    checkbox2.addEventListener('change', function() {
      if(checkbox2.checked) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(xhttp.responseText);
            if(resp.response == "P") {
                document.getElementById("status2").innerHTML = "Pir ON";
            }
          }
        };
        xhttp.open("GET", "data/pirOn", true);
        xhttp.send();
      } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(xhttp.responseText);
            if(resp.response == "Q") {
                document.getElementById("status2").innerHTML = "Pir OFF";
            }
          }
        };
        xhttp.open("GET", "data/pirOff", true);
        xhttp.send();
      }
    });
  })