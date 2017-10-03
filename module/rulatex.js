import { Parser } from './parser/parser.js';
// подключаем css, требование webpack
import './rulatex.scss';

class RuLatex {
  constructor() {
    this.parser = new Parser();
  }
  parse(latex) {
    if (this.parser) {
      return this.parser.parse(latex);
    }
  }
};

// TODO: временное решение, почему то в собранном файле нет возможности прокинуть наружу
// класс
window.RuLatex = RuLatex;
