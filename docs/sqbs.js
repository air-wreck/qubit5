window.addEventListener("load", _ => {

  /* disable links */
  var links = document.getElementsByTagName("a");
  Array.from(links).forEach(link => link.href = "");

  /* change title text */
  var title = document.getElementsByTagName("h1")[0];
  var hrefs = document.createElement("div");
  hrefs.style.textAlign = "center";
  hrefs.innerHTML = '<a style="text-decoration: underline;" href="prelims_standings.html">Prelims Teams</a>&nbsp;&nbsp<a style="text-decoration: underline;" href="prelims_teamdetail.html">Prelims Team Detail</a>&nbsp;|&nbsp;<a style="text-decoration: underline;" href="playoffs_standings.html">Playoffs Teams</a>&nbsp;&nbsp;<a style="text-decoration: underline;" href="playoffs_teamdetail.html">Playoffs Team Detail</a>&nbsp;|&nbsp;<a style="text-decoration: underline;" href="combined_standings.html">Combined Teams</a>&nbsp;&nbsp;<a style="text-decoration: underline;" href="combined_teamdetail.html">Combined Team Detail</a>';
  title.parentNode.insertBefore(hrefs, title.nextSibling);

  /* create wrappers around all tables for scroll overflow */
  var tables = document.getElementsByTagName("table");
  Array.from(tables).slice(1).forEach(table => {
    var wrapper = document.createElement("div");
    table.parentNode.replaceChild(wrapper, table);
    wrapper.appendChild(table);
    wrapper.style.overflowX = "scroll";
  });

  /* delete pesky first table */
  var tbl = tables[0];
  tbl.parentNode.removeChild(tbl);

  /* insert umlauts into division names? sort of hack-y */
  var divisions = document.getElementsByTagName("h2");
  Array.from(divisions).forEach(d => {
    var name = d.textContent;
    if (name === "Die Walkureal Projective Plane")
      d.innerHTML = "Die Walk&uumlreal Projective Plane";
    if (name === "Gotterdammergune-Kutta")
      d.innerHTML = "G&oumltterd&aumlmmerunge-Kutta";
  });

});

