// Side navigation drawer for narrow screens (see _includes/masthead.html)
(function () {
  var dialog = document.getElementById("side-nav");
  var openBtn = document.querySelector(".side-nav__open");
  if (!dialog || !openBtn || typeof dialog.showModal !== "function") return;

  var closeBtn = dialog.querySelector(".side-nav__close");
  var wide = window.matchMedia("(min-width: 772px)");

  function open() {
    dialog.showModal();
    openBtn.setAttribute("aria-expanded", "true");
  }

  function close() {
    if (dialog.open) dialog.close();
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  // Clicking the backdrop lands on the dialog element itself
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) close();
  });

  dialog.addEventListener("close", function () {
    openBtn.setAttribute("aria-expanded", "false");
  });

  // Don't leave the drawer open if the window grows past the breakpoint
  wide.addEventListener("change", function (e) {
    if (e.matches) close();
  });
})();
