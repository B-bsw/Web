window.onload = function () {
  document.addEventListener(
    "dblclick",
    (e) => {
      e.preventDefault();
    },
    {
      passive: false,
    }
  );
//   refresh
  if (performance.navigation.type == 1) {
    window.location.replace("../../index.html");
  }
};
