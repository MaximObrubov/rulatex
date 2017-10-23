import { Parser } from './classes/parser.js';
import { Tree } from './classes/tree.js';
// подключаем css, требование webpack
import './rulatex.scss';


class RuLatex {
  constructor(latex) {
    this.parser = new Parser();
    this.view = document.createElement("div");

    if (this.parser) {
      let html = this.parser.parse(latex);

      if (html) {
        this.view.className = "rl-main";
        this.view.innerHTML = html;
        this.view.setAttribute("data-id", 0);
        this.tree = new Tree(this);
      } else {
        console.error("Parser sucks");
      }
    } else {
      console.error("Parser dead");
      return false;
    }
  }

  wrap(string) {
    return `<div class="rl-main">${string}</div>`
  }
};

window.RuLatex = RuLatex;
