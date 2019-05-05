class Options {
	constructor(height=300, width=400, bg='yellow', fontSize=20, textAlign='center') {
		this.height=height;
		this.width=width;
		this.bg=bg;
		this.fontSize=fontSize;
		this.textAlign=textAlign;
	}
	createDiv() {
		let div = document.createElement('div');
		div.textContent = 'Любой текст';
		div.style.cssText = `height: ${this.height}px; \
							 width: ${this.width}px; \
							 background: ${this.bg}; \
							 font-size: ${this.fontSize}px; \
							 text-align: ${this.textAlign}`;
		
		return div;
	}
}

let options = new Options();
document.body.appendChild(options.createDiv());