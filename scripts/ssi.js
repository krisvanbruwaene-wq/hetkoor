const divs = ["header", "navbar", "archief", "links", "footer"];
divs.forEach(fetch_data);

function fetch_data(value) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
      document.getElementById(value).innerHTML = this.responseText;
  }
  xhttp.open("GET", value+".txt"); // async=true
  xhttp.send();
}
