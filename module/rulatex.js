import { Parser } from './classes/parser.js';
import { Parser } from './classes/tree.js';
// подключаем css, требование webpack
import './rulatex.scss';


class RuLatex {
  constructor() {
    this.parser = new Parser();
    this.tree = new Tree();
  }

  parse(latex) {
    if (this.parser) {
      return this.wrap(this.parser.parse(latex));
    } else {
      console.info("Parser sucks");
    }
  }

  wrap(string) {
    return `<div class="rl-main">${string}</div>`
  }
};

window.RuLatex = RuLatex;
