(this.webpackJsonpnews_feed_app=this.webpackJsonpnews_feed_app||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(27),s=n.n(o),r=(n(87),n(88),n(7)),c=n(5),u=n(133),l=n(2);function d(){var e=new Date,t=e.getDay(),n=e.getMonth(),i=e.getFullYear();return Object(l.jsx)("div",{children:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n]+" "+["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22th","23th","24th","25th","26th","27th","28th","29th","30th","31st"][t]+" "+i})}var p=function(e){var t=null===e||void 0===e?void 0:e.news[0],n=Object(c.f)(),i=function(){n.push("/".concat(t.id))},a=Object(u.a)((function(e){var t;return{root:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",alignItems:"center",padding:"15px",border:"1px solid #E2E2E2",maxWidth:"1500px",marginBottom:"15px",textAlign:"left",fontFamily:"Inter",color:"rgba(113, 128, 150, 1)"},descriptionWrapper:{maxWidth:"700px"},mainNewsFooter:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},mainNewsImage:(t={cursor:"pointer"},Object(r.a)(t,e.breakpoints.up(350),{width:"350px"}),Object(r.a)(t,e.breakpoints.up(1100),{width:"457px"}),t),mainNewsTitle:{cursor:"pointer",color:"rgba(45, 55, 72, 1)"},readMoreButton:{cursor:"pointer",color:"rgba(45, 55, 72, 1)"}}}))();return Object(l.jsxs)("div",{className:a.root,children:[Object(l.jsxs)("div",{className:a.descriptionWrapper,children:[Object(l.jsx)("h3",{onClick:i,className:a.mainNewsTitle,children:t.title}),Object(l.jsx)("p",{children:t.description}),Object(l.jsxs)("div",{className:a.mainNewsFooter,children:[Object(l.jsx)("span",{children:d(t.date)}),Object(l.jsx)("span",{className:a.readMoreButton,onClick:i,children:"Read more"})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{onClick:i,className:a.mainNewsImage,src:t.image,alt:"mainNewsCard"})})]})},h=n(143),m=n(135),b=n(136),j=n(137),x=n(138),f=n(139),O=function(e){var t=Object(u.a)((function(e){return{root:{justifyContent:"center",maxWidth:"500px",boxShadow:"none",paddingBottom:"15px"},media:Object(r.a)({width:"500px",height:"300px",margin:"5px"},e.breakpoints.down(700),{width:"400px"}),newsCardFooter:{justifyContent:"space-between"},newsCardDescription:{height:"130px",fontSize:"14px",fontFamily:"Inter",color:"rgba(113, 128, 150, 1)"},newsCardTitle:{height:"90px",fontWeight:"700",color:"rgba(45, 55, 72, 1)"},newsCardFooterDate:{color:"rgba(113, 128, 150, 1)",fontFamily:"Inter"},readMoreButton:{cursor:"pointer",fontFamily:"Inter"}}})),n=e.news,i=Object(c.f)(),a=function(){i.push("/".concat(n.id))},o=n.title.substr(0,60)+"...";return function(){var e=t();return Object(l.jsxs)(h.a,{className:e.root,children:[Object(l.jsxs)(m.a,{children:[Object(l.jsx)(b.a,{className:e.media,image:n.image,title:n.title,onClick:a}),Object(l.jsxs)(j.a,{children:[Object(l.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",onClick:a,className:e.newsCardTitle,children:o}),Object(l.jsx)(x.a,{variant:"body2",component:"p",className:e.newsCardDescription,children:n.description})]})]}),Object(l.jsxs)(f.a,{className:e.newsCardFooter,children:[Object(l.jsx)("span",{className:e.newsCardFooterDate,children:d(n.date)}),Object(l.jsx)("span",{className:e.readMoreButton,onClick:a,children:"Read more"})]})]})}()},g=(n(94),n(18)),v=n(34),w=n.n(v),y=n(53),N=n(55),k=n(21),A=n(54),q=n.n(A),C={method:"GET",url:"https://webit-news-search.p.rapidapi.com/trending",params:{language:"en"},headers:{"x-rapidapi-key":"2e6c8a6e51mshe976668d1bc55dbp13043fjsnd1c9c62f686b","x-rapidapi-host":"webit-news-search.p.rapidapi.com"}},I=function(){return q.a.request(C).then((function(e){return e.data})).catch((function(e){console.error(e)}))},T=function(e){var t={method:"GET",url:"https://webit-news-search.p.rapidapi.com/search",params:{q:e,language:"en",number:"10",offset:"0"},headers:{"x-rapidapi-key":"2e6c8a6e51mshe976668d1bc55dbp13043fjsnd1c9c62f686b","x-rapidapi-host":"webit-news-search.p.rapidapi.com"}};return q.a.request(t).then((function(e){return e.data})).catch((function(e){console.error(e)}))},S="IS_LOADING",B={isLoading:!1},F=function(e){return{type:S,isLoading:e}},R="ADD_NEWS",D="SORT_BY_CATEGORY",E={news:[]},U=function(e){return function(){var t=Object(y.a)(w.a.mark((function t(n){var i;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("ADD"!==e){t.next=7;break}return n(F(!0)),t.next=4,I();case 4:i=t.sent,n((a=i.data.results,{type:R,news:a})),n(F(!1));case 7:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},z=function(e,t){return function(){var n=Object(y.a)(w.a.mark((function n(i){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("SORT"!==t){n.next=7;break}return i(F(!0)),n.next=4,T(e);case 4:a=n.sent,i((o=a.data.results,{type:D,news:o})),i(F(!1));case 7:case"end":return n.stop()}var o}),n)})));return function(e){return n.apply(this,arguments)}}()},W=n(140),M=n(141),X=n.p+"static/media/6.b7edff4d.svg",G=function(){var e=Object(u.a)((function(){return{root:{position:"absolute",zIndex:"99",left:"50%",top:"25%"}}}))();return Object(l.jsx)("div",{className:e.root,children:Object(l.jsx)("img",{src:X,alt:"preloader"})})},P=function(){var e=Object(u.a)((function(){return{root:{justifyContent:"space-around",textAlign:"left"},mainBodyWrapper:{textAlign:"-webkit-center"},scrollTopBtn:{display:"none",position:"fixed",bottom:"20px",right:"30px",zIndex:"99"}}}))(),t=Object(g.c)((function(e){return e.news.news[0]})),n=Object(g.c)((function(e){return e.loading.isLoading})),a=Object(g.b)();Object(i.useEffect)((function(){a(U("ADD"))}),[a]);var o=document.getElementById("myBtn");return window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?o.style.display="block":o.style.display="none"},Object(l.jsxs)("div",{className:e.mainBodyWrapper,children:[Object(l.jsxs)("div",{children:[n&&Object(l.jsx)(G,{}),function(e){if(e)return Object(l.jsx)(p,{news:e})}(t)]}),Object(l.jsx)("div",{children:function(t){if(t){var n=t.slice(1,10).map((function(e){return Object(l.jsx)(O,{news:e},e.id)}));return Object(l.jsx)("div",{children:Object(l.jsx)(W.a,{container:!0,className:e.root,children:n})})}}(t)}),Object(l.jsx)(M.a,{id:"myBtn",onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},className:e.scrollTopBtn,children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"buttonIco"})})]})},Z=n(56),K=n(74),Q=n.n(K),J=n(73),H=n.n(J),L=(n(114),n(72)),Y=n.n(L),V=n(142),_=n(77),$=function(e){var t=Object(u.a)((function(){return{searchItem:{"&:hover":{color:"#2F80ED",cursor:"pointer"}}}}))(),n=Object(c.f)(),i=e.title;return Object(l.jsx)("div",{className:t.searchItem,onClick:function(){n.push("/".concat(e.id))},children:i.title})},ee=function(){var e=Object(u.a)((function(e){return{searchBar:Object(r.a)({display:"flex",alignItems:"flex-end",position:"relative"},e.breakpoints.down(700),{marginTop:"50px"}),inputField:Object(r.a)({width:"450px"},e.breakpoints.down(700),{width:"300px"}),searchResults:{position:"absolute",top:" 50px",background:"white",borderRadius:"5px",padding:"15px",zIndex:"1",boxShadow:"0px 0px 4px #BDBDBD"}}}))(),t=Object(g.c)((function(e){return e.news.news[0]})),n=Object(_.a)({initialValues:{title:""},onSubmit:function(e){n.resetForm()}}),i=n.values,a=[];if(""!==i.title&&t)for(var o=0;o<t.length;o++){!0===t[o].title.includes(i.title)&&a.push(t[o])}return Object(l.jsxs)("div",{className:e.searchBar,children:[Object(l.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(l.jsx)(M.a,{type:"submit",children:Object(l.jsx)(Y.a,{})}),Object(l.jsx)(V.a,Object(k.a)(Object(k.a)({className:e.inputField,placeholder:"Type something to start search"},n.getFieldProps("title")),{},{onChange:n.handleChange,value:n.values.title}))]}),function(t){var i=t.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:Object(l.jsx)("li",{onClick:n.resetForm,children:Object(l.jsx)($,{title:e,id:e.id},e.id)})})})}));if(i.length>0)return Object(l.jsx)("div",{className:e.searchResults,children:i})}(a)]})},te=function(){var e=Object(u.a)((function(e){var t,n;return{root:{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",height:"60px",marginBottom:"30px",fontFamily:"Inter"},textField:{width:"350px"},logoItem:(t={cursor:"pointer",position:"absolute",left:"60px"},Object(r.a)(t,e.breakpoints.down(700),{left:"20px"}),Object(r.a)(t,"fontWeight","700"),Object(r.a)(t,"fontSize","20px"),t),categoriesWrapper:{display:"flex",justifyContent:"space-between",position:"relative",cursor:"pointer",width:"250px"},button:{position:"absolute",right:"15px"},dropDownItems:(n={display:"flex",justifyContent:"space-between",width:"140px",position:"absolute"},Object(r.a)(n,e.breakpoints.up(350),{top:"120px",right:"50%"}),Object(r.a)(n,e.breakpoints.up(1100),{top:"50px",right:"20%"}),Object(r.a)(n,"background","white"),Object(r.a)(n,"padding","15px"),Object(r.a)(n,"borderRadius","5px"),n),dropdownItem:{"&:hover":{color:"#2F80ED",cursor:"pointer"}}}}))(),t=Object(c.f)(),n=Object(g.b)(),a=Object(i.useState)(!1),o=Object(Z.a)(a,2),s=o[0],d=o[1],p=Object(i.useState)(!1),h=Object(Z.a)(p,2),m=h[0],b=h[1];function j(){b(!0),!0===m&&b(!1)}var x=function(){n(U("ADD")),t.push("/")},f=function(){n(z("sport","SORT")),b(!1)},O=function(){n(z("World","SORT")),b(!1)},v=function(){n(z("Covid","SORT")),b(!1)},w=function(){n(z("Business","SORT")),b(!1)},y=function(){n(z("Politics","SORT")),b(!1)},N=function(){n(z("Science","SORT")),b(!1)},k=function(){n(z("Religion","SORT")),b(!1)},A=function(){n(z("Health","SORT")),b(!1)};return Object(l.jsxs)("div",{className:e.root,children:[Object(l.jsx)("span",{onClick:function(){t.push("/")},className:e.logoItem,children:"News App"}),Object(l.jsx)(ee,{}),function(){if(!0===s)return Object(l.jsxs)("div",{className:e.categoriesWrapper,children:[Object(l.jsx)("div",{onMouseOver:j,children:"Categories"}),Object(l.jsx)("div",{onClick:x,children:"\u26a1\ufe0f Trending news"})]})}(),function(){if(!0===m)return Object(l.jsxs)("div",{className:"".concat(e.dropDownItems,"  ","arrow_box"),children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:e.dropdownItem,onClick:f,children:"Sport"}),Object(l.jsx)("div",{className:e.dropdownItem,onClick:O,children:"World"}),Object(l.jsx)("div",{className:e.dropdownItem,onClick:v,children:"Covid"}),Object(l.jsx)("div",{className:e.dropdownItem,onClick:w,children:"Business"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:e.dropdownItem,onClick:y,children:"Politics"}),Object(l.jsx)("div",{className:e.dropdownItem,onClick:N,children:"Science"}),Object(l.jsx)("div",{className:e.dropdownItem,onClick:k,children:"Religion"}),Object(l.jsx)("div",{className:e.dropdownItem,onClick:A,children:"Health"})]})]})}(),Object(l.jsx)(M.a,{className:e.button,onClick:function(){d(!0),!0===s&&(d(!1),b(!1))},children:!0===s?Object(l.jsx)(H.a,{}):!1===s?Object(l.jsx)(Q.a,{}):void 0})]})},ne=function(){var e=Object(g.c)((function(e){return e.news.news[0]})),t=Object(c.g)(),n=e.find((function(e){return e.id===t.id})),i=Object(u.a)((function(e){var t,n,i;return{root:{textAlign:"center",fontFamily:"Inter",color:"rgba(113, 128, 150, 1)"},mainImage:(t={},Object(r.a)(t,e.breakpoints.up(300),{maxWidth:"400px",marginTop:"50px",minWidth:"400px"}),Object(r.a)(t,e.breakpoints.up(1100),{maxWidth:"800px"}),t),title:(n={fontWeight:"700",fontSize:"45px"},Object(r.a)(n,e.breakpoints.down(700),{fontSize:"30px"}),Object(r.a)(n,"color","rgba(45, 55, 72, 1)"),n),authorDate:{display:"flex",flexWrap:"wrap"},contentBlock:(i={},Object(r.a)(i,e.breakpoints.up(300),{padding:"15px"}),Object(r.a)(i,e.breakpoints.up(1100),{paddingLeft:"25%"}),Object(r.a)(i,"maxWidth","765px"),Object(r.a)(i,"textAlign","left"),i),author:{color:"rgba(45, 55, 72, 1)",fontWeight:"700",fontSize:"18px"},date:{paddingLeft:"15px",fontSize:"18px"},titles:{color:"rgba(45, 55, 72, 1)"},typography:{fontSize:"16px"}}}))();return Object(l.jsx)("div",{children:function(e){if(e)return Object(l.jsxs)("div",{className:i.root,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:i.mainImage,src:null===n||void 0===n?void 0:n.image,alt:"newsImage"})}),Object(l.jsxs)("div",{className:i.contentBlock,children:[Object(l.jsx)("h2",{className:i.title,children:n.title}),Object(l.jsxs)("div",{className:i.authorDate,children:[Object(l.jsx)("span",{className:i.author,children:n.author}),Object(l.jsx)("span",{className:i.date,children:d(n.date)})]}),Object(l.jsx)("p",{children:n.description}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{className:i.titles,children:"The standard Lorem Ipsum passage, used since the 1500s"}),Object(l.jsx)("p",{className:i.typography,children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(l.jsx)("h4",{className:i.titles,children:'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'}),Object(l.jsx)("p",{className:i.typography,children:'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'}),Object(l.jsx)("h4",{className:i.titles,children:"1914 translation by H. Rackham"}),Object(l.jsx)("p",{className:i.typography,children:'"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'}),Object(l.jsx)("h4",{className:i.titles,children:'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'}),Object(l.jsx)("p",{className:i.typography,children:'"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."'}),Object(l.jsx)("h4",{className:i.titles,children:"1914 translation by H. Rackham"}),Object(l.jsx)("p",{className:i.typography,children:'"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'})]})]})]})}(e)})},ie=function(){var e=Object(u.a)((function(){return{footer:{padding:"20px",fontSize:"16px",fontFamily:"Inter"}}}))();return Object(l.jsxs)("div",{className:e.footer,children:[Object(l.jsx)("b",{children:"News App"})," 2021 copyright all rights reserved"]})};var ae=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(te,{}),Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{exact:!0,path:"/",children:Object(l.jsx)(P,{})}),Object(l.jsx)(c.a,{path:"/:id",children:Object(l.jsx)(ne,{})})]}),Object(l.jsx)(ie,{})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),o(e),s(e)}))},se=n(43),re=n(75),ce=Object(se.b)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:case D:return Object(k.a)(Object(k.a)({},e),{},{news:[t.news].concat(Object(N.a)(e.news))});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(k.a)(Object(k.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),ue=Object(se.c)(ce,Object(se.a)(re.a));window.store=ue;var le=ue,de=n(76);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g.a,{store:le,children:Object(l.jsx)(de.a,{children:Object(l.jsx)(ae,{})})})}),document.getElementById("root")),oe()},87:function(e,t,n){},88:function(e,t,n){},94:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.c65c561c.chunk.js.map