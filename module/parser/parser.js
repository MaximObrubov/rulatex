class Parser {
  constructor() {
    this.regulars = [
      {
        // abs
        regEx: /\\left\|(((?!(\\left\||\\right\|)).)+)\\right\|/,
        replaceHandler: function (matches) {
          return `<span>|</span>${matches[1]}<span>|</span>`
        }
      },
      {
        // brackets
        regEx: /\\left([\(\[])((?:(?!(?:\\left[\(\[]|\\right[\)\]])).)+)\\right([\)\]])/,
        replaceHandler: function (matches) {
          return `${matches[1]}${matches[2]}${matches[3]}`
        }
      },
      {
        // curly brackets
        regEx: /\\left\\{((?:(?!(?:\\left\\{|\\right\\})).)+)\\right\\}/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        // fraction
        regEx: /(\w+)?\\frac\{([^{}]+)\}\{([^{}]+)\}/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        regEx: /\\sqrt\{([^{}]+)\}/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        regEx: /\\sqrt\[([^\[\]]+)\]\{([^{}]+)\}/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        regEx: /\\cdot/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        regEx: /\\cdot/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        regEx: /\\le(?!ft)/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        regEx: /\\ge/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        // power
        regEx: /\^(?:\{([^{}]+)\}|(\d+))/,
        replaceHandler: function (matches) {
            return ``
        }
      },
      {
        regEx: /\\infty/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        regEx: /\\pi/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        regEx: /\\(sin|cos|tg|ctg)\\left\(([^()]*)\\right\)/,
        replaceHandler: function (matches) {
          return ``
        }
      }
    ]
  }

  parse(latex) {
    let _self = this;
    let parse_inner = function (latex) {
      _self.regulars.forEach(function (regexObj, index) {
        if (regexObj.regEx.test(latex)) {
          _self.regIndex = index;
          return false;
        } else {
          _self.regIndex = false;
        }
      });

      if (_self.regIndex) {
        // Если совпадения были найдены, то произведем замену первого вхождения подстроки
        // на строку удовлетворяющую синтаксису math.js
        latex = latex.replace(_self.regulars[_self.regIndex].regEx, function (matches) {
          return _self.regulars[_self.regIndex].replaceHandler(matches);
        });
        parse_inner(latex);
      } else {
        return latex;
      }
    };

    parse_inner(latex);
  };
}

export { Parser };
