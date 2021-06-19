(function () {
  const deleteStuffOnPage = function () {
    const thingsToGetOuttaHere = [
      "secondary", // Video sidebar, 'prolly other things too.
      "related", // Related videos.
      "chips", // The recommended video topics on homepage & elsewhere.
      "comments", // Seemingly broken by the above, but this removes your face. Nice.
    ];
    const onHomepage = window.location.pathname == "/";
    if (onHomepage) {
      thingsToGetOuttaHere.push("primary"); // The big video suggestion grid.
    }
    for (const id of thingsToGetOuttaHere) {
      const elem = document.getElementById(id);
      if (elem) {
        elem.replaceWith(""); // Get outta here.
      }
    }
    const classesCancelled = [
      "ytp-endscreen-content", // Recommend videos that show up in the video player
    ];
    for (const klass of classesCancelled) {
      const elems = document.getElementsByClassName(klass);
      for (const elem of elems) {
        elem.replaceWith(""); // It's a snow day after all.
      }
    }
  };
  const observer = new MutationObserver(function (_mutationsList, _observer) {
    deleteStuffOnPage();
  });
  // Tell me -EVERYTHING-.
  observer.observe(document.body, {
    attributes: false,
    childList: true,
    subtree: true,
  });
})();
