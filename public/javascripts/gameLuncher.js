var h = window.innerHeight;
var w = window.innerWidth;

var header = document.querySelector('.header');
var headerH = header.offsetHeight;

var iframeH = h - headerH;

var iframe = document.querySelector('#game-frame');

iframe.height = iframeH;



