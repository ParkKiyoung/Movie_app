(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n.n(c),i=n(31),r=n.n(i),o=(n(38),n(8)),j=n(2);n(39);var l=function(e){return console.log(e),Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("span",{children:'"\uc2dc\uc791\uc774 \ub290\ub9ac\uae30 \ub54c\ubb38\uc5d0 \ub354\uc5f4\uc2ec\ud788 \ud574\uc57c\ud574"'}),Object(s.jsx)("span",{children:"20201229"})]})},d=n(10),h=n.n(d),b=n(12),m=n(13),u=n(14),x=n(17),O=n(16),v=n(15),p=n.n(v);n(59);var g=function(e){var t=e.id,n=e.title,c=e.year,a=e.summary,i=e.poster,r=e.genres;return Object(s.jsx)("div",{className:"movie",children:Object(s.jsxs)(o.b,{to:{pathname:"/movie-detail",state:{id:t}},children:[Object(s.jsx)("img",{src:i,alt:n,title:n}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",style:{backgroundColor:"red"},children:n}),Object(s.jsx)("h5",{className:"movie__year",children:c}),Object(s.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(s.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},f=(n(65),function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[]},e.getMovies=Object(b.a)(h.a.mark((function t(){var n,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentWillUnmount",value:function(){console.log("Home Unmount")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component));n(66);var _=function(){return Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})},y=(n(67),function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,id:0,movie:[]},e.getMovieDetail=Object(b.a)(h.a.mark((function t(){var n,s,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.location,t.next=3,p.a.get("https://yts-proxy.now.sh/movie_details.json?movie_id="+n.state.id);case 3:s=t.sent,(c=s.data.data.movie)?e.setState({movie:c,isLoading:!1}):(alert("\uc0c1\uc138\uc815\ubcf4\ub97c \ucc3e\uc744\uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),e.props.history.push("/"));case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state?n.push("/"):this.getMovieDetail()}},{key:"render",value:function(){var e=this.props.location,t=this.state,n=t.isLoading,c=t.movie;return e.state?Object(s.jsx)("section",{className:"container",children:n?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movie_detail",children:Object(s.jsxs)("table",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{rowSpan:"6",children:Object(s.jsx)("img",{src:c.medium_cover_image,alt:c.title})}),Object(s.jsx)("td",{children:"title"}),Object(s.jsx)("td",{children:c.title})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"year"}),Object(s.jsx)("td",{children:c.year})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"genres"}),Object(s.jsx)("td",{children:c.genres.map((function(e,t){return Object(s.jsxs)("span",{children:[e," "]},t)}))})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"rating"}),Object(s.jsx)("td",{children:c.rating})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"year"}),Object(s.jsx)("td",{children:c.year})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Download Count"}),Object(s.jsx)("td",{children:c.download_count})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"Description"}),Object(s.jsx)("td",{colSpan:"2",children:c.description_full})]})]})})}):null}}]),n}(a.a.Component));var N=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(_,{}),Object(s.jsx)(j.a,{path:"/about",component:l}),Object(s.jsx)(j.a,{path:"/",exact:!0,component:f}),Object(s.jsx)(j.a,{path:"/movie-detail",exact:!0,component:y})]})};r.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.a7be74c3.chunk.js.map