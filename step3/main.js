class PhotoViewer {
	constructor(rootElement, images) {
		this.rootElement = rootElement;
		this.images = images;
		this.currentIndex = 0;
	}

	init() {
		const nextButton = this.rootElement.querySelector(".nextButton");
		nextButton.addEventListener("click", () => {
			this.next();
		});

		const prevButton = this.rootElement.querySelector(".prevButton");
		prevButton.addEventListener("click", () => {
			this.prev();
		});

		this.updatePhoto();

		updatePhoto();
	}

	updatePhoto() {
		const frameElement = this.rootElement.querySelector(".frame");
		const image = this.images[this.currentIndex];

		frameElement.innerHTML = `
        <div class="currentImage"><img src=${image} alt="" /></div>
        `;
	}

	next() {
		this.currentIndex++;
		this.updatePhoto();
	}

	prev() {
		this.currentIndex--;
		this.updatePhoto();
	}
}

const images = [
	"https://picsum.photos/400/300",
	"https://picsum.photos/500/300",
	"https://picsum.photos/600/300",
];

new PhotoViewer(document.getElementById("photoViewer"), images).init();
