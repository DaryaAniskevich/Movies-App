(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{12:function(e,t,n){e.exports={link:"MovieCard_link__2pQo9",card:"MovieCard_card__3DyqG",imageBlock:"MovieCard_imageBlock__22---",image:"MovieCard_image__3p8CC",description:"MovieCard_description__3b7hf",titleBlock:"MovieCard_titleBlock__1jzg4",title:"MovieCard_title__1NWzY",ganre:"MovieCard_ganre__UmclM",release:"MovieCard_release__BGrei",rating:"MovieCard_rating__3TWsj"}},13:function(e,t,n){e.exports={resultsTopBar:"ResultsTopBar_resultsTopBar__1scaF",container:"ResultsTopBar_container__31GAS",sort:"ResultsTopBar_sort__1ZVhe",button:"ResultsTopBar_button__5_BWi",button_active:"ResultsTopBar_button_active__2IZzh",sortTitle:"ResultsTopBar_sortTitle__N3Oga"}},17:function(e,t,n){e.exports={error:"ErrorMessage_error__2pW8G",container:"ErrorMessage_container__27x95",errorDescription:"ErrorMessage_errorDescription__2VgTu",title:"ErrorMessage_title__1RjSW",number:"ErrorMessage_number__2I2cb",description:"ErrorMessage_description__1rwJE",button:"ErrorMessage_button__1m82-"}},19:function(e,t,n){e.exports={results:"GetMoviesResult_results__26N00",container:"GetMoviesResult_container__2H_6z",grid:"GetMoviesResult_grid__1xsPy",myLoader:"GetMoviesResult_myLoader__1xsBC",buttonContainer:"GetMoviesResult_buttonContainer__3ECKA",buttonShow:"GetMoviesResult_buttonShow__3hMsJ"}},20:function(e,t,n){e.exports={results:"SearchResult_results__1CrLO",container:"SearchResult_container__wp8OE",grid:"SearchResult_grid__3At2Z",loader:"SearchResult_loader__39sfw",buttonContainer:"SearchResult_buttonContainer__IUjqw",buttonShow:"SearchResult_buttonShow__3Bs2o"}},31:function(e,t,n){e.exports={header:"Header_header__QeWsT",container:"Header_container__35gda"}},34:function(e,t,n){e.exports={footer:"Footer_footer__T8lxu",container:"Footer_container__v6-NR"}},36:function(e,t,n){e.exports={white:"App_white__17Rai",container:"App_container__3zshM"}},37:function(e,t,n){e.exports={logo:"Logo_logo__28xWz"}},38:function(e,t,n){e.exports={lds_ring:"Loader_lds_ring__3OP_q"}},49:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),s=n(26),o=n.n(s),i=(n(49),n(36)),l=n.n(i),u=n(31),d=n.n(u),j=n(37),b=n.n(j),_=n(1),h=function(){return Object(_.jsx)("div",{className:b.a.logo,children:"netflixroulette"})},v=n(6),O=n.n(v),p=function(e){return Object(_.jsx)("button",{type:e.type,className:e.className,onClick:e.onClick,disabled:e.disabled,children:e.children})},m=n(2),g="SEARCH",f=function(e){return{type:g,payload:e}},x="SEARCH_BY",y=function(e){return e.getMovies.movies},N=function(e){return e.getMovies.isLoading},M=function(e){return e.searchMovies.movies},S=function(e){return e.searchMovies.isLoading},C=function(e){return e.searchMovies.searchDone},k=function(e){return e.movieDetails.movieDetails},w=function(e){return e.searchValue.value},B=function(e){return e.searchBy.searchBy},E=function(e){return e.sortBy.sortBy},R=function(e){return e.sortOrder.sortOrder},T=n(5),D=function(){var e=Object(T.g)().push,t=Object(m.b)(),n=Object(m.c)(w),a=Object(m.c)(B),r=Object(c.useCallback)((function(e,n){e.preventDefault(),t({type:x,payload:n})}),[t]),s=Object(c.useCallback)((function(c){c.preventDefault(),""!==n.trim()?(e("/movies/searchBy/".concat(a,"/search/").concat(n)),t(f(""))):t(f(""))}),[t,e,a,n]),o=Object(c.useCallback)((function(c){""!==n.trim()?"Enter"===c.code&&(e("/movies/searchBy/".concat(a,"/search/").concat(n)),t(f("")),c.preventDefault()):t(f(""))}),[t,e,n,a]);return Object(_.jsxs)("div",{className:O.a.container,children:[Object(_.jsx)("h1",{className:O.a.header,children:"Find your movie"}),Object(_.jsxs)("form",{className:O.a.form,onSubmit:function(e){return s(e)},children:[Object(_.jsx)("input",{placeholder:"Quentin Tarantino",type:"text",className:O.a.input,value:n,onChange:function(e){return t(f(e.target.value))},onKeyPress:function(e){return o(e)}}),Object(_.jsxs)("div",{className:O.a.buttons_container,children:[Object(_.jsxs)("div",{className:O.a.buttons_left,children:[Object(_.jsx)("h2",{className:"".concat(O.a.header_search," ").concat(O.a.header),children:"Search by"}),Object(_.jsx)(p,{onClick:function(e){return r(e,"title")},className:"title"===a?"".concat(O.a.button," ").concat(O.a.button_active):O.a.button,children:"Title"}),Object(_.jsx)(p,{onClick:function(e){return r(e,"genres")},className:"genres"===a?"".concat(O.a.button," ").concat(O.a.button_active):O.a.button,children:"Genre"})]}),Object(_.jsx)("div",{className:O.a.buttons_right,children:Object(_.jsx)(p,{type:"submit",className:"".concat(O.a.button," ").concat(O.a.button_search),children:"Search"})})]})]})]})},I=function(e){return Object(_.jsx)("div",{className:d.a.header,children:Object(_.jsxs)("div",{className:d.a.container,children:[Object(_.jsx)(h,{}),Object(_.jsx)(D,{})]})})},L=n(28),F=n(19),A=n.n(F),G=n(12),V=n.n(G),W=n(14),z=function(e){var t="";for(var n in Object.keys(e.genres))n<e.genres.length-1?t+="".concat(e.genres[n]," & "):t+=e.genres[n];return Object(_.jsx)(W.b,{to:"/movies/".concat(e.id),className:V.a.link,children:Object(_.jsxs)("div",{className:V.a.card,children:[Object(_.jsxs)("div",{className:V.a.imageBlock,children:[Object(_.jsx)("img",{src:e.image,alt:e.title,className:V.a.image}),e.rating?Object(_.jsx)("span",{className:V.a.rating,children:e.rating}):null]}),Object(_.jsxs)("div",{className:V.a.description,children:[Object(_.jsxs)("div",{className:V.a.titleBlock,children:[Object(_.jsx)("div",{className:V.a.title,children:e.title}),Object(_.jsx)("div",{className:V.a.ganre,children:t})]}),Object(_.jsx)("div",{className:V.a.releaseBlock,children:Object(_.jsx)("div",{className:V.a.release,children:e.release.slice(0,4)})})]})]})})},H=n(25),Z=n(13),K=n.n(Z),P="SORT",q=function(e){return{type:P,payload:e}},J="SORT_ORDER",U=function(e){return{type:J,payload:e}},Q=n(15),Y=n.n(Q),X=n(22),$="MOVIES_IS_LOADING",ee="SET_MOVIES",te=function(e){return{type:$,payload:e}},ne=function(e){return{type:ee,payload:e}},ae="SEARCH_MOVIES_IS_LOADING",ce="SET_FOUND_MOVIES",re="SET_SEARCH_DONE",se=function(e){return{type:ae,payload:e}},oe=function(e){return{type:ce,payload:e}},ie=function(e){return{type:re,payload:e}},le=function(){var e=Object(m.b)(),t=Object(m.c)(y),n=Object(m.c)(M),a=Object(m.c)(C),r=Object(m.c)(E),s=Object(m.c)(R),o=Object(c.useCallback)((function(e){return e=e.split("-"),Number(e[0]+e[1]+e[2])}),[]),i=Object(c.useCallback)((function(e){return function(t,n){return"asc"===s?o(n[e])-o(t[e]):"desc"===s?o(t[e])-o(n[e]):void 0}}),[s,o]),l=Object(c.useCallback)((function(e){return function(t,n){return"asc"===s?n[e]-t[e]:"desc"===s?t[e]-n[e]:void 0}}),[s]),u=Object(c.useCallback)((function(a){if(e(q(a)),"release_date"===a){var c=[];n.length>0?(c=Object(H.a)(n).sort(i(a)),e(oe(c))):(c=Object(H.a)(t).sort(i(a)),e(ne(c)))}else if("vote_average"===a){var r=[];n.length>0?(r=Object(H.a)(n).sort(l(a)),e(oe(r))):(r=Object(H.a)(t).sort(l(a)),e(ne(r)))}}),[e,i,l,t,n]),d=Object(c.useCallback)((function(t,n){t.preventDefault(),e(q(n)),u(n),e(U("desc"===s?"asc":"desc"))}),[e,u,s]);return Object(_.jsx)("div",{className:K.a.resultsTopBar,children:Object(_.jsxs)("div",{className:K.a.container,children:[Object(_.jsxs)("div",{className:K.a.found,children:[!0===a?n.length:t.length,"\xa0",1===n.length?"movie":"movies","\xa0found"]}),Object(_.jsxs)("div",{className:K.a.sort,children:[Object(_.jsx)("span",{className:K.a.sortTitle,children:"Sort by"}),Object(_.jsxs)(p,{onClick:function(e){return d(e,"release_date")},className:"release_date"===r?"".concat(K.a.button," ").concat(K.a.button_active):K.a.button,children:["release date","release_date"===r?"asc"===s?Object(_.jsx)("span",{children:"\u2191"}):Object(_.jsx)("span",{children:"\u2193"}):null]}),Object(_.jsxs)(p,{onClick:function(e){d(e,"vote_average")},className:"vote_average"===r?"".concat(K.a.button," ").concat(K.a.button_active):K.a.button,children:["rating","vote_average"===r?"asc"===s?Object(_.jsx)("span",{children:"\u2191"}):Object(_.jsx)("span",{children:"\u2193"}):null]})]})]})})},ue=n(38),de=n.n(ue),je=function(){return Object(_.jsxs)("div",{className:de.a.lds_ring,children:[Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{})]})},be=function(){var e=Object(m.c)(y),t=Object(m.c)(N),n=Object(m.b)(),a=Object(m.c)(E),r=Object(m.c)(R);Object(c.useEffect)((function(){n(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;return function(){var a=Object(X.a)(Y.a.mark((function a(c){var r;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(te(!0)),a.next=3,fetch("https://reactjs-cdp.herokuapp.com/movies?sortBy=".concat(e,"&sortOrder=").concat(t,"&limit=").concat(n)).then((function(e){return e.json()}));case 3:r=a.sent,c(ne(r.data)),c(te(!1));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a,r,100))}),[n,a,r]);var s=Object(c.useState)(12),o=Object(L.a)(s,2),i=o[0],l=o[1],u=Object(c.useMemo)((function(){return e.slice(0,i)}),[e,i]),d=!1;u.length>=e.length&&(d=!0);var j=Object(c.useCallback)((function(){return l(i+12)}),[i]);return Object(_.jsxs)("div",{className:A.a.results,children:[Object(_.jsx)(le,{}),t?Object(_.jsx)("div",{className:A.a.myLoader,children:Object(_.jsx)(je,{})}):Object(_.jsxs)("div",{className:A.a.container,children:[Object(_.jsx)("div",{className:A.a.grid,children:u.map((function(e){return Object(_.jsx)(z,{title:e.title,release:e.release_date,image:e.poster_path,genres:e.genres,overview:e.overview,budget:e.budget,rating:e.vote_average,id:e.id},e.id)}))}),Object(_.jsx)("div",{className:A.a.buttonContainer,children:Object(_.jsx)(p,{className:A.a.buttonShow,onClick:j,disabled:d,children:"Show more"})})]})]})},_e=n(34),he=n.n(_e),ve=function(){return Object(_.jsx)("div",{className:he.a.footer,children:Object(_.jsx)("div",{className:he.a.container,children:Object(_.jsx)(h,{})})})},Oe=n(20),pe=n.n(Oe),me=function(){var e=Object(m.b)(),t=Object(m.c)(E),n=Object(m.c)(R),a=Object(T.h)(),r=a.searchCategory,s=a.searchValue;Object(c.useEffect)((function(){e(function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:12;return function(){var r=Object(X.a)(Y.a.mark((function r(s){var o;return Y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s(ie(!1)),s(se(!0)),r.next=4,fetch("https://reactjs-cdp.herokuapp.com/movies?searchBy=".concat(e,"&search=").concat(t,"&sortBy=").concat(n,"&sortOrder=").concat(a,"&limit=").concat(c)).then((function(e){return e.json()}));case 4:o=r.sent,s(oe(o.data)),s(se(!1)),s(ie(!0));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(r,s,t,n,100))}),[e,r,s,t,n]);var o=Object(m.c)(M),i=Object(m.c)(S),l=Object(c.useState)(12),u=Object(L.a)(l,2),d=u[0],j=u[1],b=Object(c.useMemo)((function(){return o.slice(0,d)}),[o,d]),h=!1;b.length>=o.length&&(h=!0);var v=Object(c.useCallback)((function(){return j(d+12)}),[d]);return Object(_.jsxs)("div",{className:pe.a.results,children:[Object(_.jsx)(le,{}),i?Object(_.jsx)("div",{className:pe.a.loader,children:Object(_.jsx)(je,{})}):Object(_.jsxs)("div",{className:pe.a.container,children:[Object(_.jsx)("div",{className:pe.a.grid,children:b.map((function(e){return Object(_.jsx)(z,{title:e.title,release:e.release_date,image:e.poster_path,genres:e.genres,overview:e.overview,budget:e.budget,rating:e.vote_average,id:e.id},e.id)}))}),o.length>0&&o.length>=12?Object(_.jsx)("div",{className:pe.a.buttonContainer,children:Object(_.jsx)(p,{className:pe.a.buttonShow,onClick:v,disabled:h,children:"Show more"})}):null]})]})},ge=n(17),fe=n.n(ge),xe=function(){return Object(_.jsx)("div",{className:fe.a.error,children:Object(_.jsx)("div",{className:fe.a.container,children:Object(_.jsxs)("div",{className:fe.a.errorDescription,children:[Object(_.jsx)("div",{className:fe.a.title,children:"Keep calm"}),Object(_.jsx)("div",{className:fe.a.number,children:"404"}),Object(_.jsx)("div",{className:fe.a.description,children:"Page not found"}),Object(_.jsx)(W.b,{to:"/movies",className:fe.a.button,children:"Return to homepage"})]})})})},ye=n(39),Ne=n(8),Me=n.n(Ne),Se=n(40),Ce="MOVIE_DETAILS_IS_LOADING",ke="SET_MOVIE_DETAILS",we=function(e){return{type:Ce,payload:e}},Be=function(e){return{type:ke,payload:e}},Ee=Se.a.div(a||(a=Object(ye.a)(["\n  height: 350px;\n  background-color: black;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n"])),(function(e){return e.image})),Re=function(){var e=Object(T.h)().movieId,t=Object(m.b)(),n=Object(m.c)(k);Object(c.useEffect)((function(){t(function(e){return function(){var t=Object(X.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(we(!0)),t.next=3,fetch("https://reactjs-cdp.herokuapp.com/movies/".concat(e)).then((function(e){return e.json()}));case 3:a=t.sent,n(Be(a)),n(we(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t,e]);var a=Object(m.c)(M),r=Object(m.c)(y),s=Object(m.c)(C);console.log(s);var o="";for(var i in n.genres)i<n.genres.length-1?o+="".concat(n.genres[i]," - "):o+=n.genres[i];return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:Me.a.container,children:a.length>0?a.map((function(e){return Object(_.jsx)(z,{title:e.title,release:e.release_date,image:e.poster_path,genres:e.genres,overview:e.overview,budget:e.budget,rating:e.vote_average,id:e.id},e.id)})):r.map((function(e){return Object(_.jsx)(z,{title:e.title,release:e.release_date,image:e.poster_path,genres:e.genres,overview:e.overview,budget:e.budget,rating:e.vote_average,id:e.id},e.id)}))}),Object(_.jsx)("div",{className:Me.a.modal,children:Object(_.jsx)("div",{className:Me.a.wrapper,children:Object(_.jsxs)(Ee,{className:Me.a.content,image:n.poster_path,children:[Object(_.jsxs)("div",{className:Me.a.header,children:[Object(_.jsx)("h3",{className:Me.a.title,children:n.title}),Object(_.jsx)(W.b,{to:"/movies",children:Object(_.jsx)(p,{className:Me.a.button_close,onClick:t(ie(!1)),children:"x"})})]}),Object(_.jsxs)("div",{className:Me.a.body,children:[Object(_.jsx)("p",{className:Me.a.genres,children:o}),Object(_.jsx)("p",{className:Me.a.description,children:n.overview}),Object(_.jsx)("p",{className:Me.a.description,children:"Runtime: ".concat(n.runtime," min.")}),Object(_.jsx)("p",{className:Me.a.description,children:"Rating:\n                ".concat(0===n.vote_average?"unknown":n.vote_average)}),Object(_.jsx)("p",{className:Me.a.description,children:"Budget:\n                ".concat(0===n.budget?"unknown":"$".concat(n.budget))})]})]})})})]})},Te=function(){return Object(_.jsx)(W.a,{children:Object(_.jsxs)("div",{className:l.a.container,children:[Object(_.jsx)(I,{}),Object(_.jsxs)(T.d,{children:[Object(_.jsx)(T.b,{exact:!0,path:["/","/movies"],component:be}),Object(_.jsx)(T.b,{exact:!0,path:"/movies/searchBy/:searchCategory/search/:searchValue",component:me}),Object(_.jsx)(T.b,{exact:!0,path:"/movies/:movieId",component:Re}),Object(_.jsx)(T.b,{path:"/error",component:xe}),Object(_.jsx)(T.a,{to:"/error"})]}),Object(_.jsx)(ve,{})]})})},De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},Ie=n(24),Le=n(3),Fe={movies:[],isLoading:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(Le.a)(Object(Le.a)({},e),{},{movies:t.payload});case $:return Object(Le.a)(Object(Le.a)({},e),{},{isLoading:t.payload});default:return e}},Ge={movies:[],isLoading:!1,searchDone:!1},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(Le.a)(Object(Le.a)({},e),{},{movies:t.payload});case ae:return Object(Le.a)(Object(Le.a)({},e),{},{isLoading:t.payload});case re:return Object(Le.a)(Object(Le.a)({},e),{},{searchDone:t.payload});default:return e}},We={value:""},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(Le.a)(Object(Le.a)({},e),{},{value:t.payload});default:return e}},He={searchBy:"title"},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(Le.a)(Object(Le.a)({},e),{},{searchBy:t.payload});default:return e}},Ke={sortBy:null},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(Le.a)(Object(Le.a)({},e),{},{sortBy:t.payload});default:return e}},qe={sortOrder:"asc"},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(Le.a)(Object(Le.a)({},e),{},{sortOrder:t.payload});default:return e}},Ue={movieDetails:[],isLoading:!1},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(Le.a)(Object(Le.a)({},e),{},{movieDetails:t.payload});case Ce:return Object(Le.a)(Object(Le.a)({},e),{},{isLoading:t.payload});default:return e}},Ye=Object(Ie.b)({getMovies:Ae,searchMovies:Ve,movieDetails:Qe,searchValue:ze,searchBy:Ze,sortBy:Pe,sortOrder:Je}),Xe=n(44),$e=Object(Ie.c)(Ye,Object(Ie.a)(Xe.a));o.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(m.a,{store:$e,children:Object(_.jsx)(Te,{})})}),document.getElementById("root")),De()},6:function(e,t,n){e.exports={container:"SearchForm_container__3x0cv",header:"SearchForm_header__2UZ5O",input:"SearchForm_input__2WdIg",buttons_container:"SearchForm_buttons_container__1XKMu",buttons_left:"SearchForm_buttons_left__qF6yL",header_search:"SearchForm_header_search__BIZWq",button:"SearchForm_button__1F6TY",button_active:"SearchForm_button_active__3-pOJ",button_search:"SearchForm_button_search__rDzVt"}},8:function(e,t,n){e.exports={container:"Modal_container__32yey",modal:"Modal_modal__12Dwg",wrapper:"Modal_wrapper__2ZXWO",content:"Modal_content__1p9W-",header:"Modal_header__2-zzu",title:"Modal_title__1lrnN",button_close:"Modal_button_close__WOKB0",body:"Modal_body__2Zaoh",genres:"Modal_genres__1flLK",description:"Modal_description__1Mdwp"}}},[[58,1,2]]]);
//# sourceMappingURL=main.32ca30aa.chunk.js.map