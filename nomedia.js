javascript:(function(){
	let images=document.getElementsByTagName('img');
	for(let i=0;i<images.length;i+1){
		images.item(i).remove(); 
	}
	let videos=document.getElementsByTagName('video');
	for(let i=0;i<videos.length;i+1){
		videos.item(i).remove(); 
	}
	let audios=document.getElementsByTagName('audio');
	for(let i=0;i<audios.length;i+1){
		audios.item(i).remove(); 
	}
	let elements=document.body.getElementsByTagName('*');
	for(let i=0;i<elements.length;i++){
		elements.item(i).setAttribute("style","font-family: Verdana, sans-serif;");
	}
})();
