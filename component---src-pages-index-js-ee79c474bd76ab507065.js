(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),r=(n(144),n(145),n(146),n(147),n(7)),s=n.n(r),a=(n(32),n(33)),c=n.n(a),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={width:0,height:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(c()(n)),n}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.updateWindowDimensions=function(){this.setState({height:window.innerHeight})},n.render=function(){return o.a.createElement("div",{id:this.props.id,className:"fadeInMoveUp",style:Object.assign({},d,{fontSize:"4em",width:"100%",height:this.state.height})},"Welcome!")},e}(i.Component),d={display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Staatliches, cursive"},u=l,h=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={width:0,height:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(c()(n)),n}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.updateWindowDimensions=function(){this.setState({height:window.innerHeight})},n.render=function(){return o.a.createElement("div",{id:this.props.id,style:Object.assign({},m,this.props.style,{width:"100%",height:this.state.height})},this.props.children)},e}(i.Component),m={display:"flex",justifyContent:"center",alignItems:"center"},p=h,f=n(148),w=n.n(f),g=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).state={height:0},e}s()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.setState({height:window.innerHeight/2})},n.render=function(){return o.a.createElement("div",null,o.a.createElement("img",{src:w.a,height:this.state.height}))},e}(o.a.Component),y=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(u,{id:"banner"}),o.a.createElement(p,{id:"section 1",style:{backgroundColor:"#222222"}},o.a.createElement(g,null)),o.a.createElement(p,{id:"section 2",style:{backgroundColor:"#333333"}},"Section 2"),o.a.createElement(p,{id:"section 3",style:{backgroundColor:"#444444"}},"Section 3"),o.a.createElement(p,{id:"section 4",style:{backgroundColor:"#555555"}},"Section 4"),o.a.createElement("div",{id:"topBorder",style:{position:"fixed",top:0,left:0,width:"100%",height:10}}),o.a.createElement("div",{id:"bottomBorder",style:{position:"fixed",bottom:0,left:0,width:"100%",height:10}}),o.a.createElement("div",{id:"leftBorder",style:{position:"fixed",top:0,left:0,width:10,height:"100%"}}),o.a.createElement("div",{id:"rightBorder",style:{position:"fixed",top:0,right:0,width:10,height:"100%"}}))},e}(i.Component),E=(n(73),n(143)),v={SCROLL_POSITION_CHANGED:"SCROLL_POSITION_CHANGED"},S=n(157),b=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).state={rotate180:!1,rotateback:!1},e.scrollSectionIds=["banner","section 1","section 2","section 3","section 4"],e.nextSection=null,e.componentDidMount=function(){window.addEventListener("scroll",e.handleScroll)},e.componentWillUnmount=function(){window.removeEventListener("scroll",e.handleScroll)},e.handleScroll=Object(S.debounce)(function(){var t=null;e.scrollSectionIds.forEach(function(n,i){var o=document.getElementById(n);null===t&&o.getBoundingClientRect().top>0&&i<e.scrollSectionIds.length&&(t=o)}),null===t?(t=document.getElementById(e.scrollSectionIds[0]),e.setState({rotate180:!0,rotateback:!1})):e.state.rotate180&&e.setState({rotate180:!1,rotateback:!0}),e.nextSection=t},100),e.onClick=function(){null===e.nextSection&&(e.nextSection=document.getElementById(e.scrollSectionIds[1])),e.nextSection.scrollIntoView({behavior:"smooth"})},e}return s()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:I},o.a.createElement("div",{className:this.state.rotate180?"rotate180":this.state.rotateback?"rotateFrom180To0":null},o.a.createElement("i",{className:"material-icons",style:D,onClick:this.onClick},"keyboard_arrow_down")))},e}(o.a.Component),C=Object(E.b)(function(t){return{scrollPosition:t.scroll.position,maxPosition:t.scroll.maxPosition}},function(t){return{changeScrollPosition:function(e){return t(function(t){return{type:v.SCROLL_POSITION_CHANGED,data:{position:t}}}(e))}}})(b),I={width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",bottom:"1em"},D={cursor:"pointer",userSelect:"none"},O=n(141);var x=Object(O.b)({scroll:function(t,e){switch(void 0===t&&(t={position:0,maxPosition:4}),e.type){case v.SCROLL_POSITION_CHANGED:return Object.assign({},t,{position:e.data.position});default:return t}}}),W=Object(O.c)(x);e.default=function(){return o.a.createElement(E.a,{store:W},o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(C,null)))}},148:function(t,e,n){t.exports=n.p+"static/light-theme-c0919ddc5a6798b0754f66fb3bc0f262.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-ee79c474bd76ab507065.js.map