"use strict";(function(){'use strict';var a=document.getElementById("js-nav-toggle"),b=document.querySelector(".js-nav-content"),c=b.querySelectorAll("a"),d=function(){return"true"===a.getAttribute("aria-expanded")},e=function(a){var b=a?0:-1;c.forEach(function(c){c.setAttribute("aria-hidden",a),c.setAttribute("tabindex",b)})},f=function(){var b=a.getAttribute("aria-expanded"),c="true"!==b;a.setAttribute("aria-expanded",c),e(c)};(function(){a.setAttribute("aria-expanded",!1),e(!1),document.addEventListener("keydown",function(a){var b=document.activeElement.id,c=a.code;("Space"===c||"Enter"===c)&&"js-nav-toggle"===b&&f()}),document.body.addEventListener("click",function(c){a.contains(c.target)?f():!b.contains(c.target)&&d()&&f()})})()})();