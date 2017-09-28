import { Parser } from './parser/parser.js';

class ruLatex {
  constructor() {
    this.parser = new Parser();
  }
  getParser() {
    return this.parser;
  }
};

export { ruLatex };
