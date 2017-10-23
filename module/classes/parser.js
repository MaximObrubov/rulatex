import { Templater } from './templater.js';

class Parser {
  constructor() {
    this.templater = new Templater();
    this.regulars = {
      "abs": /\\left\|(((?!(\\left\||\\right\|)).)+)\\right\|/,
      "brackets": /\\left([\(\[])((?:(?!(?:\\left[\(\[]|\\right[\)\]])).)+)\\right([\)\]])/,
      "curly_brackets": /\\left\\{((?:(?!(?:\\left\\{|\\right\\})).)+)\\right\\}/,
      "fraction": /(\w+)?\\frac\{([^{}]+)\}\{([^{}]+)\}/,
      "root": /\\sqrt\{([^{}]+)\}/,
      "nth_root": /\\sqrt\[([^\[\]]+)\]\{([^{}]+)\}/,
      "multiply": /\\cdot/,
      "lower_or_equal": /\\le(?!ft)/,
      "greater_or_equal": /\\ge/,
      "power": /\^(?:\{([^{}]+)\}|(\d+))/,
      "infty": /\\infty/,
      "pi": /\\pi/
    };
  }

  parse(latex) {
    let that = this;

    function parse_recoursive(latex) {
      let foundedKey = null;

      for (let [key, regex] of Object.entries(that.regulars)) {
        if (regex.test(latex)) {
          foundedKey = key;
          break;
        }
      }

      if (foundedKey) {
        // Если совпадения были найдены, то произведем замену первого
        // вхождения подстроки на html
        latex = latex.replace(that.regulars[foundedKey], function (...matches) {
          return that.templater.generate(foundedKey, matches)
        });
        return parse_recoursive(latex);
      } else {
        return latex;
      }
    };

    return parse_recoursive(latex);
  };
}

export { Parser };
