(this["webpackJsonpmain-bootstrap"]=this["webpackJsonpmain-bootstrap"]||[]).push([[0],{18:function(e,t,a){},25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),s=(a(30),a(31),a(32),a(18),a(7)),o=a.n(s),i=a(11),u=a(6),m=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{});window.location.hash="";var f=m,d=function(e){var t=e.userData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:" text-center text-lg sm:text-xl md:text-2xl font-fredoka p-2 flex justify-between tracking-wide text-white"},r.a.createElement("span",{className:"flex justify-center self-center"},"BPM Playlist Maker"),r.a.createElement("img",{src:t.images[0].url,alt:"profile",className:"self-center mr-2",style:{maxHeight:"1.2em",width:"1.2em",objectFit:"cover",borderRadius:"50%"}})))},p=a(4),y=["ugc-image-upload","user-top-read","user-read-playback-position","user-read-recently-played","user-read-playback-state","user-read-currently-playing","user-modify-playback-state","user-library-modify","user-library-read","streaming","app-remote-control","user-read-private","user-read-email","user-follow-modify","user-follow-read","playlist-modify-public","playlist-read-collaborative","playlist-read-private","playlist-modify-private"],b=a(24),v=a(5);function h(){var e=Object(p.a)(["\nword-wrap: break-word;\nmargin: 0 1em;\ntext-align: center;\n"]);return h=function(){return e},e}function g(){var e=Object(p.a)(["\ncolor: white;\nwidth: 400px;\n\n"]);return g=function(){return e},e}function E(){var e=Object(p.a)(["\nwidth: 100vw;\nheight: 100vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]);return E=function(){return e},e}function x(){var e=Object(p.a)(["\ntext-align: center;\nfont-size: 2.5rem;\n"]);return x=function(){return e},e}var k=v.a.div(x()),j=v.a.div(E()),w=v.a.div(g()),O=v.a.div(h()),N=function(){return r.a.createElement(j,null,r.a.createElement(w,null,r.a.createElement(k,{className:"font-fredoka"},"BPM Playlist Maker"),r.a.createElement(O,null,"This app allows you to create playlists based on the BPM of songs to create perfectly customized running playlists.",r.a.createElement("br",null),r.a.createElement(b.a,{href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("4451d90a4f634c33b6f4e015d616ab44","&redirect_uri=").concat("http://Brentably.github.io/SpotifyPlaylistMaker","&scope=").concat(y.join("%20"),"&response_type=token&show_dialog=false"),className:"my-3",style:{backgroundColor:"#1dd05d"}},"Connect to Spotify"))))},P=function(){return r.a.createElement("div",{className:"text-white text-3xl text-center"},"Loading...")};function S(){var e=Object(p.a)(["\nmargin-right: 1em;\n"]);return S=function(){return e},e}var A=v.a.div(S()),C=function(e){return r.a.createElement("div",{className:"text-silver flex text-xl tracking-wide mt-2 p-2 font-nunito-semibold"},r.a.createElement(A,{className:"Playlists"===e.type&&"selected",onClick:function(){e.setType("Playlists")}},"Playlists"),r.a.createElement(A,{className:"Albums"===e.type&&"selected",onClick:function(){e.setType("Albums")}},"Albums"),r.a.createElement(A,{className:"Artists"===e.type&&"selected",onClick:function(){e.setType("Artists")}},"Artists"))},_=function(e){return r.a.createElement("div",{className:"text-white flex m-2 font-nunito-semibold"},r.a.createElement("img",{src:e.images[0].url,alt:"Playlist",className:"mr-2",style:{objectFit:"cover",maxWidth:"4em"}}),r.a.createElement("div",{className:"text-sm"},e.name))},B=function(){var e=Object(n.useContext)(M),t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://api.spotify.com/v1/me/playlists?offset=0&limit=20",{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(t)}});case 4:if(!(a=e.sent).ok){e.next=11;break}return e.t0=l,e.next=9,a.json();case 9:e.t1=e.sent,(0,e.t0)(e.t1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(e)}),[e]),Object(n.useEffect)((function(){console.log(c),c&&console.log(c.items[0])}),[c]),c?r.a.createElement(r.a.Fragment,null,c.items.map((function(e){return r.a.createElement(_,Object.assign({},e,{key:e.id}))}))):r.a.createElement(P,null)},M=r.a.createContext(),T=function(){f.error&&console.log(f.error);var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(u.a)(l,2),m=s[0],p=s[1],y=Object(n.useState)("Playlists"),b=Object(u.a)(y,2),v=b[0],h=b[1],g=Object(n.useState)(!1),E=Object(u.a)(g,2),x=E[0],k=E[1];return Object(n.useEffect)((function(){f.access_token?(c(f.access_token),localStorage.clear(),localStorage.setItem("token",f.access_token),console.log(f.access_token)):c(localStorage.getItem("token"))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||k(!0),e.next=3,fetch("https://api.spotify.com/v1/me",{method:"GET",mode:"cors",headers:{Authorization:"Bearer ".concat(t)}});case 3:if(a=e.sent,console.log(a.ok),console.log(a.status),!a.ok){e.next=12;break}return e.t0=p,e.next=10,a.json();case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:a.ok&&"401"!==a.status||k(!0);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(a)}),[a]),m?r.a.createElement(M.Provider,{value:a},r.a.createElement(d,{userData:m}),r.a.createElement(C,{type:v,setType:h}),"Playlists"===v&&r.a.createElement(B,null)):x?r.a.createElement(N,null):r.a.createElement(P,null)};var z=function(){return r.a.createElement("div",null,r.a.createElement(T,null))},F=a(23);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F.a,null,r.a.createElement(z,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.750d6da8.chunk.js.map