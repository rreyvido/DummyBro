var table = document.getElementById("mytable");

for (var i = 0; i < table.rows.length; i++) {
  table.rows[i].addEventListener("click", function(e) {
    const url = e.currentTarget.getAttribute("data-link") 
    window.location.href = url
  });
}
