const stopWatch = (options = {}) => {
	const addMessage = (message) => {
		const messageElement = document.createElement("div");
		const now = new Date();
		messageElement.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒${message}`;
		messageElement.classList = ["message"];
		const logElement = document.querySelector(".log");
		logElement.prepend(messageElement);
		// logElement.appendChild(messageElement);
	};

	// options = options || {};
	let { color, backgroundColor } = options;
	color = color || "pink";
	backgroundColor = backgroundColor || "gray";
	// const color = options.color || "pink";
	// const backgroundColor = options.backgroundColor || "gray";
	const displayElement = document.getElementsByClassName("display")[0];
	displayElement.style.color = color;
	displayElement.style.backgroundColor = backgroundColor;
	const startButton = document.getElementsByClassName("startButton")[0];
	let timer = null;

	startButton.addEventListener("click", () => {
		if (timer === null) {
			let seconds = 0;
			timer = setInterval(() => {
				seconds++;
				displayElement.innerText = seconds;
			}, 1000);

			addMessage("開始");
			startButton.style.pointerEvents = "none";
			stopButton.style.pointerEvents = "auto";
		}
	});

	const stopButton = document.getElementsByClassName("stopButton")[0];
	stopButton.addEventListener("click", () => {
		if (timer !== null) {
			clearInterval(timer);
			timer = null;

			addMessage("終了");
			startButton.style.pointerEvents = "auto";
			stopButton.style.pointerEvents = "none";
			displayElement.innerText = 0;
		}
	});
};

var options = {
	color: "limegreen",
	backgroundColor: "#333",
};

stopWatch(options);
