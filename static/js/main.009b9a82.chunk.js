(window["webpackJsonpcsv-editor-online"]=window["webpackJsonpcsv-editor-online"]||[]).push([[0],{144:function(e,t,n){e.exports=n(249)},232:function(e,t){},234:function(e,t){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var r,a=n(1),o=n.n(a),i=n(4),c=n.n(i),s=n(9),u=n(10),l=n(12),d=n(11),h=n(13),f=n(15),m=(n(149),n(135)),g=(n(251),n(95)),v=64,p=40,b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).renderLogo=function(){return o.a.createElement("div",{className:"logo"},"CSV Editor")},n.renderButtons=function(){var e=[T.CSV,T.GRID,T.JSON].map(function(e){return o.a.createElement(g.a.Item,{key:e,onClick:function(){return n.props.onModeChange(e)}},e)});return o.a.createElement(g.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[T.CSV],style:{lineHeight:"".concat(v,"px")}},e)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a.Header,null,this.renderLogo(),this.renderButtons())}}]),t}(a.Component),S=(n(210),n(141)),O=(n(212),n(97)),w=(n(213),n(16)),C=30,j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).renderGithubLink=function(){return o.a.createElement("a",{href:"https://github.com/LemonUnit/csv-editor-online",target:"_blank",className:"GitHubIcon",title:"Go to CSV Editor Online page on GitHub"},o.a.createElement(w.a,{type:"github"}))},n.renderLemonUnitLink=function(){return o.a.createElement("a",{href:"https://lemonunit.com/",target:"_blank",className:"LemonUnitIcon",title:"Go to LemonUnit home page"},o.a.createElement("img",{src:"lemonunit-logo.png",alt:"LemonUnit logo"}))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"Footer"},o.a.createElement(S.a,null,o.a.createElement(O.a,{span:12},this.renderLemonUnitLink()),o.a.createElement(O.a,{span:12,style:{textAlign:"right"}},this.renderGithubLink())))}}]),t}(a.Component),y=(n(219),n(96)),E=(n(250),n(140)),k=n(72),I=n.n(k),L=n(61);n(127),n(128);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}!function(e){e.SEMICOLON=";",e.COMMA=",",e.VARTICAL_BAR="|"}(r||(r={}));var D={csv:"",editorHeight:0,delimiter:r.SEMICOLON},N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},D,{delimiter:"localStorage"in window&&window.localStorage.getItem("delimiter")||r.SEMICOLON}),n.updateEditorHeight=function(){return n.setState({editorHeight:window.innerHeight-v-C-p})},n.parseSourceItemsToCsv=function(){return n.setState({csv:L.stringify(n.props.source,n.state.delimiter)})},n.updateSourceItemsByCsvString=function(){var e=L.parse(n.state.csv,n.state.delimiter);n.props.onSourceChange(e)},n.handleChange=function(e){return n.setState({csv:e},function(){return n.updateSourceItemsByCsvString()})},n.handleDelimiterChange=function(e){var t=e.target.value;if(!n.state.csv.trim())return n.updateDelimiter(t);E.a.confirm({title:"Do you want to update CSV string to new delimiter?",content:"",onOk:function(){return n.updateCSVStringDelimiter(t)},onCancel:function(){return n.updateDelimiter(t)}})},n.updateCSVStringDelimiter=function(e){return n.setState({csv:L.stringify(L.parse(n.state.csv,n.state.delimiter),e)},function(){return n.updateDelimiter(e)})},n.updateDelimiter=function(e){return n.setState({delimiter:e},function(){"localStorage"in window&&window.localStorage.setItem("delimiter",e)})},n.renderConfigBar=function(){return o.a.createElement("div",{className:"ConfigBar"},o.a.createElement("div",{className:"ConfigBarWidget"},o.a.createElement("span",{className:"ConfigBarWidgetLabel"},"CSV Delimeter:"),o.a.createElement("span",{className:"ConfigBarWidgetContent"},o.a.createElement(y.a.Group,{onChange:n.handleDelimiterChange,value:n.state.delimiter,size:"small"},[r.SEMICOLON,r.COMMA,r.VARTICAL_BAR].map(function(e,t){return o.a.createElement(y.a,{key:"item_".concat(t),value:e},o.a.createElement("small",null,e))})))))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){return e.updateEditorHeight()}),this.updateEditorHeight(),this.parseSourceItemsToCsv()}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",function(){return e.updateEditorHeight()}),this.setState(D)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.renderConfigBar(),o.a.createElement(I.a,{mode:"text",theme:"github",onChange:this.handleChange,value:this.state.csv,name:"csv_editor",width:"100%",height:"".concat(this.state.editorHeight,"px"),editorProps:{$blockScrolling:!0}}))}}]),t}(a.Component),B={json:"[]",editorHeight:0},H=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state=B,n.updateEditorHeight=function(){return n.setState({editorHeight:window.innerHeight-C-v})},n.parseSourceItemsToJson=function(){return n.setState({json:JSON.stringify(n.props.source,null,2)})},n.handleChange=function(e){return n.setState({json:e},function(){return n.updateSourceItemsByCsvString()})},n.updateSourceItemsByCsvString=function(){try{var e=JSON.parse(n.state.json);n.props.onSourceChange(e)}catch(t){}},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.updateEditorHeight(),this.parseSourceItemsToJson(),window.addEventListener("resize",function(){return e.updateEditorHeight()})}},{key:"componentWillUnmount",value:function(){var e=this;this.setState(B),window.removeEventListener("resize",function(){return e.updateEditorHeight()})}},{key:"render",value:function(){return o.a.createElement(I.a,{mode:"json",theme:"github",onChange:this.handleChange,value:this.state.json,name:"csv_editor",width:"100%",height:"".concat(this.state.editorHeight,"px"),editorProps:{$blockScrolling:!0}})}}]),t}(a.Component),R=n(14),G=n(139),M=n(138),V=50,W=26;function P(e){for(var t=[],n=0;n<e;n++)t[n]={value:""};return t}function U(e,t){for(var n=P(t),r=[],a=0;a<e;a++)r[a]=n;return r}var J,T,x={activeRow:-1,activeCol:-1,grid:[]},z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state=x,n.parseSourceItemsToGrid=function(){for(var e=n.props.source,t=e.length,r=[],a=0;a<t;a++){var o=e[a];if(o){var i=o.length;r[a]||(r[a]=[]);for(var c=0;c<i;c++){var s=o[c];r[a][c]={value:s}}for(var u=W-i,l=0;l<u;l++)r[a][i+l]={value:""}}}for(var d=V-t,h=P(r[0]?r[0].length:W),f=0;f<d;f++)r[t+f]=h;return n.setState({grid:r})},n.updateSourceItemsByDataGrid=function(){for(var e=n.state.grid,t=[],r=Object(R.a)(e).reverse(),a=r.findIndex(function(e){return e.some(function(e){return Boolean(e.value)})}),o=r.slice(a).reverse(),i=0,c=o.length;i<c;i++){t[i]||(t[i]=[]);var s=Object(R.a)(o[i]).reverse(),u=s.findIndex(function(e){return Boolean(e.value)}),l=s.slice(u).reverse();if(!(u<0))for(var d=0;d<l.length;d++){var h=l[d];t[i][d]=h.value}}n.props.onSourceChange(t)},n.addNewRowIfLastIsActive=function(){var e=n.state,t=e.activeRow,r=e.grid;t===r.length-1&&n.setState({grid:[].concat(Object(R.a)(r),Object(R.a)(U(10,r[0]?r[0].length:W)))})},n.onActivate=function(e){var t=e.column,r=e.row;return n.setState({activeCol:t,activeRow:r})},n.onChange=Object(M.a)(100,function(e){return n.setState({grid:e},function(){return n.updateSourceItemsByDataGrid()})}),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.parseSourceItemsToGrid()}},{key:"componentWillUnmount",value:function(){this.addNewRowIfLastIsActive(),this.setState(x)}},{key:"render",value:function(){return o.a.createElement(G.a,{onChange:this.onChange,onActivate:this.onActivate,data:this.state.grid})}}]),t}(a.Component);n(247);!function(e){e.CSV="CSV",e.GRID="GRID",e.JSON="JSON"}(T||(T={}));var _=Object.freeze((J={},Object(f.a)(J,T.CSV,N),Object(f.a)(J,T.JSON,H),Object(f.a)(J,T.GRID,z),J)),$=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleModeChange=function(e){return n.setState({mode:e})},n.handleSourceChange=function(e){return n.setState({source:e})},n.state={mode:T.CSV,source:[]},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=_[this.state.mode]||o.a.createElement("div",null,"Error");return o.a.createElement("div",null,o.a.createElement(b,{mode:this.state.mode,onModeChange:this.handleModeChange}),o.a.createElement("main",{className:"Editor"},o.a.createElement(e,{onSourceChange:this.handleSourceChange,source:this.state.source})),o.a.createElement(j,null))}}]),t}(a.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(248);c.a.render(o.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/csv-editor-online",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/csv-editor-online","/service-worker.js");F?(!function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):K(t,e)})}}()}},[[144,1,2]]]);
//# sourceMappingURL=main.009b9a82.chunk.js.map