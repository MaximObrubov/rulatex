class Parser {
  constructor() {
    this.regIndex = -1;
    this.regulars = [
      {
        // abs
        regEx: /\\left\|(((?!(\\left\||\\right\|)).)+)\\right\|/,
        replaceHandler: function (matches) {
          return `<span>|</span>${matches[1]}<span>|</span>`;
        }
      },
      {
        // brackets
        regEx: /\\left([\(\[])((?:(?!(?:\\left[\(\[]|\\right[\)\]])).)+)\\right([\)\]])/,
        replaceHandler: function (matches) {
          return `${matches[1]}${matches[2]}${matches[3]}`;
        }
      },
      {
        // curly brackets
        regEx: /\\left\\{((?:(?!(?:\\left\\{|\\right\\})).)+)\\right\\}/,
        replaceHandler: function (matches) {
          return `{${matches[1]}}`;
        }
      },
      {
        // fraction
        regEx: /(\w+)?\\frac\{([^{}]+)\}\{([^{}]+)\}/,
        replaceHandler: function (matches) {
          if (typeof matches[1] != "undefined")
            return `(${matches[1]}+((${matches[2]})/(${matches[3]})))`;
          else
            return `((${matches[2]})/(${matches[3]}))`;
        }
      },
      {
        // sqrt
        regEx: /\\sqrt\{([^{}]+)\}/,
        replaceHandler: function (matches) {
          return `(sqrt(${matches[1]}))`;
        }
      },
      {
        regEx: /\\sqrt\[([^\[\]]+)\]\{([^{}]+)\}/,
        replaceHandler: function (matches) {
          return ``;
        }
      },
      {
        regEx: /\\cdot/,
        replaceHandler: function (matches) {
          return `*`;
        }
      },
      {
        regEx: /\\le(?!ft)/,
        replaceHandler: function (matches) {
          return `<=`;
        }
      },
      {
        regEx: /\\ge/,
        replaceHandler: function (matches) {
          return `>=`;
        }
      },
      {
        // power
        regEx: /\^(?:\{([^{}]+)\}|(\d+))/,
        replaceHandler: function (matches) {
          if (matches[1]) {
            return `^(${matches[1]})`;
          } else if (matches[2]) {
            return `^(${matches[2]})`;
          } else {
            return ``;
          }
        }
      },
      {
        regEx: /\\infty/,
        replaceHandler: function (matches) {
          return `(Infinity)`;
        }
      },
      {
        regEx: /\\pi/,
        replaceHandler: function (matches) {
          return `(Math.PI)`;
        }
      },
      {
        regEx: /\\(sin|cos|tg|ctg)\\left\(([^()]*)\\right\)/,
        replaceHandler: function (matches) {
          return ``;
        }
      }
    ];
  }

  parse(latex) {
    let _self = this;
    let parse_inner = function (latex) {
      for (let [index, regexObj] of _self.regulars.entries()) {
        if (regexObj.regEx.test(latex)) {
          _self.regIndex = index;
          break;
        } else {
          _self.regIndex = -1;
        }
      }

      if (_self.regIndex > -1) {
        // Если совпадения были найдены, то произведем замену первого вхождения подстроки
        // на строку удовлетворяющую синтаксису math.js
        latex = latex.replace(
          _self.regulars[_self.regIndex].regEx, function (...matches) {
            return _self.regulars[_self.regIndex].replaceHandler(matches);
          }
        );

        return parse_inner(latex);
      } else {
        return latex;
      }
    };

    return parse_inner(latex);
  };
}

export { Parser };
