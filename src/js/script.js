document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function() {
    document.getElementById("status").innerHTML = "Waiting for response...";
    if(checkbox.checked) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var resp = JSON.parse(xhttp.responseText);
          if(resp.response == "H") {
              document.getElementById("status").innerHTML = "Switched ON";
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
              document.getElementById("status").innerHTML = "Switched OFF";
          }
        }
      };
      xhttp.open("GET", "data/off", true);
      xhttp.send();
    }
  })
})