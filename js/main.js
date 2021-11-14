const html = document.documentElement;


window.addEventListener('scroll', () => {
	const scrollTop = html.scrollTop;
	const maxScrollTop = html.scrollHeight - window.innerHeight;
	const scrollFraction = scrollTop / maxScrollTop;

	if (scrollTop => 1) {
		var element = document.getElementById("Calque_2");
    	element.classList.add("animation");
		var element = document.getElementById("box1");
    	element.classList.add("animation");
		var element = document.getElementById("cursor");
    	element.classList.add("cursorchange");
	}
	if (scrollTop == 0) {
		var element = document.getElementById("Calque_2");
    	element.classList.remove("animation");
		var element = document.getElementById("box1");
    	element.classList.remove("animation");
		var element = document.getElementById("cursor");
    	element.classList.remove("cursorchange");
	}
	if (300 <= scrollTop) {
		var element = document.getElementById("Title");
    	element.classList.add("opacityAdd");	
    	element.classList.add("positionadd");	
	}
	if (550 <= scrollTop) {
		var element = document.getElementById("boxes1");
    	element.classList.add("positionadd");	
    	element.classList.add("opacityAdd");		
	}
	if (1150 <= scrollTop) {
		var element = document.getElementById("boxes2");
    	element.classList.add("positionadd");	
    	element.classList.add("opacityAdd");		
	}
	if (1750 <= scrollTop) {
		var element = document.getElementById("boxes3");
    	element.classList.add("positionadd");	
    	element.classList.add("opacityAdd");		
	}
	console.log(scrollTop);

})

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
    document.body.style.setProperty(
      "--scroll-per",
      `${(window.pageYOffset / document.body.offsetHeight) * 100}%`
    );
  },
  false
);


const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
	cursor.style.left = e.pageX + 'px';
	cursor.style.top = e.pageY + 'px';
})

window.console.log.apply(console, ["\n %c Made with ❤️ by Bryan Yanis Marius Edouard %c 💎 \n\n", "border: 1px solid #000;color: #000; background: #aaa000; padding:5px 0;", "color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000; background: red; padding:5px 0; color: #b0976d; background: #aaa000; padding:5px 0;"])
