function fetch_data(value) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
	  let section = value.split(".")[0];
      document.getElementById(section).innerHTML = this.responseText;
  }
  xhttp.open("GET", value); // async=true
  xhttp.send();
}
