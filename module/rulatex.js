import { Parser } from './classes/parser.js';
// подключаем css, требование webpack
import './rulatex.scss';


class RuLatex {
  constructor() {
    this.parser = new Parser();
  }

  parse(latex) {
    if (this.parser) {
      return this.parser.parse(latex);
    } else {
      console.info("Parser sucks");
    }
  }
};

window.RuLatex = RuLatex;
