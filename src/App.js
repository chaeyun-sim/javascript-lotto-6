import Controller from './Controller/Controller.js';

class App {
  async play() {
    new Controller().control();
  }
}

export default App;
