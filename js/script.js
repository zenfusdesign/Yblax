const html = document.documentElement;
const canvas = document.querySelector('.sneakers-scrolling');
const context = canvas.getContext('2d');

const currentFrame = index => (
		`https://hypeplug.paris/wp-content/uploads/2021/02/offwhitepinegreen${index.toString().padStart(2, '20')}-scaled.jpg`
	)

const frameCount = 100;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

canvas.height = 1707;
canvas.width = 2560;
const img = new Image();
img.src = currentFrame(1);
img.onload = function() {
	context.drawImage(img, 0, 0, /*1280, 853.5*/);
} 

const updateImage = index => {
	img.src = currentFrame(index);
	context.drawImage(img, 0, 0, /*1280, 853.5*/);
}

window.addEventListener('scroll', () => {
	const scrollTop = html.scrollTop;
	const maxScrollTop = html.scrollHeight - window.innerHeight;
	const scrollFraction = scrollTop / maxScrollTop;
	const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))

	requestAnimationFrame( () => updateImage(frameIndex + 1))
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


// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
// 	cursor.style.left = e.pageX + 'px';
// 	cursor.style.top = e.pageY + 'px';
// })


window.console.log.apply(console, ["\n %c Made with ❤️ by Bryan Yanis Marius Edouard %c 💎 \n\n", "border: 1px solid #000;color: #000; background: #aaa000; padding:5px 0;", "color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000; background: red; padding:5px 0; color: #b0976d; background: #aaa000; padding:5px 0;"])
