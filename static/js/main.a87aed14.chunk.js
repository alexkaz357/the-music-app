(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{26:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/default.ce4db81a.png"},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(18),s=c.n(r),i=c(3),l=c.n(i),o=c(5),u=c(9),j=c(2),h=c(0);function b(e){var t=e.selectedTrack,a=Object(n.useState)(!1),r=Object(j.a)(a,2),s=r[0],i=r[1];Object(n.useEffect)((function(){i(!1)}),[t]);var l=function(){i(!0)};return Object(h.jsxs)("section",{className:"player container",children:[Object(h.jsx)("p",{className:"header",children:"Select track, click the image to play it"}),t&&t.artwork_url?Object(h.jsx)("img",{src:t.artwork_url,alt:"",className:"clickable",onClick:l}):t&&Object(h.jsx)("img",{src:c(26).default,alt:"",className:"clickable",onClick:l}),s&&Object(h.jsx)("div",{children:Object(h.jsx)("iframe",{title:"player",width:"100%",height:"150",scrolling:"no",frameBorder:"no",src:"https://w.soundcloud.com/player/?visual=false&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F".concat(t.id,"&show_artwork=false&auto_play=true")})})]})}function f(e){var t=e.searchQueries,c=e.initiateSearchFromRecentSearches,n=e.deleteSearchItem,a=e.clearSearchHistory;return Object(h.jsxs)("section",{className:"container recent-searches",children:[Object(h.jsxs)("div",{className:"flex space-between",children:[Object(h.jsx)("p",{className:"header",children:"Recent Searches"}),0!==t.length&&Object(h.jsx)("p",{className:"clear",onClick:a,children:"Clear all"})]}),t.map((function(e,t){return Object(h.jsxs)("div",{className:"search-query item flex space-between align-center clickable",onClick:function(){return c(e)},children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("p",{className:"delete",onClick:function(t){return n(t,e)},children:"\xd7"})]},e)}))]})}var d=c(19),p=c.n(d),O=c(45);O.initialize({client_id:"ggX0UomnLs0VmW7qZnCzw"});var x={getTracks:function(e){return m.apply(this,arguments)},getNextTracks:function(e){return g.apply(this,arguments)},loadView:function(){var e=function(e){var t=localStorage.getItem(e);return JSON.parse(t)}("view");e||(e="list");return e},changeView:function(e){t="view",c=e,localStorage.setItem(t,JSON.stringify(c));var t,c}};function m(){return(m=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("/tracks",{linked_partitioning:1,limit:6,q:t}).then((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Something Went Wrong With The Folowing ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function g(){return(g=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(t).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Something Went Wrong With The Folowing ",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function v(e){var t=e.passSearchResults,c=e.passSearchQuery,a=e.activateLoader,r=e.disableLoader,s=Object(n.useState)(""),i=Object(j.a)(s,2),u=i[0],b=i[1],f=function(){var e=Object(o.a)(l.a.mark((function e(n){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:if("Enter"!==n.key&&"click"!==n.type){e.next=11;break}return c(u),d(),a(),e.next=8,x.getTracks(u);case 8:s=e.sent,r(),t(s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){b("")};return Object(h.jsxs)("section",{className:"search",children:[Object(h.jsx)("input",{type:"text",name:"search",value:u,placeholder:"Find track",autoComplete:"off",onChange:function(e){var t=e.target.value;b(t)},onKeyUp:f}),Object(h.jsx)("i",{className:"fas fa-search search-icon",onClick:f})]})}function k(e){var t=e.getNextTracks,c=e.changeView,a=Object(n.useState)(x.loadView()),r=Object(j.a)(a,2),s=r[0],i=r[1],l=function(e){i(e)};return Object(h.jsxs)("section",{className:"search-controller flex space-between align-center",children:[Object(h.jsx)("div",{children:Object(h.jsx)("i",{className:"fas fa-long-arrow-alt-right arrow",onClick:t})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-list list ".concat("list"===s?"selected":""),onClick:function(){c("list"),l("list")}}),Object(h.jsx)("i",{className:"fas fa-th tile ".concat("tile"===s?"selected":""),onClick:function(){c("tile"),l("tile")}})]})]})}function w(e){var t=e.searchResults,c=e.selectTrack,n=e.selectedView;return Object(h.jsx)("section",{className:"search-results ".concat("list"===n?"list":"tile"),children:t.collection.map((function(e){return Object(h.jsx)("p",{className:"item clickable",onClick:function(){return c(e)},children:e.title.length>30?e.title.slice(0,30)+"...":e.title},e.id)}))})}function S(){return Object(h.jsx)("section",{className:"loader",children:Object(h.jsx)("div",{class:"loadingio-spinner-ripple-no97mdfll9g",children:Object(h.jsxs)("div",{class:"ldio-ynol4tv7mwh",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})})}function N(e){var t=e.passSearchQuery,c=e.selectTrack,a=e.searchResultsFromRecentSearches,r=Object(n.useState)(null),s=Object(j.a)(r,2),i=s[0],u=s[1],b=Object(n.useState)(!1),f=Object(j.a)(b,2),d=f[0],p=f[1],O=Object(n.useState)(x.loadView()),m=Object(j.a)(O,2),g=m[0],N=m[1];Object(n.useEffect)((function(){u(a)}),[a]);var y=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),e.next=3,x.getNextTracks(i.next_href);case 3:t=e.sent,C(),u(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){u(null),p(!0)},C=function(){p(!1)};return Object(h.jsxs)("section",{className:"container search-container",children:[Object(h.jsx)("p",{className:"header",children:"Type anything below to search"}),Object(h.jsxs)("div",{className:"search-content flex column space-between",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{passSearchResults:function(e){u(e)},passSearchQuery:t,activateLoader:T,disableLoader:C}),d&&Object(h.jsx)(S,{}),i&&Object(h.jsx)(w,{searchResults:i,selectTrack:c,selectedView:g})]}),i&&"next_href"in i&&Object(h.jsx)("div",{children:Object(h.jsx)(k,{getNextTracks:y,changeView:function(e){x.changeView(e),N(e)}})})]})]})}function y(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(j.a)(r,2),i=s[0],d=s[1],p=Object(n.useState)(null),O=Object(j.a)(p,2),m=O[0],g=O[1],v=function(){var e=Object(o.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getTracks(t);case 2:c=e.sent,g(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("section",{className:"main-container flex space-between align-center",children:[Object(h.jsx)(N,{passSearchQuery:function(e){if(!c.includes(e)){var t=Object(u.a)(c);t.unshift(e),t.length>5&&t.pop(),a(t)}},selectTrack:function(e){d(e)},searchResultsFromRecentSearches:m}),Object(h.jsx)(b,{selectedTrack:i}),Object(h.jsx)(f,{searchQueries:c,initiateSearchFromRecentSearches:v,deleteSearchItem:function(e,t){e.stopPropagation();var n=c.findIndex((function(e){return e===t})),r=Object(u.a)(c);r.splice(n,1),a(r)},clearSearchHistory:function(){a([])}})]})}function T(){return Object(h.jsxs)("section",{className:"music-app",children:[Object(h.jsx)("div",{className:"bg"}),Object(h.jsx)("div",{className:"bg bg2"}),Object(h.jsx)("div",{className:"bg bg3"}),Object(h.jsx)("h1",{className:"logo",children:"TheMusicApp"}),Object(h.jsx)(y,{})]})}c(46);var C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.a87aed14.chunk.js.map