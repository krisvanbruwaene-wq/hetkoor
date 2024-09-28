function fetch_data(value) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
      document.getElementById(value).innerHTML = this.responseText;
  }
  xhttp.open("GET", value); // async=true
  xhttp.send();
}
