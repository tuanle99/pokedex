(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{72:function(e,t){},81:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(59),s=c.n(r),i=(c(72),c(34)),j=c(15),o=c(38),l=c(114),u=c(108),b=c(113),d=c(2);function h(e){return Object(d.jsx)(b.a,Object(o.a)({component:"a",onClick:function(e){e.preventDefault()}},e))}var x=function(){var e=Object(j.f)();return Object(d.jsx)(l.a,{sx:{width:"100%"},children:Object(d.jsxs)(u.a,{onChange:function(t,c){!function(t){if(1===t)e.push("/listPokemon");else e.push("/home")}(c)},"aria-label":"header nav",children:[Object(d.jsx)(h,{label:"Home"}),Object(d.jsx)(h,{label:"Pokemon"})]})})},O=c(115),f=c(116);var p=function(){return Object(d.jsxs)(O.a,{sx:{mt:"2rem",textAlign:"center"},children:[Object(d.jsx)(f.a,{}),"All Code Belong to Tuan Le"]})};var m=function(){var e=Object(j.f)();return Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(t){e.push("/pokemon/1")},children:"Home Page"})})},g=c(45),k=c(12),v=c(7),y=c(117),A=c(112),S=c(118),w=c(119),C=c(120),F=c(121),D=c(122),E=c(107),P=c(123);var B=function(e){var t=e.match.params.id,c=Object(n.useState)(!1),a=Object(k.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),j=Object(k.a)(i,2),l=j[0],u=j[1],b=Object(n.useState)(""),h=Object(k.a)(b,2),x=h[0],f=h[1],p=Object(n.useState)([]),m=Object(k.a)(p,2),B=m[0],_=m[1],H=Object(n.useState)(""),T=Object(k.a)(H,2),I=T[0],L=T[1],N=Object(n.useState)([]),J=Object(k.a)(N,2),M=J[0],U=J[1],W=Object(n.useState)(""),z=Object(k.a)(W,2),R=z[0],q=z[1],G=Object(n.useState)(0),K=Object(k.a)(G,2),Q=K[0],V=K[1],X=Object(n.useState)(0),Y=Object(k.a)(X,2),Z=Y[0],$=Y[1],ee=Object(v.a)(y.a)((function(e){var t=e.theme;return Object(o.a)(Object(o.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function te(e){switch(e){case"normal":return"#A8A77A";case"fire":return"#EE8130";case"water":return"#6390F0";case"electric":return"#F7D02C";case"grass":return"#7AC74C";case"ice":return"#96D9D6";case"fighting":return"#C22E28";case"poison":return"#A33EA1";case"ground":return"#E2BF65";case"flying":return"#A98FF3";case"psychic":return"#F95587";case"bug":return"#A6B91A";case"rock":return"#B6A136";case"ghost":return"#735797";case"dragon":return"#6F35FC";case"dark":return"#705746";case"steel":return"#B7B7CE";case"fairy":return"#D685AD";default:return""}}function ce(e){switch(e){case"hp":return"HP";case"attack":return"Attack";case"defense":return"Defense";case"special-attack":return"Sp.Atk";case"special-defense":return"Sp.Def";case"speed":return"Speed";default:return""}}function ne(e){return e<60?"#ff7f0f":e<90?"#ffdd57":e<120?"#a0e515":"#00c2b8"}return Object(n.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){return e.json()})).then((function(e){u(e.forms[0].name),f(e.sprites.other["official-artwork"].front_default),_(e.stats),e.id<10?L("00".concat(e.id)):e.id<100?L("0".concat(e.id)):L("".concat(e.id)),U(e.types),V(e.height/10),$(e.weight/10)})).catch((function(e){console.log("Not current index"),s(!0)})),fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(t)).then((function(e){return e.json()})).then((function(e){var t,c=Object(g.a)(e.genera);try{for(c.s();!(t=c.n()).done;){var n=t.value;"en"===n.language.name&&q(n.genus)}}catch(a){c.e(a)}finally{c.f()}}))}),[]),Object(d.jsx)("div",{children:r?Object(d.jsx)("div",{children:"Pokemon Not Found"}):Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(A.a,{container:!0,item:!0,sx:{mt:"10rem"},children:[Object(d.jsx)(A.a,{item:!0,xs:12,children:Object(d.jsx)(ee,{style:{fontSize:"20px",fontWeight:"bold"},children:l.charAt(0).toUpperCase()+l.slice(1)})}),Object(d.jsx)(A.a,{item:!0,xs:12,md:6,children:Object(d.jsx)("img",{src:x,alt:"front",style:{width:"100%",height:"100%"},sx:{px:"2rem"}})}),Object(d.jsxs)(A.a,{item:!0,xs:12,md:6,children:[Object(d.jsx)(ee,{sx:{mt:"2rem"},children:"Pok\xe9dex data"}),Object(d.jsx)(S.a,{component:y.a,children:Object(d.jsx)(w.a,{"aria-label":"simple table",children:Object(d.jsxs)(C.a,{children:[Object(d.jsxs)(F.a,{children:[Object(d.jsx)(D.a,{style:{width:"30%"},children:"National \u2116"}),Object(d.jsx)(D.a,{children:Object(d.jsx)("b",{children:I})})]}),Object(d.jsxs)(F.a,{children:[Object(d.jsx)(D.a,{style:{width:"30%"},children:"Type"}),Object(d.jsx)(D.a,{style:{padding:0},children:M.map((function(e){return Object(d.jsx)("div",{sx:{m:1},style:{borderRadius:10,padding:5,backgroundColor:te(e.type.name),display:"inline-block",width:"3rem",textAlign:"center",marginInline:"5px"},children:e.type.name},e.type.name)}))})]}),Object(d.jsxs)(F.a,{children:[Object(d.jsx)(D.a,{style:{width:"30%"},children:"Species"}),Object(d.jsx)(D.a,{children:R})]}),Object(d.jsxs)(F.a,{children:[Object(d.jsx)(D.a,{style:{width:"30%"},children:"Height"}),Object(d.jsxs)(D.a,{children:[Q," m"]})]}),Object(d.jsxs)(F.a,{children:[Object(d.jsx)(D.a,{style:{width:"30%"},children:"Weight"}),Object(d.jsxs)(D.a,{children:[Z," kg"]})]})]})})})]})]}),Object(d.jsxs)(A.a,{item:!0,xs:12,sx:{mt:"2rem"},children:[Object(d.jsx)(ee,{children:"Stats"}),Object(d.jsx)(S.a,{component:y.a,children:Object(d.jsx)(w.a,{"aria-label":"simple table",children:Object(d.jsx)(C.a,{children:B.map((function(e){return Object(d.jsxs)(F.a,{children:[Object(d.jsx)(D.a,{style:{width:"10%",textAlign:"right"},children:ce(e.stat.name)}),Object(d.jsx)(D.a,{style:{width:"5%",textAlign:"left"},children:e.base_stat}),Object(d.jsx)(D.a,{style:{width:"85%",textAlign:"left"},children:Object(d.jsx)(E.a,{sx:{color:ne(e.base_stat)},children:Object(d.jsx)(P.a,{variant:"determinate",color:"inherit",value:(t=e.base_stat,100*(t-0)/180)})})})]},e.stat.name);var t}))})})})]})]})})},_=c(13),H=c(124),T=c(109),I=c(125),L=c(126),N=c(127),J=c(110);var M=function(e){var t=Object(j.f)(),c=Object(n.useState)(!0),a=Object(k.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)([]),o=Object(k.a)(i,2),l=o[0],u=o[1],b=Object(n.useState)(0),h=Object(k.a)(b,2),x=h[0],f=h[1];function p(e){u([]),fetch(e).then((function(e){return e.json()})).then((function(e){f(Math.floor(e.count/12));var t,c=Object(g.a)(e.results);try{var n=function(){var e=t.value;fetch(e.url).then((function(e){return e.json()})).then((function(t){u((function(c){return[].concat(Object(_.a)(c),[{id:t.id,name:e.name,url:e.url,image_url:t.sprites.other["official-artwork"].front_default}])}))}))};for(c.s();!(t=c.n()).done;)n()}catch(a){c.e(a)}finally{c.f()}s(!1)}))}return Object(n.useEffect)((function(){p("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12")}),[]),Object(d.jsx)(O.a,{sx:{mt:"5rem"},children:r?Object(d.jsx)(O.a,{sx:{textAlign:"center"},children:Object(d.jsx)(H.a,{})}):Object(d.jsxs)(O.a,{children:[Object(d.jsx)(A.a,{container:!0,children:l.map((function(e){return Object(d.jsx)(A.a,{item:!0,xs:6,md:3,sx:{p:"1rem"},children:Object(d.jsx)(T.a,{onClick:function(c){t.push("/pokemon/".concat(e.id))},children:Object(d.jsxs)(I.a,{children:[Object(d.jsx)(L.a,{component:"img",image:e.image_url,alt:e.name}),Object(d.jsxs)(N.a,{children:[e.id,".",(c=e.name,c.charAt(0).toUpperCase()+c.slice(1))]})]})})},e.id);var c}))}),Object(d.jsx)(O.a,{style:{flex:1},sx:{m:"1rem"},children:Object(d.jsx)(J.a,{count:x,onChange:function(e,t){p("https://pokeapi.co/api/v2/pokemon?offset=".concat(12*(t-1),"&limit=12"))}})})]})})};var U=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(x,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",component:m}),Object(d.jsx)(j.a,{exact:!0,path:"/pokemon/:id",component:B}),Object(d.jsx)(j.a,{exact:!0,path:"/listPokemon/",component:M})]}),Object(d.jsx)(p,{})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,128)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),W()}},[[81,1,2]]]);
//# sourceMappingURL=main.6b3f5a75.chunk.js.map