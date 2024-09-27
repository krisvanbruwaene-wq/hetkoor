const divs = ["archief", "links"];
divs.forEach(fetch_data);

function fetch_data(value) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
      document.getElementById(value).innerHTML = this.responseText;
  }
  xhttp.open("GET", value+".txt"); // async=true
  xhttp.send();
}
