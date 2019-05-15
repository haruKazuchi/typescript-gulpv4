export default class MainVisual{
	init(){
		return this.createMainVisual();
	}

	createMainVisual(){
		let mainV = document.createElement("div")
		let template = `
			<div class="container">
				<div class="image-box">
					<div class="image-desc">
						<div class="title">So begins a new age<br>of knowlegde</div>
						<div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nulla quis<br>turpis cursus pharetra. Fusce blandit nec tortor sit amet ullamcorper.</div>
						<div class="button"><a href="">PROJECTS</a></div>
					</div>
				</div>
			</div>
		`

		mainV.setAttribute('id','mainvisual')
		mainV.innerHTML = template;

		return mainV;
	}
}