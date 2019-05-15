import Header from './header'
import MainVisual from './mainvisual'

class Main{
    init() {
      const $app = document.getElementById('app')
      const header = new Header()
      const mainvisual = new MainVisual()

      try {
        $app.appendChild(header.init())
        $app.appendChild(mainvisual.init())
      }
      catch(e) {
        console.log(e.message)
      }
    }
}


window.addEventListener('DOMContentLoaded', () => {
    try {
      let main = new Main();
      main.init();
    }
    catch(e){
      console.log(e.message)
    }
});