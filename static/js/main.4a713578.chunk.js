(this.webpackJsonpwatchlist=this.webpackJsonpwatchlist||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(15),r=a.n(l),s=(a(26),a(27),a(7)),i=a(1),o=a(11),m=a(13),d=a(6),u={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},h=Object(c.createContext)(u),p=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watchlist:[t.payload].concat(Object(m.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_TO_WATCHED_LIST":return Object(d.a)(Object(d.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload.id})),watched:[t.payload].concat(Object(m.a)(e.watched))});case"REMOVE_FROM_WATCHED_LIST":return Object(d.a)(Object(d.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});case"MOVE_MOVIE_TO_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchlist:[t.payload].concat(Object(m.a)(e.watchlist))});default:return e}},E=function(e){var t=Object(c.useReducer)(p,u),a=Object(o.a)(t,2),l=a[0],r=a[1];Object(c.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(l.watchlist)),localStorage.setItem("watched",JSON.stringify(l.watched))}),[l]);return n.a.createElement(h.Provider,{value:{watchlist:l.watchlist,watched:l.watched,prop1:function(e){r({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},prop2:function(e){r({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},prop3:function(e){r({type:"ADD_TO_WATCHED_LIST",payload:e})},prop4:function(e){r({type:"REMOVE_FROM_WATCHED_LIST",payload:e})},prop5:function(e){r({type:"MOVE_MOVIE_TO_WATCHLIST",payload:e})}}},e.children)};var v=function(e){var t=e.movie,a=e.type,l=Object(c.useContext)(h),r=l.prop2,s=l.prop3,i=l.prop4,o=l.prop5;return n.a.createElement("div",null,n.a.createElement("div",{class:"inner-card-controls"},"watchlist"===a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{class:"ctrl-btn",onClick:function(){s(t)}},n.a.createElement("i",{class:"fa-fw far fa-eye"})),n.a.createElement("button",{class:"ctrl-btn",onClick:function(){r(t.id)}},n.a.createElement("i",{class:"fa-fw fa fa-times"}))),"watched"===a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"ctrl-btn",onClick:function(){o(t)}},n.a.createElement("i",{class:"fas fa-eye-slash"})),n.a.createElement("button",{className:"ctrl-btn",onClick:function(){i(t.id)}},n.a.createElement("i",{class:"fa-fw fa fa-times"})))))};var f=function(e){var t=e.movie,a=e.type;return n.a.createElement("div",{class:"movie-card"},n.a.createElement("div",{class:"overlay"}),console.log(t.poster_path),t.poster_path?n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):n.a.createElement("div",{class:"filler-poster"}),n.a.createElement(v,{type:a,movie:t}))};var w=function(){var e=Object(c.useContext)(h).watched;return n.a.createElement("div",{class:"movie-page"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"header"},n.a.createElement("h1",{class:"header"},"My watched movies"),n.a.createElement("span",{class:"count-pill"},e.length," ",1===e.length?"Movie":"Movies")),e.length>0?n.a.createElement("div",{className:"movie-grid"},e.map((function(e){return n.a.createElement(f,{movie:e,type:"watched"})}))):n.a.createElement("h2",{className:"no-movies"},"No movies that you watched!")))};var b=function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"inner-content"},n.a.createElement("div",{class:"brand"},n.a.createElement(s.b,{to:"/"}," Watchlist")),n.a.createElement("ul",{class:"nav-links"},n.a.createElement("li",{class:"nav-links"},n.a.createElement(s.b,{to:"/watchlist"},"Watch List")),n.a.createElement("li",{class:"nav-links"},n.a.createElement(s.b,{to:"/watched"},"Watched")),n.a.createElement("li",{class:"nav-links"},n.a.createElement(s.b,{to:"/add",className:"btn"},"+ADD"))))))};var O=function(){var e=Object(c.useContext)(h).watchlist;return n.a.createElement("div",{class:"movie-page"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"header"},n.a.createElement("h1",{class:"header"},"My Watchlist"),n.a.createElement("span",{class:"count-pill"},e.length," ",1===e.length?"Movie":"Movies")),e.length>0?n.a.createElement("div",{className:"movie-grid"},e.map((function(e){return n.a.createElement(f,{movie:e,type:"watchlist"})}))):n.a.createElement("h2",{className:"no-movies"},"No movies in your Watch List, add some!")))};var g=function(e){var t=e.movie,a=Object(c.useContext)(h),l=a.prop1,r=a.watchlist,s=a.watched,i=a.prop3,o=r.find((function(e){return e.id===t.id})),m=s.find((function(e){return e.id===t.id})),d=!(!o&&!m);return n.a.createElement("div",null,n.a.createElement("div",{class:"result-card"},n.a.createElement("div",{class:"poster-wrapper"},t.poster_path?n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):n.a.createElement("div",{class:"filler-poster"})),n.a.createElement("div",{class:"info"},n.a.createElement("div",{class:"header"},n.a.createElement("h3",{class:"title"},t.title),n.a.createElement("h4",{className:"release-date"},t.release_date?t.release_date.substring(0,4):"-")),n.a.createElement("div",{className:"controls"},n.a.createElement("button",{class:"btn",disabled:d,onClick:function(){d||l(t)}},"Add to Watchlist"),n.a.createElement("button",{class:"btn",disabled:m,onClick:function(){m||i(t)}},"Add to Watched")))))};var _=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)([]),s=Object(o.a)(r,2),i=s[0],m=s[1];return n.a.createElement("div",null,n.a.createElement("div",{class:"add-page"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"add-content"},n.a.createElement("div",{class:"input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search for a movie...",value:a,onChange:function(e){l(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=2a78ad2f9fc27a2417c7790b3835f4be&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?m({}):(m(e.results),console.log(i))}))}})),i.length>0&&n.a.createElement("ul",null,i.map((function(e){return n.a.createElement("div",null,n.a.createElement(g,{key:e.id,movie:e}))})))))))};var y=function(){return n.a.createElement("div",null,n.a.createElement(E,null,n.a.createElement(s.a,null,n.a.createElement(b,null),n.a.createElement("switch",null,n.a.createElement(i.a,{path:"/add",component:_}),n.a.createElement(i.a,{path:"/watched",exact:!0,component:w}),n.a.createElement(i.a,{path:"/watchlist",exact:!0,component:O})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.4a713578.chunk.js.map