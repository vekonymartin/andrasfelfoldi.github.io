(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=(n(144),n(145),n(146),n(147),n(7)),s=n.n(r),a=(n(32),n(33)),l=n.n(a);function c(e){return Math.floor(Math.random()*Math.floor(e))}var d=function(e){function t(t){var n;return(n=e.call(this,t)||this).classes=["bubbleIn","bubbleOut"],n.current=1,n.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},n.getRandomTop=function(){return c(n.window.innerHeight)},n.getRandomLeft=function(){return c(n.window.innerWidth)},n.infinitelyToggleClass=function(){n.current=n.current>=n.classes.length-1?0:n.current+1,n.lastTop=0===n.current?n.getRandomTop():n.lastTop,n.lastLeft=0===n.current?n.getRandomLeft():n.lastLeft,n.setState({className:n.classes[n.current]}),setTimeout(function(){n.infinitelyToggleClass()},1e3+c(3e3))},n.state={width:0,height:0,className:""},n.lastTop=n.getRandomTop(),n.lastLeft=n.getRandomLeft(),n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.window=window,this.lastTop=this.getRandomTop(),this.lastLeft=this.getRandomLeft(),setTimeout(function(){e.infinitelyToggleClass()},1e3+c(5e3))},n.render=function(){return o.a.createElement("div",{style:{position:"absolute",top:this.lastTop,left:this.lastLeft},className:this.state.className},this.props.children)},t}(o.a.Component),u=function(e){function t(t){var n,i=(n=e.call(this,t)||this).props.isMobileDevice?5:10;n.devChars=[];for(var r=0;r<i;r++)n.devChars.push(o.a.createElement(d,{key:"</>"+r},"</>"));for(var s=0;s<i;s++)n.devChars.push(o.a.createElement(d,{key:"{ }"+s},"{ }"));for(var a=0;a<i;a++)n.devChars.push(o.a.createElement(d,{key:"[ ]"+a},"[ ]"));return n}return s()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"",style:{fontFamily:"Staatliches, cursive"}},this.devChars)},t}(i.Component),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).style={display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Staatliches, cursive",width:"100%"},n.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},n.state={width:0,height:0,isMobileDevice:!0},n.updateWindowDimensions=n.updateWindowDimensions.bind(l()(n)),n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),this.isMobileDevice()||(window.addEventListener("resize",this.updateWindowDimensions),this.setState({isMobileDevice:!1}))},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.updateWindowDimensions=function(){this.setState({height:window.innerHeight})},n.render=function(){return o.a.createElement("div",{id:this.props.id,className:"fadeInMoveUpBanner",style:Object.assign({},this.style,{height:this.state.height,overflow:"hidden"})},o.a.createElement(u,{isMobileDevice:this.state.isMobileDevice}),o.a.createElement("div",{style:{fontSize:"4em"}},"Welcome!"))},t}(i.Component),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},n.state={width:0,height:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(l()(n)),n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),this.isMobileDevice()||window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.updateWindowDimensions=function(){this.setState({height:window.innerHeight})},n.render=function(){return o.a.createElement("div",{id:this.props.id,style:Object.assign({},f,this.props.style,{width:"100%",height:this.state.height})},this.props.children)},t}(i.Component),f={display:"flex",justifyContent:"center",alignItems:"center"},p=m,w=n(148),v=n.n(w),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidMount=function(){window.addEventListener("scroll",n.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",n.handleScroll)},n.handleScroll=function(){n.ref.current.getBoundingClientRect().top<.75*window.innerHeight&&(n.setState({className:"fadeInMoveUp"}),window.removeEventListener("scroll",n.handleScroll))},n.ref=o.a.createRef(),n.state={className:""},n}return s()(t,e),t.prototype.render=function(){return o.a.createElement("div",{ref:this.ref,style:{opacity:0},className:this.state.className},this.props.children)},t}(o.a.Component),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidMount=function(){n.setState({height:window.innerHeight/2,width:window.innerWidth/2})},n.ref=o.a.createRef(),n.state={height:0,width:0},n}return s()(t,e),t.prototype.render=function(){var e={};return this.state.width<=this.state.height?e.width=this.state.width/2:e.height=this.state.height,o.a.createElement(g,null,o.a.createElement("img",Object.assign({src:v.a},e)))},t}(o.a.Component),E=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={isMobileDevice:!0},t.isMobileDevice=function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.isMobileDevice()||this.setState({isMobileDevice:!1})},n.render=function(){return o.a.createElement("div",null,o.a.createElement(h,{id:"banner"}),o.a.createElement(p,{id:"section 1",style:{backgroundColor:"#222222"}},o.a.createElement(b,null)),o.a.createElement(p,{id:"section 2",style:{backgroundColor:"#333333"}},o.a.createElement(g,null,"Section 2")),o.a.createElement(p,{id:"section 3",style:{backgroundColor:"#444444"}},o.a.createElement(g,null,"Section 3")),o.a.createElement(p,{id:"section 4",style:{backgroundColor:"#555555"}},o.a.createElement(g,null,"Section 4")),o.a.createElement("div",{id:"topBorder",style:{position:"fixed",top:0,left:0,width:"100%",height:10,backgroundColor:"#888888"}}),o.a.createElement("div",{id:"bottomBorder",style:{position:"fixed",bottom:0,left:0,width:"100%",height:10,backgroundColor:"#888888"}}),o.a.createElement("div",{id:"leftBorder",style:{position:"fixed",bottom:0,left:0,width:10,height:this.state.isMobileDevice?"200%":"100%",backgroundColor:"#888888"}}),o.a.createElement("div",{id:"rightBorder",style:{position:"fixed",bottom:0,right:0,width:10,height:this.state.isMobileDevice?"200%":"100%",backgroundColor:"#888888"}}))},t}(i.Component),y=(n(73),n(143)),C={SCROLL_POSITION_CHANGED:"SCROLL_POSITION_CHANGED"},S=n(157),D=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={rotate180:!1,rotateback:!1},t.scrollSectionIds=["banner","section 1","section 2","section 3","section 4"],t.nextSection=null,t.componentDidMount=function(){window.addEventListener("scroll",t.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.handleScroll)},t.handleScroll=Object(S.debounce)(function(){var e=null,n=t.scrollSectionIds.length;t.scrollSectionIds.forEach(function(t,i){var o=document.getElementById(t);null===e&&o.getBoundingClientRect().top>0&&i<n&&!(i===n-1&&o.getBoundingClientRect().bottom<=window.innerHeight)&&(e=o)}),null===e?(e=document.getElementById(t.scrollSectionIds[0]),t.setState({rotate180:!0,rotateback:!1})):t.state.rotate180&&t.setState({rotate180:!1,rotateback:!0}),t.nextSection=e},50),t.onClick=function(){null===t.nextSection&&(t.nextSection=document.getElementById(t.scrollSectionIds[1])),window.scrollBy({top:t.nextSection.getBoundingClientRect().top+1,behavior:"smooth"})},t}return s()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:I},o.a.createElement("div",{className:this.state.rotate180?"rotate180":this.state.rotateback?"rotateFrom180To0":null},o.a.createElement("i",{className:"material-icons",style:L,onClick:this.onClick},"keyboard_arrow_down")))},t}(o.a.Component),M=Object(y.b)(function(e){return{scrollPosition:e.scroll.position,maxPosition:e.scroll.maxPosition}},function(e){return{changeScrollPosition:function(t){return e(function(e){return{type:C.SCROLL_POSITION_CHANGED,data:{position:e}}}(t))}}})(D),I={width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",bottom:"1em"},L={cursor:"pointer",userSelect:"none"},O=n(141);var k=Object(O.b)({scroll:function(e,t){switch(void 0===e&&(e={position:0,maxPosition:4}),t.type){case C.SCROLL_POSITION_CHANGED:return Object.assign({},e,{position:t.data.position});default:return e}}}),x=Object(O.c)(k);t.default=function(){return o.a.createElement(y.a,{store:x},o.a.createElement("div",null,o.a.createElement(E,null),o.a.createElement(M,null)))}},148:function(e,t,n){e.exports=n.p+"static/light-theme-c0919ddc5a6798b0754f66fb3bc0f262.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-7b83a32455ff0f968223.js.map