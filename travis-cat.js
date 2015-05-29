// Copyright (c) 2015 Francois Lebel. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var containerExists = setInterval(function() {
  logContainer = document.getElementById("log-container");
  if (logContainer) {
    status = document.getElementsByClassName("icon icon-status failed")[0];
    if (status) {
      imageTag = document.createElement("img");
      imageTag.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=med";
      logContainer.parentNode.insertBefore(imageTag, logContainer);
    }
    clearInterval(containerExists);
  }
}, 500);

