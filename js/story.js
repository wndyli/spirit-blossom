/* modified from this tutorial:
https://www.w3schools.com/howto/howto_js_full_page_tabs.asp */

function openPage(pageName,elmnt) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(pageName).style.display = "block";
  }
  
document.getElementById("defaultOpen").click();