(this["webpackJsonpmain-bootstrap"]=this["webpackJsonpmain-bootstrap"]||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/defaultIcon.cd9692eb.svg"},28:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/heart-white.b3d0b957.svg"},34:function(e,t,n){e.exports=n.p+"static/media/backArrow.5f26c12e.svg"},35:function(e,t,n){e.exports=n.p+"static/media/backArrowActive.64b50238.svg"},37:function(e,t,n){e.exports=n(53)},42:function(e,t,n){},44:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),o=n.n(c),s=(n(42),n(43),n(28),n(44),n(2)),l=n.n(s),i=n(5),u=n(20),m=n(3),f=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{});window.location.hash="";var d=f,b=n(14),p=n.n(b),g=function(e){var t=e.userData;return r.a.createElement("div",{className:"mb-2 text-center text-lg sm:text-xl md:text-2xl font-fredoka pt-2 pl-2 pr-2 pb-0 flex justify-between tracking-wide text-white cursor-default"},r.a.createElement("span",{className:"flex justify-center self-center"},"BPM Playlist Maker"),r.a.createElement("img",{src:t.images[0]?t.images[0].url:p.a,alt:"profile",className:"self-center mr-2",style:{maxHeight:"1.2em",width:"1.2em",objectFit:"cover",borderRadius:"50%"}}))},v=n(6),h=["ugc-image-upload","user-top-read","user-read-playback-position","user-read-recently-played","user-read-playback-state","user-read-currently-playing","user-modify-playback-state","user-library-modify","user-library-read","streaming","app-remote-control","user-read-private","user-read-email","user-follow-modify","user-follow-read","playlist-modify-public","playlist-read-collaborative","playlist-read-private","playlist-modify-private"],x=n(36),E=n(7);function j(){var e=Object(v.a)(["\nword-wrap: break-word;\nmargin: 0 1em;\ntext-align: center;\n"]);return j=function(){return e},e}function k(){var e=Object(v.a)(["\ncolor: white;\nwidth: 400px;\n\n"]);return k=function(){return e},e}function y(){var e=Object(v.a)(["\nwidth: 100vw;\nheight: 100vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]);return y=function(){return e},e}function O(){var e=Object(v.a)(["\ntext-align: center;\nfont-size: 2.5rem;\n"]);return O=function(){return e},e}var w=E.a.div(O()),N=E.a.div(y()),S=E.a.div(k()),C=E.a.div(j()),M=function(){return r.a.createElement(N,null,r.a.createElement(S,null,r.a.createElement(w,{className:"font-fredoka"},"BPM Playlist Maker"),r.a.createElement(C,null,"This app allows you to create playlists based on the BPM of songs to create perfectly customized running playlists.",r.a.createElement("br",null),r.a.createElement(x.a,{href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("4451d90a4f634c33b6f4e015d616ab44","&redirect_uri=").concat("https://brentably.github.io/SpotifyPlaylistMaker","&scope=").concat(h.join("%20"),"&response_type=token&show_dialog=false"),className:"my-3",style:{backgroundColor:"#1dd05d"}},"Connect to Spotify"))))},_=function(){return r.a.createElement("div",{className:"text-white text-3xl text-center"})},B=n(13);function z(){var e=Object(v.a)(["\n  margin-right: 1em;\n  transition: color 0.1s ease-out;\n  &:active,\n  :hover {\n    color: #808a9f;\n    text-decoration: none;\n    cursor: pointer;\n    transition: color 0.1s ease-out;\n  }\n"]);return z=function(){return e},e}var T=Object(E.a)(B.a)(z()),I=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),n=Object(m.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(null),l=Object(m.a)(s,2),i=l[0],u=l[1],f=Object(a.useRef)();function d(){this.scrollY>f.current?o(!0):o(!1)}return f.current=i,Object(a.useEffect)((function(){return window.addEventListener("scroll",d),u(e.current.offsetTop),function(){return window.removeEventListener("scroll",d)}}),[]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement("div",{style:{width:"100vw",height:"".concat(e.current.clientHeight,"px")}}):null,r.a.createElement("div",{className:c?"stick text-silver flex text-xl tracking-wide p-2 font-nunito-semibold":"w-full text-silver flex tracking-wide text-xl p-2 font-nunito-semibold",ref:e},r.a.createElement(T,{to:"/playlists",className:"text-silver",activeClassName:"selected"},"Playlists"),r.a.createElement(T,{to:"/albums",className:"text-silver",activeClassName:"selected"},"Albums"),r.a.createElement(T,{to:"/search",className:"text-silver",activeClassName:"selected"},"Search")))},P=n(12),F=n(4),A=function(e){var t=e.path,n=e.header,a=e.subheader,c=e.img,o=e.endpoint,s=void 0===o?null:o,l=Object(F.g)();return r.a.createElement("div",{id:"card",className:"text-white flex font-nunito-semibold ellipsis items-center ml-2",style:{margin:"0.6rem"},onClick:function(){s&&l.push("/".concat(t),{endpoint:s})}},r.a.createElement("img",{src:c,alt:t,className:"mr-2",style:{objectFit:"cover",height:"3.4em",width:"3.4em"},loading:"lazy"}),r.a.createElement("div",{className:"ellipsis"},r.a.createElement("div",{className:"text-md ellipsis"},n),r.a.createElement("div",{className:"text-sm text-silver"},a)))},L=n(33),R=n.n(L),q=function(){var e=Object(F.g)();return r.a.createElement("div",{id:"card",className:"text-white flex font-nunito-semibold ellipsis items-center ml-2",style:{margin:"0.6rem"},onClick:function(){e.push("/".concat("likedsongs"),{endpoint:"https://api.spotify.com/v1/me/tracks"})}},r.a.createElement("div",{className:"likedSongsImage mr-2 flex justify-center items-center",style:{objectFit:"cover",height:"3.4em",width:"3.4em"}},r.a.createElement("img",{src:R.a,alt:"liked songs heart",style:{width:"1.6em",height:"1.6em"}})),r.a.createElement("div",{className:"ellipsis"},r.a.createElement("div",{className:"text-md ellipsis"},"Liked Songs"),r.a.createElement("div",{className:"text-sm text-silver"})))},D=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(n)}});case 2:if(!(a=e.sent).ok||"200"!==a.status){e.next=9;break}return e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 9:if(401!==a.status){e.next=14;break}console.log("TEST TEST TEST"),document.location.reload(),e.next=17;break;case 14:return e.next=16,a;case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=n(16),G=n.n(H),J=r.a.createContext(),Y=function(e){var t=Object(a.useState)({}),n=Object(m.a)(t,2),c=n[0],o=n[1];return r.a.createElement(J.Provider,{value:{context:c,setContext:o}},e.children)},Q=function(){var e=Object(a.useContext)(J).context.token,t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)("https://api.spotify.com/v1/me/playlists?offset=0&limit=40"),u=Object(m.a)(s,2),f=u[0],d=u[1],b=function(){var t=Object(i.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,D(f,e);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:a=t.sent,o((function(e){return[].concat(Object(P.a)(e),Object(P.a)(a.items))})),d(a.next);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=Object(a.useCallback)(b,[]);return Object(a.useEffect)((function(){g()}),[g]),c.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{pageStart:0,loadMore:b,hasMore:Boolean(f),loader:r.a.createElement(_,{key:"Loading"})},r.a.createElement(q,null),c.map((function(e){var t=e.images[0]?e.images[0].url:p.a;return r.a.createElement(A,{endpoint:e.href,key:e.id,path:e.type,img:t,header:e.name,subheader:"by ".concat(e.owner.display_name)})})))):r.a.createElement(_,null)},U=function(){var e=Object(a.useContext)(J).context.token,t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)("https://api.spotify.com/v1/me/albums?offset=0&limit=40"),u=Object(m.a)(s,2),f=u[0],d=u[1],b=function(){var t=Object(i.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,D(f,e);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:a=t.sent,o((function(e){var t=Object(P.a)(a.items).map((function(e){return e.album}));return[].concat(Object(P.a)(e),Object(P.a)(t))})),d(a.next);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=Object(a.useCallback)(b,[]);return Object(a.useEffect)((function(){g()}),[g]),c.length>0?r.a.createElement(G.a,{pageStart:0,loadMore:b,hasMore:Boolean(f),loader:r.a.createElement(_,{key:"239rehoufwds"})},c.map((function(e){var t=Object(P.a)(e.artists.map((function(e){return e.name}))).join(", "),n=e.images[0]?e.images[0].url:p.a;return r.a.createElement(A,{key:e.id,endpoint:e.href,path:e.type,header:e.name,subheader:t,img:n})}))):r.a.createElement(_,null)},V=function(e){var t=e.query,n=Object(a.useContext)(J).context.token;return Object(a.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("url",n);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})))()}),[t,n]),r.a.createElement("div",{className:"text-white text-xl"},t)};function W(){var e=Object(v.a)(["\npadding: 0.25em 0.9em 0.25em 2.5em;\nborder-radius: 1em;\nwidth: 100%;\n"]);return W=function(){return e},e}var X=E.a.input(W()),Z=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"m-2 relative"},r.a.createElement(X,{type:"search",placeholder:"Search for Artists, Songs, etc.",autoFocus:!0,value:n,onChange:function(e){c(e.target.value)}}),r.a.createElement("div",{className:"searchSVG"},r.a.createElement("span",{className:"flex-1"},r.a.createElement("svg",{height:"24",role:"img",width:"24",viewBox:"0 0 512 512",className:"block",style:{color:"rgb(19, 19, 19)"},"aria-hidden":"false"},r.a.createElement("path",{d:"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z",fill:"currentColor"}))))),r.a.createElement(V,{query:n}))},K=n(34),$=n.n(K),ee=n(35),te=n.n(ee);function ne(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0.25em;\n  left: 0.25em;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 50%;\n  width: 1.5em;\n  height: 1.5em;\n  padding: 0.2em;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  &:active {\n    background-image: url(",")\n  }\n\n"]);return ne=function(){return e},e}var ae=E.a.button(ne(),$.a,te.a),re=function(e){var t=e.history;return r.a.createElement(ae,{onClick:function(){console.log("BLEEP BLOOOP TIIIME WARRRP"),t.goBack()}})};function ce(){var e=Object(v.a)(["\n  position: absolute;\n  top: 13em;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  /* background: rgb(0,0,0); */\n  /* background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%); */\n"]);return ce=function(){return e},e}function oe(){var e=Object(v.a)(["\n  /* props.backgroundColor allows for future background color responsiveness */\n  background: rgb(19, 19, 19);\n  background: linear-gradient(0deg, rgba(19, 19, 19, 1) 0%, rgba(48, 48, 48, 1) 35%, "," 100%);\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.5rem;\n\n"]);return oe=function(){return e},e}var se=E.a.div(oe(),(function(e){return e.backgroundColor})),le=E.a.div(ce()),ie=function(){var e=Object(a.useContext)(J).context.token,t=Object(F.g)(),n=t.location.state.endpoint,c=Object(a.useState)(null),o=Object(m.a)(c,2),s=o[0],u=o[1],f=Object(a.useState)(null),d=Object(m.a)(f,2),b=d[0],g=d[1],v=Object(a.useState)(null),h=Object(m.a)(v,2),x=h[0],E=h[1];Object(a.useEffect)((function(){Object(i.a)(l.a.mark((function t(){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("".concat(n,"?market=from_token"),e);case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,u(r),g(r.tracks.next),E(r.tracks.items),console.log(r);case 10:case"end":return t.stop()}}),t)})))()}),[n,e]);var j=function(){var t=Object(i.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(b){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,D(b,e);case 4:if(!(n=t.sent).ok){t.next=11;break}return t.next=8,n.json();case 8:a=t.sent,E((function(e){return[].concat(Object(P.a)(e),Object(P.a)(a.items))})),g(a.next);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return s&&x?r.a.createElement("div",{className:"page absolute bottom-0 left-0 right-0 top-0 text-white"},r.a.createElement(se,{backgroundColor:s.primary_color?"".concat(s.primary_color):"#535353"},r.a.createElement("div",{className:"playlistHeader sticky w-full"},s.name,r.a.createElement(re,{history:t})),r.a.createElement("img",{src:s.images[0]?s.images[0].url:p.a,alt:"playlist",style:{height:"7em",width:"7em"},className:"self-center"}),r.a.createElement("div",null,s.owner.display_name),r.a.createElement("div",{className:"text-silver"},s.description?function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}(s.description):"")),r.a.createElement(le,null,r.a.createElement(G.a,{pageStart:0,loadMore:j,hasMore:Boolean(b),loader:r.a.createElement(_,{key:"Loading"})},x.map((function(e){var t=e.track,n=t.artists.map((function(e){return e.name})).join(","),a=t.album.images[0]?t.album.images[0].url:p.a;return r.a.createElement(A,{key:t.id,header:t.name,subheader:n,img:a})}))))):r.a.createElement(_,null)},ue=function(){var e=Object(a.useContext)(J).context.token,t=Object(F.g)(),n=t.location.state.endpoint,c=Object(a.useState)(null),o=Object(m.a)(c,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){Object(i.a)(l.a.mark((function t(){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("".concat(n),e);case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,u(r),console.log(s);case 8:case"end":return t.stop()}}),t)})))()}),[s,n,e]),r.a.createElement("div",{className:"page absolute bottom-0 left-0 right-0 top-0 text-white"},r.a.createElement(re,{history:t}))},me=function(){var e=Object(a.useContext)(J).context.token,t=Object(F.g)(),n=t.location.state.endpoint,c=Object(a.useState)(null),o=Object(m.a)(c,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){Object(i.a)(l.a.mark((function t(){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("".concat(n),e);case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,u(r),console.log(s);case 8:case"end":return t.stop()}}),t)})))()}),[s,n,e]),r.a.createElement("div",{className:"page absolute bottom-0 left-0 right-0 top-0 text-white"},r.a.createElement(re,{history:t}))},fe=function(){var e=Object(F.g)();return r.a.createElement("div",{className:"page absolute bottom-0 left-0 right-0 top-0 text-white"},r.a.createElement(re,{history:e}))},de=function(){var e=Object(a.useContext)(J).setContext;d.error&&console.log(d.error);var t=Object(a.useState)(null),n=Object(m.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(null),f=Object(m.a)(s,2),b=f[0],p=f[1],v=Object(a.useState)(!1),h=Object(m.a)(v,2),x=h[0],E=h[1];return Object(a.useEffect)((function(){if(d.access_token)o(d.access_token),localStorage.clear(),localStorage.setItem("token",d.access_token),e((function(e){return Object(u.a)(Object(u.a)({},e),{},{token:d.access_token})})),console.log(d.access_token);else{o(localStorage.getItem("token"));var t=localStorage.getItem("token");e((function(e){return Object(u.a)(Object(u.a)({},e),{},{token:t})}))}}),[e]),Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return E(!0),e.abrupt("return");case 3:return e.next=5,fetch("https://api.spotify.com/v1/me",{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(t)}});case 5:if(!(n=e.sent).ok){e.next=12;break}return e.t0=p,e.next=10,n.json();case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:n.ok||"401"!==n.status||E(!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(c)}),[c]),b?r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{userData:b}),r.a.createElement(F.a,{initialEntries:["/playlists","/albums","/search",{pathname:"/playlist",state:{endpoint:"https://api.spotify.com/v1/playlists/37i9dQZF1DX4osfY3zybD2"}}],initialIndex:3},r.a.createElement(F.d,null,r.a.createElement(F.b,{path:"/playlists"},r.a.createElement(I,null),r.a.createElement(Q,null)),r.a.createElement(F.b,{path:"/likedsongs"},r.a.createElement(fe,null)),r.a.createElement(F.b,{path:"/albums"},r.a.createElement(I,null),r.a.createElement(U,null)),r.a.createElement(F.b,{path:"/search"},r.a.createElement(I,null),r.a.createElement(Z,null)),r.a.createElement(F.b,{path:"/playlist"},r.a.createElement(ie,null)),r.a.createElement(F.b,{path:"/artist"},r.a.createElement(ue,null)),r.a.createElement(F.b,{path:"/album"},r.a.createElement(me,null))))):x?r.a.createElement(M,null):r.a.createElement(_,null)};var be=function(){return r.a.createElement(Y,null,r.a.createElement(de,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.79980b46.chunk.js.map