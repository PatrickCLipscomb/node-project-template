!function r(t,i,n){function o(a,e){if(!i[a]){if(!t[a]){var d="function"==typeof require&&require;if(!e&&d)return d(a,!0);if(c)return c(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=i[a]={exports:{}};t[a][0].call(u.exports,function(r){var i=t[a][1][r];return o(i?i:r)},u,u.exports,r,t,i,n)}return i[a].exports}for(var c="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(r,t,i){function n(r){this.name=r}n.prototype.randomOrder=function(){for(var r=[],t=["tree","car","tower","bird","mug"];r.length<5;){var i=t[Math.floor(5*Math.random())];r.includes(i)||r.push(i)}return r},i.cardModule=n},{}],2:[function(r,t,i){var n=r("./../js/card.js").cardModule,o=1,c=null;$(document).ready(function(){$("#play-the-game").on("click",function(){for(var r=new n("random group"),t=[],i=0;i<2;i++)t=r.randomOrder(),t.forEach(function(r){var t="",n=r+i;$("#cards").append('<li><div id="'+n.toString()+'" class="card"><img src="img/card-back.jpg" alt="'+n+'" /></div></li>'),$("#"+n.toString()).on("click",function(){o%2===0&&c.slice(0,c.length-1)===r?($("#"+n.toString()).html('<div id="'+n.toString()+'" class="card"><img src="img/'+r+'.jpg" alt="'+n+'" /></div>'),o+=1):o%2===0&&c.slice(0,c.length-1)!==r?($("#"+n.toString()).html('<div id="'+n.toString()+'" class="card"><img src="img/'+r+'.jpg" alt="'+n+'" /></div>'),setTimeout(function(){$("#"+n.toString()).html('<div id="'+n.toString()+'" class="card"><img src="img/card-back.jpg" alt="'+n+'" /></div>')},1e3),setTimeout(function(){$("#"+c).html('<div id="'+t+'" class="card"><img src="img/card-back.jpg" alt="'+t+'" /></div>')},1e3),o+=1):($("#"+n.toString()).html('<div id="'+n.toString()+'" class="card"><img src="img/'+r+'.jpg" alt="'+n+'" /></div>'),o+=1,c=n)})})})})},{"./../js/card.js":1}]},{},[2]);