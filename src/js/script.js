document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
      if(checkbox.checked) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          document.getElementById("status").innerHTML = "Switching ON";
          }
        };
        xhttp.open("GET", "data/on", true);
        xhttp.send();
      } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          document.getElementById("status").innerHTML = "Switching OFF";
          }
        };
        xhttp.open("GET", "data/off", true);
        xhttp.send();
      }
    })
  })