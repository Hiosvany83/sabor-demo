/* ============================================================
   SABOR — Restaurant & Café HTML Template
   Menu tabs (menu.js)
   Switches the visible menu category panel when a tab is
   clicked. Works with any number of tabs/panels as long as
   each tab's data-target matches a panel's id.
   ============================================================ */
(function () {
  "use strict";

  var tabs = document.querySelectorAll(".menu-tab");
  var panels = document.querySelectorAll(".menu-panel");
  if (!tabs.length || !panels.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      panels.forEach(function (p) { p.classList.remove("active"); });

      tab.classList.add("active");
      var target = document.getElementById(tab.getAttribute("data-target"));
      if (target) target.classList.add("active");
    });
  });
})();
