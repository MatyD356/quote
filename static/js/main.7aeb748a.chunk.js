(this.webpackJsonpquote2=this.webpackJsonpquote2||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(11),r=a.n(c),s=(a(20),a(2)),i=a(3),u=a(5),l=a(4),h=a(6),d=a(8),m=a.n(d),f=a(12),b=a(13),p=a(14),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleClick=function(){var e=Math.floor(Math.random()*(0-a.state.jsonData.quotes.length)+a.state.jsonData.quotes.length);a.setState({quote:a.state.jsonData.quotes[e].quote,author:a.state.jsonData.quotes[e].author,loading:!1})},a.state={quote:"If you can dream it, you can achieve it",author:"Zig Ziglar",jsonData:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",e.next=3,fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({jsonData:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{id:"quote-box",className:"Container"},o.a.createElement("div",{className:"upper-line"},o.a.createElement("div",{className:"text-container",id:"text"},this.state.quote),o.a.createElement("div",{className:"author-container",id:"author"},"-",this.state.author)),o.a.createElement("div",{className:"down-line"},o.a.createElement("button",{className:"quote-btn",id:"new-quote",onClick:this.handleClick},"New quote"),o.a.createElement("a",{className:"tweet-link",target:"_blank",rel:"noopener noreferrer",href:'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'.concat(this.state.quote,'"').concat(this.state.author),id:"tweet-quote"},o.a.createElement(b.a,{icon:p.a})," ")))}}]),t}(o.a.Component),j=(a(27),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.7aeb748a.chunk.js.map