import { Parser } from './parser/parser.js';

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

export { RuLatex };
