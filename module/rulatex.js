import { Parser } from './parser/parser.js';

class RuLatex {
  constructor() {
    this.parser = new Parser();
  }
  parse(latex) {
    if (this.parser) {

      console.group("%c Custom log:", "background: #222; color: #bada55; font-size: 16px;");
      console.log(latex);
      console.groupEnd();

      var _la = this.parser.parse(latex);

      console.group("%c Custom log:", "background: #222; color: #bada55; font-size: 16px;");
      console.log(_la);
      console.groupEnd();
    }
  }
};

export { RuLatex };
