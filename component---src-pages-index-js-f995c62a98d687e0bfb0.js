(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=(n(144),n(145),n(146),n(147),n(7)),r=n.n(a),l=(n(32),n(33)),s=n.n(l);function c(e){return Math.floor(Math.random()*Math.floor(e))}var d=function(e){function t(t){var n;return(n=e.call(this,t)||this).classes=["bubbleIn","bubbleOut"],n.current=1,n.currentColor="#555555",n.updateWindowDimensions=function(){n.setState({height:window.innerHeight,width:window.innerWidth})},n.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},n.getRandomTop=function(){return c(n.state.height)},n.getRandomLeft=function(){return c(n.state.width)},n.infinitelyToggleClass=function(){n.current=n.current>=n.classes.length-1?0:n.current+1,n.lastTop=0===n.current?n.getRandomTop():n.lastTop,n.lastLeft=0===n.current?n.getRandomLeft():n.lastLeft,n.setState({className:n.classes[n.current]}),setTimeout(function(){n.infinitelyToggleClass()},1e3+c(3e3))},n.state={width:0,height:0,className:""},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.updateWindowDimensions(),this.isMobileDevice()||window.addEventListener("resize",this.updateWindowDimensions),this.lastTop=this.getRandomTop(),this.lastLeft=this.getRandomLeft(),setTimeout(function(){e.infinitelyToggleClass()},1e3+c(1e4))},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return o.a.createElement("div",{style:{opacity:0,position:"absolute",top:this.lastTop,left:this.lastLeft,color:this.currentColor,fontSize:"0.8em"},className:this.state.className},this.props.children)},t}(o.a.Component),u=function(e){function t(t){var n;(n=e.call(this,t)||this).devChars=[];for(var i=0;i<5;i++)n.devChars.push(o.a.createElement(d,{key:"</>"+i},"</>"));for(var a=0;a<5;a++)n.devChars.push(o.a.createElement(d,{key:"{ }"+a},"{ }"));for(var r=0;r<5;r++)n.devChars.push(o.a.createElement(d,{key:"[ ]"+r},"[ ]"));return n}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{fontFamily:"Staatliches, cursive"}},o.a.createElement(d,{key:0},"React"),o.a.createElement(d,{key:1},"Redux"),o.a.createElement(d,{key:2},"React Native"),o.a.createElement(d,{key:3},"Expo"),o.a.createElement(d,{key:4},"Babel"),o.a.createElement(d,{key:5},"Webpack"),o.a.createElement(d,{key:6},"Java"),o.a.createElement(d,{key:7},"JavaScript"),o.a.createElement(d,{key:8},"UI5"),o.a.createElement(d,{key:9},"ES6"),o.a.createElement(d,{key:10},"Spring"),o.a.createElement(d,{key:11},"Git"),o.a.createElement(d,{key:12},"Docker"),o.a.createElement(d,{key:13},"npm"),o.a.createElement(d,{key:14},"Maven"),o.a.createElement(d,{key:15},"Node.JS"))},t}(i.Component),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},n.state={width:0,height:0,isMobileDevice:!0},n.updateWindowDimensions=n.updateWindowDimensions.bind(s()(n)),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),this.isMobileDevice()||(window.addEventListener("resize",this.updateWindowDimensions),this.setState({isMobileDevice:!1}))},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.updateWindowDimensions=function(){this.setState({height:window.innerHeight})},n.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{id:this.props.id,style:Object.assign({},p.container,{height:this.state.height,width:"100%",overflow:"hidden"})},o.a.createElement(u,{isMobileDevice:this.state.isMobileDevice}),o.a.createElement("div",{style:Object.assign({},p.textContainer)},o.a.createElement("div",{style:{fontSize:"15vw"},className:"fadeInMoveUpBanner"},"Welcome!")),o.a.createElement("div",{style:Object.assign({},p.textContainer,{top:"50%",alignItems:"flex-start"})},o.a.createElement("div",{style:{fontSize:"5vw"},className:"fadeInMoveDownBanner"},"Thank you for visiting!"))),o.a.createElement("div",{id:"bannerHrContainer"},o.a.createElement("hr",{id:"bannerHr"})))},t}(i.Component),p={container:{display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Staatliches, cursive",width:"100%",position:"absolute",top:0,left:0},textContainer:{width:"100%",height:"50%",position:"absolute",top:0,left:0,overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"flex-end"}},f=m,h=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:this.props.id,style:Object.assign({},g,this.props.style,{width:"100%",height:"100vh"})},this.props.children)},t}(i.Component),g={display:"flex",justifyContent:"center",alignItems:"center"},v=h,E=n(148),y=n.n(E),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidMount=function(){window.addEventListener("scroll",n.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",n.handleScroll)},n.handleScroll=function(){n.ref.current.getBoundingClientRect().top<.75*window.innerHeight&&(n.setState({className:"fadeInMoveUp"}),window.removeEventListener("scroll",n.handleScroll))},n.ref=o.a.createRef(),n.state={className:""},n}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{ref:this.ref,style:{opacity:0},className:this.state.className,id:this.props.id},this.props.children)},t}(o.a.Component),w=function(e){return o.a.createElement("div",{style:e.style,id:"googlePlayBadgeDiv"},o.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.andrasfelfoldi.sdk&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"},o.a.createElement("img",{id:"googlePlayBadge",alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"})))},k=(n(149),n(150)),S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:this.props.id,className:"container"},o.a.createElement("div",{className:"flexContainer"},o.a.createElement("div",{className:"flexItem"},o.a.createElement(b,{id:"sudokuTitle"},k.title),o.a.createElement(b,{id:"firstSection"},k.line1),o.a.createElement(b,null,k.line2),o.a.createElement(b,null,o.a.createElement(w,null))),o.a.createElement("div",{className:"flexItem"},o.a.createElement(b,null,o.a.createElement("img",{id:"sudokuImage",src:y.a})))))},t}(o.a.Component),C=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={isMobileDevice:!0},t.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.isMobileDevice()||this.setState({isMobileDevice:!1})},n.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"topBorder",style:{position:"fixed",top:0,left:0,width:"100%",height:10,backgroundColor:"#888888"}}),o.a.createElement("div",{id:"bottomBorder",style:{position:"fixed",bottom:0,left:0,width:"100%",height:10,backgroundColor:"#888888"}}),o.a.createElement("div",{id:"leftBorder",style:{position:"fixed",bottom:0,left:0,width:10,height:this.state.isMobileDevice?"200%":"100%",backgroundColor:"#888888"}}),o.a.createElement("div",{id:"rightBorder",style:{position:"fixed",bottom:0,right:0,width:10,height:this.state.isMobileDevice?"200%":"100%",backgroundColor:"#888888"}}))},t}(o.a.Component),I=n(151),x=n.n(I),M=(n(152),n(153)),D=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:this.props.id,className:"container"},o.a.createElement("div",{className:"flexContainer"},o.a.createElement("div",{className:"flexItem"},o.a.createElement(b,{id:"title"},M.title),o.a.createElement(b,null,o.a.createElement("div",{className:"section"},M.line1)),o.a.createElement(b,null,o.a.createElement("div",{className:"section"},M.line2)),o.a.createElement(b,null,o.a.createElement("div",{className:"section"},M.line3)),o.a.createElement(b,null,o.a.createElement("div",{className:"section"},M.line4,o.a.createElement("a",{href:"https://github.com/andrasfelfoldi",style:{color:"#cfd8dc"}},M.line4link),M.line4end))),o.a.createElement("div",{className:"flexItem"},o.a.createElement(b,null,o.a.createElement("img",{id:"profilepic",src:x.a})))))},t}(o.a.Component),N=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(v,{id:"section 0"},o.a.createElement(f,{id:"banner"})),o.a.createElement(D,{id:"section 1"}),o.a.createElement(S,{id:"section 2"}),o.a.createElement(v,{id:"section 3"},o.a.createElement(b,null,"Section 3")),o.a.createElement(v,{id:"section 4"},o.a.createElement(b,null,"Google Play and the Google Play logo are trademarks of Google LLC. Android is a trademark of Google LLC.")),o.a.createElement(C,null))},t}(i.Component),L=(n(73),n(143)),O={SCROLL_POSITION_CHANGED:"SCROLL_POSITION_CHANGED"},R=n(162),T=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={rotate180:!1,rotateback:!1},t.scrollSectionIds=["banner","section 1","section 2","section 3","section 4"],t.nextSection=null,t.componentDidMount=function(){window.addEventListener("scroll",t.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.handleScroll)},t.handleScroll=Object(R.debounce)(function(){var e=null,n=t.scrollSectionIds.length;t.scrollSectionIds.forEach(function(t,i){var o=document.getElementById(t);null===e&&o.getBoundingClientRect().top>0&&i<n&&!(i===n-1&&o.getBoundingClientRect().bottom<=window.innerHeight)&&(e=o)}),null===e?(e=document.getElementById(t.scrollSectionIds[0]),t.setState({rotate180:!0,rotateback:!1})):t.state.rotate180&&t.setState({rotate180:!1,rotateback:!0}),t.nextSection=e},50),t.onClick=function(){null===t.nextSection&&(t.nextSection=document.getElementById(t.scrollSectionIds[1])),window.scrollBy({top:t.nextSection.getBoundingClientRect().top+1,behavior:"smooth"})},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:B},o.a.createElement("div",{className:this.state.rotate180?"rotate180":this.state.rotateback?"rotateFrom180To0":null},o.a.createElement("i",{className:"material-icons",style:P,onClick:this.onClick},"keyboard_arrow_down")))},t}(o.a.Component),j=Object(L.b)(function(e){return{scrollPosition:e.scroll.position,maxPosition:e.scroll.maxPosition}},function(e){return{changeScrollPosition:function(t){return e(function(e){return{type:O.SCROLL_POSITION_CHANGED,data:{position:e}}}(t))}}})(T),B={width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",bottom:"1em"},P={cursor:"pointer",userSelect:"none"},W=n(141);var A=Object(W.b)({scroll:function(e,t){switch(void 0===e&&(e={position:0,maxPosition:4}),t.type){case O.SCROLL_POSITION_CHANGED:return Object.assign({},e,{position:t.data.position});default:return e}}}),_=Object(W.c)(A);t.default=function(){return o.a.createElement(L.a,{store:_},o.a.createElement("div",null,o.a.createElement(N,null),o.a.createElement(j,null)))}},148:function(e,t,n){e.exports=n.p+"static/light-theme-c0919ddc5a6798b0754f66fb3bc0f262.png"},150:function(e){e.exports={title:"Sudoku Mobile",line1:"My current personal project is an Android™ application called Sudoku Mobile. Sudoku Mobile is built using React Native, Redux and Expo. It uses my own npm package to generate the puzzles.",line2:"It's free and does not contain any ads - for now - so if you like Sudoku or just puzzle games in general, give it a try! Please note that Sudoku Mobile is still in beta. Some performance improvements, additional features, an optional dark theme and other creature comforts and are still on the way!"}},151:function(e,t,n){e.exports=n.p+"static/profilepic-94e193546e8b9e0c63657cad92316add.jpg"},153:function(e){e.exports={title:"About Me",line1:"I'm András Felföldi, a 25 years old developer living in Vác, Hungary.",line2:"I'm currently working at SAP Hungary Kft. where my primary focus is developing SAPUI5 applications and Java Spring services occasionally.",line3:"In my freetime I like to work on personal projects using React, React Native and Unity. Im also planning to get into Angular and Vue.js sometime in the near future.",line4:"Currently, I'm working on a mobile game called Sudoku Mobile. It may not be open source, but my smaller projects are, so feel free to check them out on ",line4link:"GitHub",line4end:"!"}}}]);
//# sourceMappingURL=component---src-pages-index-js-f995c62a98d687e0bfb0.js.map