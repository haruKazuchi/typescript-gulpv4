export default class Header{

	init() {
		return this.createHeader();
	}

	createHeader() {
		let header = document.createElement("header");
		let template = document.createElement("div");
		let menu = this.menu();
		let logo = this.logo();

		header.setAttribute('id', 'header')
		template.setAttribute('class','container')
		template.appendChild(logo)
		template.appendChild(menu)
		header.appendChild(template)

		return header
	}

	menu() {
		let menu = new Map([
		    [ "OUR SERVICES", 'services' ],
		    [ "OUR WORKS", 'works' ],
		    [ "READ OUR MINDS", 'minds' ],
				[ "WHO ARE WE", 'profile'],
				[ "LET'S TALK", 'contact']
		]);
		let ul = document.createElement("ul");
		ul.setAttribute('class', 'navi')

		for(let [key, value] of menu.entries()){
			let li = document.createElement("li");
			let a = document.createElement("a");
			let span = document.createElement("span");

			span.appendChild(document.createTextNode(key));
			a.setAttribute('href', value);
			a.appendChild(span);
			li.appendChild(a);
			ul.appendChild(li)
		}

		return ul
	}

	logo() {
		let logoSrc = 'assets/img/logo.png';
		let h1 = document.createElement("h1");
		let a = document.createElement("a");
		let img = document.createElement("img");

		img.setAttribute('src', logoSrc);
		a.appendChild(img);
		h1.appendChild(a);

		return h1

	}


}

