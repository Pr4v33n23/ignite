(this["webpackJsonpignite-ts"]=this["webpackJsonpignite-ts"]||[]).push([[0],{79:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t.n(r),i=t(21),o=t.n(i),s=t(5),d=t(6);function u(){var e=Object(s.a)(["\n\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html{\n        &::-webkit-scrollbar {\n            width: 0.5rem;\n        }\n        &::-webkit-scrollbar-thumb{\n            background-color: darkgrey;     \n        }\n        &::-webkit-scrollbar-track{\n            background-color: white;     \n        }\n    }\n\n    body{\n        font-family: 'Montserrat', sans-serif;\n        width: 100%\n    }\n\n    h2 {\n        font-size: 3rem;\n        font-family: 'Abril Fatface', san-serif;\n        font-weight: lighter;\n        color: #333;\n    }\n\n    h3 {\n        font-size: 1.3rem;\n        color: #333;\n        padding: 1.5rem 0rem;\n    }\n    \n    p{\n        font-size: 1.2rem;\n        line-height: 200%\n        color: #696969;\n    }\n\n    a{\n        text-decoration: none;\n        color: #333;\n    }\n\n    img{\n        display:block;\n    }\n\n    input{\n        font-weight: bold;\n        font-family: \"Montserrat\", sans-serif;\n\n    }\n\n"]);return u=function(){return e},e}var b=Object(d.a)(u()),l=t(13),g=t(16),m=t.n(g),j=t(20),p=t(17),f=t.n(p);var h=(new Date).getFullYear(),O=function(){var e=(new Date).getMonth()+1;return e<10?"0"+e:""+e}(),A=function(){var e=(new Date).getDate()+1;return e<10?"0"+e:""+e}(),x="".concat(h,"-").concat(O,"-").concat(A),v="".concat(h-1,"-").concat(O,"-").concat(A),w="".concat(h+1,"-").concat(O,"-").concat(A),y="https://api.rawg.io/api/",E="games?dates=".concat(v,",").concat(x,"&ordering=-rating&page_size=10"),k="games?dates=".concat(x,",").concat(w,"&ordering=-added&page_size=10"),I="games?dates=".concat(v,",").concat(x,"&ordering=-released&page_size=10"),C=function(e){return"".concat(y,"games/").concat(e,"/screenshots")},S=function(e){return"".concat(y,"games?search=").concat(e,"&page_size=9")},D=t(3),R=t(18),U=function(e,n){return e.match(/media\/screenshots/)?e.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games/","/media/resize/".concat(n,"/-/games/"))};function B(){var e=Object(s.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  cursor: pointer;\n  border-radius: 1rem;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]);return B=function(){return e},e}var L=Object(d.b)(D.c.div)(B()),T=function(e){var n=e.name,t=e.releasedDate,r=e.image,c=e.id,i=Object(l.b)();return Object(a.jsx)(L,{layoutId:c.toString(),onClick:function(){document.body.style.overflow="hidden",i(function(e){return function(){var n=Object(j.a)(m.a.mark((function n(t){var a,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING_DETAIL"}),n.next=3,f.a.get((c=e,"".concat(y,"games/").concat(c)));case 3:return a=n.sent,n.next=6,f.a.get(C(e));case 6:r=n.sent,t({type:"GET_DETAIL",payload:{game:a.data,screenShots:r.data}});case 8:case"end":return n.stop()}var c}),n)})));return function(e){return n.apply(this,arguments)}}()}(c))},children:Object(a.jsxs)(R.b,{to:"/game/".concat(c),children:[Object(a.jsx)(D.c.h3,{layoutId:"title".concat(c.toString()),children:n}),Object(a.jsx)("p",{children:t}),Object(a.jsx)(D.c.img,{layoutId:"image ".concat(c.toString()),src:U(r,640),alt:n})]})})},z=t(4),N=t.p+"static/media/playstation.18cc4b9c.svg",G=t.p+"static/media/steam.d7b8819f.svg",H=t.p+"static/media/xbox.3e7db735.svg",F=t.p+"static/media/nintendo.f579be04.svg",Z=t.p+"static/media/gamepad.c9269ef5.svg",M=t.p+"static/media/apple.5757c37e.svg";function J(){var e=Object(s.a)(["\n  margin: 5rem 0rem;\n"]);return J=function(){return e},e}function P(){var e=Object(s.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n  }\n"]);return P=function(){return e},e}function V(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    margin-left: 3rem;\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(s.a)(["\n  text-align: center;\n"]);return X=function(){return e},e}function W(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  img{\n    width: 2rem;\n    height: 2rem;\n    display: inline;\n  }\n"]);return W=function(){return e},e}function _(){var e=Object(s.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  position: absolute;\n  left: 10%;\n  color: black;\n  z-index: 10;\n  img {\n    width: 100%;\n  }\n"]);return _=function(){return e},e}function Q(){var e=Object(s.a)(["\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #ff7676;\n  }\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"]);return Q=function(){return e},e}var Y=Object(d.b)(D.c.div)(Q()),K=Object(d.b)(D.c.div)(_()),q=Object(d.b)(D.c.div)(W()),$=Object(d.b)(D.c.div)(X()),ee=Object(d.b)(D.c.div)(V()),ne=Object(d.b)(D.c.div)(P()),te=Object(d.b)(D.c.div)(J()),ae=function(e){var n=e.pathId,t=Object(z.e)(),r=function(e){switch(e){case"PlayStation 4":return N;case"Xbox One":return H;case"PC":return G;case"Nintendo Switch":return F;case"iOS":return M;default:return Z}},c=Object(l.c)((function(e){return e.detail})),i=c.screenShots,o=c.game,s=c.isLoading;return Object(a.jsx)(a.Fragment,{children:!s&&Object(a.jsx)(Y,{className:"shadow",onClick:function(e){var n=e.target;console.log(n.classList),n.classList.contains("shadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(a.jsxs)(K,{layoutId:n,children:[Object(a.jsxs)(q,{children:[Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)(D.c.h3,{layoutId:"game ".concat(n),children:o.name}),Object(a.jsxs)("p",{children:["Rating: ",o.rating]}),function(){for(var e=[],n=Math.floor(o.rating),t=1;t<=5;t++)t<=n?e.push(Object(a.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},t)):e.push(Object(a.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},t));return e}()]}),Object(a.jsxs)($,{children:[Object(a.jsx)("h3",{children:"Platforms"}),Object(a.jsx)(ee,{children:o.platforms.map((function(e){return Object(a.jsx)("img",{alt:e.platform.name,src:r(e.platform.name)},e.platform.id)}))})]})]}),Object(a.jsx)(ne,{children:Object(a.jsx)(D.c.img,{layoutId:"image ".concat(n),src:U(o.background_image,1280),alt:"gameimage"})}),Object(a.jsx)(te,{children:o.description_raw}),Object(a.jsx)("div",{className:"gallery",children:i.results.map((function(e){return Object(a.jsx)("img",{src:U(e.image,1280),alt:"galleryimage"},e.id)}))})]})})})};function re(){var e=Object(s.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]);return re=function(){return e},e}function ce(){var e=Object(s.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]);return ce=function(){return e},e}var ie=Object(d.b)(D.c.div)(ce()),oe=Object(d.b)(D.c.div)(re()),se=function(){var e=Object(z.f)().pathname.split("/")[2],n=Object(l.b)();Object(r.useEffect)((function(){n(function(){var e=Object(j.a)(m.a.mark((function e(n){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(y).concat(E));case 2:return t=e.sent,e.next=5,f.a.get("".concat(y).concat(I));case 5:return a=e.sent,e.next=8,f.a.get("".concat(y).concat(k));case 8:r=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,upcoming:r.data.results,newGames:a.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[n]);var t=Object(l.c)((function(e){return e.games})),c=t.popular,i=t.newGames,o=t.upComing,s=t.searched;return Object(a.jsx)(ie,{children:Object(a.jsxs)(D.b,{type:"crossfade",children:[Object(a.jsxs)(D.a,{children:[" ",e&&Object(a.jsx)(ae,{pathId:e})]}),s.length?Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Searched games"}),Object(a.jsx)(oe,{children:s.map((function(e){return Object(a.jsx)(T,{name:e.name,releasedDate:e.released,id:e.id,image:e.background_image},e.id)}))})]}):"",Object(a.jsx)("h2",{children:"upcoming games"}),Object(a.jsx)(oe,{children:o.map((function(e){return Object(a.jsx)(T,{name:e.name,releasedDate:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(a.jsx)("h2",{children:"Popular games"}),Object(a.jsx)(oe,{children:c.map((function(e){return Object(a.jsx)(T,{name:e.name,releasedDate:e.released,id:e.id,image:e.background_image},e.id)}))}),Object(a.jsx)("h2",{children:"New games"}),Object(a.jsx)(oe,{children:i.map((function(e){return Object(a.jsx)(T,{name:e.name,releasedDate:e.released,id:e.id,image:e.background_image},e.id)}))})]})})},de=(t(79),t(45)),ue=t.p+"static/media/logo.9b6b8655.svg";function be(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n  img {\n    height: 4rem;\n    width: 4rem;\n  }\n"]);return be=function(){return e},e}function le(){var e=Object(s.a)(['\n  padding: 3rem 5rem;\n  text-align: center;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    margin-top: 1rem;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n    font-weight: bold;\n    font-family: "Montserrat", sans-serif;\n  }\n  button {\n    width: 10%;\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem 2rem;\n    cursor: pointer;\n    background: #ff7676;\n    color: white;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n  }\n']);return le=function(){return e},e}var ge=Object(d.b)(D.c.div)(le()),me=Object(d.b)(D.c.div)(be()),je=function(){var e=Object(l.b)(),n=Object(r.useState)(""),t=Object(de.a)(n,2),c=t[0],i=t[1];return Object(a.jsxs)(ge,{children:[Object(a.jsxs)(me,{onClick:function(){e({type:"CLEAR_SEARCHED"})},children:[Object(a.jsx)("img",{src:ue,alt:"logo"}),Object(a.jsx)("h1",{children:"Ignite"})]}),Object(a.jsxs)("form",{className:"search",children:[Object(a.jsx)("input",{value:c,onChange:function(e){i(e.target.value)},type:"text"}),Object(a.jsx)("button",{onClick:function(n){var t;n.preventDefault(),e((t=c,function(){var e=Object(j.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(S(t));case 2:a=e.sent,n({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())),i("")},type:"submit",children:"Search"})]})]})};var pe=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{}),Object(a.jsx)(je,{}),Object(a.jsx)(z.a,{path:["/game/:id","/"],children:Object(a.jsx)(se,{})})]})},fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,82)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))},he=t(15),Oe=t(8),Ae={popular:[],newGames:[],upComing:[],searched:[]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(Oe.a)(Object(Oe.a)({},e),{},{popular:n.payload.popular,upComing:n.payload.upcoming,newGames:n.payload.newGames});case"FETCH_SEARCHED":return Object(Oe.a)(Object(Oe.a)({},e),{},{searched:n.payload.searched});case"CLEAR_SEARCHED":return Object(Oe.a)(Object(Oe.a)({},e),{},{searched:[]});default:return Object(Oe.a)({},e)}},ve={game:{platforms:[]},screenShots:{results:[]},isLoading:!0},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(Oe.a)(Object(Oe.a)({},e),{},{game:n.payload.game,screenShots:n.payload.screenShots,isLoading:!1});case"LOADING_DETAIL":return Object(Oe.a)(Object(Oe.a)({},e),{},{isLoading:!0});default:return Object(Oe.a)({},e)}},ye=Object(he.c)({games:xe,detail:we}),Ee=t(44),ke=(t(80),he.d),Ie=Object(he.e)(ye,ke(Object(he.a)(Ee.a)));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(l.a,{store:Ie,children:Object(a.jsx)(R.a,{children:Object(a.jsx)(pe,{})})})}),document.getElementById("root")),fe()}},[[81,1,2]]]);
//# sourceMappingURL=main.fd000838.chunk.js.map