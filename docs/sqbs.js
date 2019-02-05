window.addEventListener("load", _ => {

  /* disable links */
  var links = document.getElementsByTagName("a");
  links.forEach(link => link.href = "");

  /* change title text */
  var title = document.getElementsByTagName("h1")[0];
  var hrefs = document.createElement("div");
  hrefs.style.textAlign = "center";
  hrefs.innerHTML = '<a style="text-decoration: underline;" href="prelims-stats.html">Prelims Teams</a>&nbsp;&nbsp<a style="text-decoration: underline;" href="prelims-individuals.html">Prelims Individuals</a>&nbsp;|&nbsp;<a style="text-decoration: underline;" href="playoffs-stats.html">Playoffs Teams</a>&nbsp;&nbsp;<a style="text-decoration: underline;" href="playoffs-individuals.html">Playoffs Individuals</a>&nbsp;|&nbsp;<a style="text-decoration: underline;" href="stats.html">Combined Teams</a>&nbsp;&nbsp;<a style="text-decoration: underline;" href="individuals.html">Combined Individuals</a>';
  title.parentNode.insertBefore(hrefs, title.nextSibling);

}

