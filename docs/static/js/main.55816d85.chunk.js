(this["webpackJsonpmy-redux"]=this["webpackJsonpmy-redux"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),u=n.n(a),r=n(4),c=n.n(r),o=n(1),i=n(2),s=n(5),l=n(6);var m=function(t,e){var n=e,a=[],u=function(e){n=t(n,e),a.forEach((function(t){return t()}))};return u({}),{getState:function(){return n},dispatch:u,subscribe:function(t){return a.push(t),function(){return a.filter((function(e){return e!==t}))}}}},d={count:0};var f=function(t){return{type:"INCREMENT",amount:t}},h=function(t){return{type:"DECREMENT",amount:t}},p=new m((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0,n=t.count,a=e.type,u=e.amount;switch(a){case"INCREMENT":return{count:n+u};case"DECREMENT":return{count:n-u};case"RESET":return{count:0};default:return t}}),d),E=function(t){Object(l.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,u=new Array(a),r=0;r<a;r++)u[r]=arguments[r];return(t=e.call.apply(e,[this].concat(u))).state={valueAmount:0},t.update=function(){return t.forceUpdate()},t.reset=function(){return p.dispatch({type:"RESET"})},t.increment=function(){return p.dispatch(f(t.state.valueAmount))},t.decrement=function(){return p.dispatch(h(t.state.valueAmount))},t.handleChange=function(e){return t.setState({valueAmount:parseInt(e.target.value)})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){p.subscribe(this.update)}},{key:"componentWillUnmount",value:function(){p.subscribe(this.update)()}},{key:"render",value:function(){var t=p.getState().count;return u.a.createElement("section",{className:"container"},u.a.createElement("h1",{"data-testid":"title",className:"container__title"},t),u.a.createElement("button",{"data-testid":"button-increment",className:"container__button",onClick:this.increment},"+"),u.a.createElement("button",{"data-testid":"button-reset",className:"container__button",onClick:this.reset},"reset"),u.a.createElement("button",{"data-testid":"button-decrement",className:"container__button",onClick:this.decrement},"-"),u.a.createElement("br",null),u.a.createElement("h2",{"data-testid":"subtitle",className:"container__subtitle"},"Amount"),u.a.createElement("input",{"data-testid":"input",className:"container__input",type:"text",value:this.state.valueAmount,onChange:this.handleChange}))}}]),n}(a.Component),b=function(){return u.a.createElement(E,null)};n(12);c.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(b,null)),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.55816d85.chunk.js.map