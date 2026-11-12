const dialog = document.getElementById("dialog"); 
var isplay = 0 ;
function show(id) { 
	deckId = id ;
	document.getElementById('deck-frame').src = `https://castle.xyz/d/${deckId}?embed=true&bg=000000` ;
  dialog.showModal(); 
}
function stop() { 
	document.getElementById('deck-frame').src = '' ;
}
function reload() {
	const iframe = document.getElementById('deck-frame');
	iframe.src += '';
}
function rotate() {
	const iframe = document.getElementById('deck-frame');
	iframe.style.rotate = iframe.style.rotate === '-90deg' ? '0deg' : '-90deg';
}
function nom() {
	var bite = new Audio('https://vuvien.nekoweb.org/apple.mp3') ;
	bite.play() ;
}
function faq() {
	const faqiframe = document.getElementById('deck-faq');
	if (isplay == 0) {
faqiframe.src = 'https://castle.xyz/d/0p-_8vn8Uas9?embed=true&bg=26164b' ;
	} else {
faqiframe.src = 'https://efefubvdfhbeufhueifbeufbueifewuifbeuiwvfebwf.vn' ;
	}
}
