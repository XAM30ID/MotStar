const secondDotaBg = document.querySelector('.secondDotaWords');
const balanar = document.querySelector('.balanar');
secondDotaBg.style.display = 'none';

balanar.onmousedown = function() {	
	console.log(secondDotaBg.style.display);
	if (secondDotaBg.style.display == 'none') secondDotaBg.style.display = 'block';
	else if (secondDotaBg.style.display == 'block') secondDotaBg.style.display = 'none';
}