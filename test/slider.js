// document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;

function autoSlider () {
	timer = setTimeout(function (){
	var polosa = document.getElementById('polosa');
		left = left-256;
		if (left<-768) {
			left = 0;
			clearTimeout(timer);
	}
	polosa.style.left = left + "px";
	autoSlider();
	}, 1000);
}

