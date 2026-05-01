fetch("/nav.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("nav-slot").innerHTML = html;
  });
