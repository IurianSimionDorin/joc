(this.webpackJsonpnume=this.webpackJsonpnume||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1),a=r.n(s),i=r(7),c=r.n(i),u=(r(14),r(8)),l=r(2),o=r(3),h=r(5),d=r(4),j=function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).state={value:null},n}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsx)("button",{className:"square",onClick:function(){return e.props.onClick()},children:this.props.value})}}]),r}(a.a.Component),b=function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},n}return Object(o.a)(r,[{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(u.a)(t[r],3),s=n[0],a=n[1],i=n[2];if(e[s]&&e[s]===e[a]&&e[s]===e[i])return e[s]}return null}},{key:"handleClick",value:function(e){var t=this.state.squares.slice();this.calculateWinner(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return Object(n.jsx)(j,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=this.calculateWinner(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"status",children:e}),Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(a.a.Component);r(15);var v=function(){return Object(n.jsxs)("div",{className:"game",children:[Object(n.jsx)("div",{className:"game-board",children:Object(n.jsx)(b,{})}),Object(n.jsxs)("div",{className:"game-info",children:[Object(n.jsx)("div",{}),Object(n.jsx)("ol",{})]})]})},x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),s(e),a(e),i(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.4927cc69.chunk.js.map