import Controller from "./Controller/Controller.js";

class App {
  async play() {
    new Controller().run();
  }
}

export default App;
