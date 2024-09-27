    <script type="text/javascript">
        let response = await fetch('https://hetkoor.bitbucket.io/archief.txt');
        let text = await response.text();
        document.getElementById("archief").innerHTML = text;
        let response = await fetch('https://hetkoor.bitbucket.io/links.txt');
        let text = await response.text();
        document.getElementById("links").innerHTML = text;
    </script>
