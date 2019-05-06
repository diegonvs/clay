(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,a){"use strict";a.r(t);a(172),a(77),a(51);var n=a(7),r=a.n(n),o=a(208),i=a.n(o),l=a(282),c=(a(81),a(31),a(0)),s=a.n(c),d=a(477),u=a(482),m=a.n(u),p=function(e,t,a,n,r){var o=n.slice(0),i=r.slice(0);m()(Function,["Component","mountNode"].concat(i,[a])).apply(void 0,[e,t].concat(o))},h=a(484),f=a.n(h),v=a(732),y=a.n(v),g=a(734),E=a(744),C=a(231),b=a.n(C),N=a(285),w=a(761),S=function(e){function t(t,a){var n;return(n=e.call(this,t,a)||this).state=n._updateState(t.code),n}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this._render()},a.componentDidUpdate=function(e,t){t.compiled!==this.state.compiled&&this._render()},a.render=function(){var e,t=this.state,a=t.code,n=t.showBabelErrorMessage,r=t.error;return n?e=s.a.createElement("span",null,"Babel could not be loaded.",s.a.createElement("br",null),s.a.createElement("br",null),"This can be caused by an ad blocker. If you are using one, consider adding ",s.a.createElement("b",null,"clayui.com")," to the whitelisted so that try can work again."):null!=r&&(e=r.message),s.a.createElement(w.b,{code:a,mountStylesheet:!1},s.a.createElement("div",{className:"try-playground-editor"},s.a.createElement("span",{className:"try-playground-title"},"Live Editor"),s.a.createElement("div",{className:"gatsby-highlight"},s.a.createElement(w.a,{onChange:this._onChange.bind(this)}))),r&&s.a.createElement("div",{className:"try-playground-live try-live-error"},s.a.createElement("span",{className:"try-playground-title"},"Error"),s.a.createElement("pre",{className:"try-playground-live--preview"},e)),!r&&s.a.createElement("div",{className:"try-playground-live"},s.a.createElement("span",{className:"try-playground-title"},"Result"),s.a.createElement("div",{className:"try-playground-live--preview",ref:"mountRef"})))},a._render=function(){if(this.refs.mountRef){var e=this.state.compiled;try{this.refs.mountRef.innerHTML="",p(d.JSXComponent,this.refs.mountRef,e,[y.a,g.ClayAlert,g.ClayStripe,g.ClayToast,E.ClayDropdown,E.ClayActionsDropdown,E.ClayCreationMenuDropdown,b.a,N.AreaLineChart,N.AreaSplineChart,N.AreaStepChart,N.BarChart,N.BubbleChart,N.DonutChart,N.GaugeChart,N.Geomap,N.LineChart,N.PieChart,N.PredictiveChart,N.ScatterChart,N.SplineChart,N.StepChart],["ClayBadge","ClayAlert","ClayStripe","ClayToast","ClayDropdown","ClayActionsDropdown","ClayCreationMenuDropdown","ClayButton","AreaLineChart","AreaSplineChart","AreaStepChart","BarChart","BubbleChart","DonutChart","GaugeChart","Geomap","LineChart","PieChart","PredictiveChart","ScatterChart","SplineChart","StepChart"])}catch(e){console.error(e),this.setState({compiled:null,error:e})}}},a._updateState=function(e){try{return{compiled:function(e){return Babel.transform(e,{presets:[f.a]}).code}("const App = (props) => {return(<div>"+e+"</div>)};\n            Component.render(App, mountNode);"),error:null,code:e}}catch(e){return console.error(e),{compiled:null,error:e,showBabelErrorMessage:!window.Babel}}},a._onChange=function(e){var t=this;this.setState(function(a){return t._updateState(e)})},t}(c.Component),_=a(48),L=a.n(_),k=function(e,t){var a=document.getElementById(e);L.a.unmountComponentAtNode(a),L.a.render(s.a.createElement(S,{code:t}),a)};a.d(t,"query",function(){return A});var x=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var r=t.data;return n._listSidebar=r.list.edges.map(function(e){var t=e.node;return{title:t.id.split("-").join(" "),code:JSON.parse(t.internal.contentDigest)}}),n}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e,t=this;(e="//unpkg.com/babel-standalone@6.26.0/babel.min.js",new Promise(function(t,a){return document.head.appendChild(Object.assign(document.createElement("script"),{async:!0,src:e,onload:t,onerror:a}))})).then(function(e){k("code-editor",t._listSidebar[0].code)}).catch(function(e){console.error("Babel failed to load.",e)})},a._renderSidebarList=function(){var e=this;return this._listSidebar.map(function(t,a){return s.a.createElement("li",{key:a,onClick:e._updateCode.bind(e,t.code)},s.a.createElement("a",{className:"align-middle",href:"javascript:;"},s.a.createElement("span",null,t.title)))})},a._updateCode=function(e){k("code-editor",e)},a.render=function(){var e="This is Clay. A web implementation of the Lexicon Experience Language; built by Liferay.";return s.a.createElement("div",{className:"try"},s.a.createElement(i.a,null,s.a.createElement("title",null,"Try - Clay"),s.a.createElement("meta",{name:"description",content:e}),s.a.createElement("meta",{name:"og:description",content:e}),s.a.createElement("meta",{name:"twitter:description",content:e}),s.a.createElement("meta",{name:"og:title",content:"Try - Clay"})),s.a.createElement("main",{className:"content"},s.a.createElement("header",{className:"header"},s.a.createElement(l.a,{fixed:!1})),s.a.createElement("section",{className:"try-box",id:"try-box"},s.a.createElement("div",{className:"try-sidebar-components"},s.a.createElement("div",{className:"sidebar-list sidebar-clay-site"},s.a.createElement("ul",{className:"nav nav-nested nav-pills nav-stacked"},s.a.createElement("li",{className:"nav-heading active"},s.a.createElement("a",{className:"align-middle",href:"javascript:;"},s.a.createElement("span",null,"Examples")),s.a.createElement("ul",{className:"nav nav-nested nav-pills nav-stacked"},this._renderSidebarList()))))),s.a.createElement("div",{className:"try-playground",id:"code-editor"}))))},t}(c.Component),A="540437373";t.default=x},164:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(152),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(26);a.d(t,"waitForRouteChange",function(){return s.c});var d=a(165),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var m=a(36);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},165:function(e,t,a){var n;e.exports=(n=a(177))&&n.default||n},177:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a.n(n),o=a(0),i=a.n(o),l=a(4),c=a.n(l),s=a(53),d=a(1),u=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,r()({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},282:function(e,t,a){"use strict";a(239),a(172);var n=a(7),r=a.n(n),o=a(52),i=a.n(o),l=a(240),c=a(0),s=a.n(c),d=a(164),u=a(210),m=a.n(u),p=function(e){function t(){var t;return(t=e.call(this)||this)._rootNode=l.window||l.document,t._addScroll=t._addScroll.bind(i()(i()(t))),t}r()(t,e);var a=t.prototype;return a._getScrollTop=function(){return this._rootNode===l.window?this._rootNode.pageYOffset:this._rootNode===l.document?this._rootNode.defaultView.pageYOffset:void 0},a._addScroll=function(){this._getScrollTop()>=50?this.refs.navElement.classList.add("scroll"):this.refs.navElement.classList.remove("scroll")},a.componentDidMount=function(){this._rootNode.addEventListener("scroll",this._addScroll,!1)},a.componentWillUnmount=function(){this._rootNode.removeEventListener("scroll",this._addScroll,!1)},a.render=function(){var e=this.props.fixed,t=void 0===e||e,a=m()("navbar navbar-clay-site navbar-expand-lg navbar-dark",{"fixed-top":t});return s.a.createElement("nav",{ref:"navElement",className:a},s.a.createElement("div",{className:"container-fluid container-fluid-max-lg"},s.a.createElement(d.Link,{to:"/",className:"navbar-brand"},s.a.createElement("img",{className:"logo mr-2",src:"/images/home/clay_logo_w.svg",alt:""}),s.a.createElement("span",{className:"title align-middle"},"Clay")),s.a.createElement("ul",{className:"navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.Link,{className:"nav-link ml-3",to:"/docs/get-started/introduction.html"},"Get Started")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(d.Link,{className:"nav-link ml-3",to:"/docs/components/alerts.html"},"Components Library")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"mx-3 mr-lg-0",href:"https://github.com/liferay/clay",target:"_blank"},s.a.createElement("img",{src:"/images/home/GitHub-Mark-64px.svg",alt:""}))))))},t}(c.Component);t.a=p},644:function(e,t){},646:function(e,t){},678:function(e,t){},679:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-try-html-js-ac58577fd3db5c5ebb7d.js.map