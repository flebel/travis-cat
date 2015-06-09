// Copyright (c) 2015 Francois Lebel. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
  comfortingCat = document.getElementById("comforting-cat");
  logContainer = document.getElementById("log-container");
  if (!comfortingCat && logContainer) {
    status_errored = document.getElementsByClassName("icon icon-status errored")[0];
    status_failed = document.getElementsByClassName("icon icon-status failed")[0];
    if (status_errored != undefined || status_failed != undefined) {
      imageTag = document.createElement("img");
      imageTag.setAttribute("id", "comforting-cat");
      imageTag.setAttribute("src", "http://thecatapi.com/api/images/get?format=src&type=gif&size=small");
      imageTag.setAttribute("style", "display:block; margin:10px auto -25px");
      logContainer.parentNode.insertBefore(imageTag, logContainer);
    }
  }
});

observer.observe(document, {
  childList: true,
  subtree: true
});

