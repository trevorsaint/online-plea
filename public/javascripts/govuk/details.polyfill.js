!function(){"use strict";function t(t,e,n){t.addEventListener?t.addEventListener(e,function(t){n(t,t.target)},!1):t.attachEvent&&t.attachEvent("on"+e,function(t){n(t,t.srcElement)})}function e(t){return"number"==typeof t.which?t.which:t.keyCode}function n(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function a(a,r){t(a,"keypress",function(t,a){e(t)!==s&&e(t)!==u||"summary"===a.nodeName.toLowerCase()&&(n(t),a.click?a.click():r(t,a))}),t(a,"keyup",function(t,a){e(t)===u&&"SUMMARY"===a.nodeName&&n(t)}),t(a,"click",function(t,e){r(t,e)})}function r(t,e){do{if(!t||t.nodeName.toLowerCase()===e)break;t=t.parentNode}while(t);return t}function i(t){function e(t){var e="true"===t.__details.__summary.getAttribute("aria-expanded"),n="true"===t.__details.__content.getAttribute("aria-hidden");return t.__details.__summary.setAttribute("aria-expanded",e?"false":"true"),t.__details.__content.setAttribute("aria-hidden",n?"false":"true"),o||(t.__details.__content.style.display=e?"none":"",null!==t.__details.getAttribute("open")?t.__details.removeAttribute("open"):t.__details.setAttribute("open","open")),t.__twisty&&(t.__twisty.firstChild.nodeValue=e?"►":"▼",t.__twisty.setAttribute("class",e?"arrow arrow-closed":"arrow arrow-open")),!0}if(!_&&(_=!0,0!==(t=document.getElementsByTagName("details")).length)){var n=t.length,i=0;for(i;i<n;i++){var s=t[i];s.__summary=s.getElementsByTagName("summary").item(0),s.__content=s.getElementsByTagName("div").item(0),s.__content.id||(s.__content.id="details-content-"+i),s.setAttribute("role","group"),s.__summary.setAttribute("role","button"),s.__summary.setAttribute("aria-controls",s.__content.id),o||(s.__summary.tabIndex=0);var u=null!==s.getAttribute("open");if(!0===u?(s.__summary.setAttribute("aria-expanded","true"),s.__content.setAttribute("aria-hidden","false")):(s.__summary.setAttribute("aria-expanded","false"),s.__content.setAttribute("aria-hidden","true"),o||(s.__content.style.display="none")),s.__summary.__details=s,!o){var d=document.createElement("i");!0===u?(d.className="arrow arrow-open",d.appendChild(document.createTextNode("▼"))):(d.className="arrow arrow-closed",d.appendChild(document.createTextNode("►"))),s.__summary.__twisty=s.__summary.insertBefore(d,s.__summary.firstChild),s.__summary.__twisty.setAttribute("aria-hidden","true")}}a(document,function(t,n){return!(n=r(n,"summary"))||e(n)})}}var o="boolean"==typeof document.createElement("details").open,s=13,u=32,_=!1;t(document,"DOMContentLoaded",i),t(window,"load",i)}();