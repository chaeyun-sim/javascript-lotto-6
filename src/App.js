import Controller from './Controller/Controller.js';

class App {
  async play() {
    this.controller = new Controller();
    this.controller.control();
  }
}

export default App;
