define("mvc/history/history-item-li",["exports"],function(e){"use strict";function t(e){return'<span class="badge badge-primary badge-tags">'+_.escape(e.slice(5))+"</span>"}Object.defineProperty(e,"__esModule",{value:!0}),e.default={nametagTemplate:function(e){var n=_.filter(_.uniq(e.tags),function(e){return 0===e.indexOf("name:")}),a=_.sortBy(n).map(t);return'\n        <div class="nametags" title="'+n.length+' nametags">\n            '+a.join("")+"\n        </div>"}}});