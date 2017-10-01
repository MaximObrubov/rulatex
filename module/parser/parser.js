class Parser {
  constructor() {
    this.regulars = {
      "abs": {
        regEx: /\\left\|(((?!(\\left\||\\right\|)).)+)\\right\|/,
        replaceHandler: function (matches) {
          return `<div class="rlp-node">|</div>${matches[1]}<div class="rlp-node">|</div>`;
        }
      },
      "brackets": {
        regEx: /\\left([\(\[])((?:(?!(?:\\left[\(\[]|\\right[\)\]])).)+)\\right([\)\]])/,
        replaceHandler: function (matches) {
          return `${matches[1]}${matches[2]}${matches[3]}`;
        }
      },
      "curly_brackets": {
        regEx: /\\left\\{((?:(?!(?:\\left\\{|\\right\\})).)+)\\right\\}/,
        replaceHandler: function (matches) {
          return `{${matches[1]}}`;
        }
      },
      "fraction": {
        regEx: /(\w+)?\\frac\{([^{}]+)\}\{([^{}]+)\}/,
        replaceHandler: function (matches) {
          if (typeof matches[1] != "undefined")
            return `(${matches[1]}+((${matches[2]})/(${matches[3]})))`;
          else
            return `((${matches[2]})/(${matches[3]}))`;
        }
      },
      "root": {
        regEx: /\\sqrt\{([^{}]+)\}/,
        replaceHandler: function (matches) {
          let _s = `<div class="rlp-node radic">
                      <div class="rlp-node radic-sign">\u221A</div>
                      <div class="rlp-node radic-inner">${matches[1]}</div>
                    </div>`;
          return _s;
        }
      },
      // "nth_root": {
      //   regEx: /\\sqrt\[([^\[\]]+)\]\{([^{}]+)\}/,
      //   replaceHandler: function (matches) {
      //     return ``;
      //   }
      // },
      "multiply": {
        regEx: /\\cdot/,
        replaceHandler: function (matches) {
          return `<div class="rlp-node">&middot;</div>`;
        }
      },
      "lower_or_equal": {
        regEx: /\\le(?!ft)/,
        replaceHandler: function (matches) {
          return `<div class="rlp-node">&le;</div>`;
        }
      },
      "greater_or_equal": {
        regEx: /\\ge/,
        replaceHandler: function (matches) {
          return `<div class="rlp-node">&ge;</div>`;
        }
      },
      "power": {
        regEx: /\^(?:\{([^{}]+)\}|(\d+))/,
        replaceHandler: function (matches) {
          return ``;
          // if (matches[1]) {
          //   return `^(${matches[1]})`;
          // } else if (matches[2]) {
          //   return `^(${matches[2]})`;
          // } else {
          //   return ``;
          // }
        }
      },
      "infty": {
        regEx: /\\infty/,
        replaceHandler: function (matches) {
          return `(Infinity)`;
        }
      },
      "pi": {
        regEx: /\\pi/,
        replaceHandler: function (matches) {
          return `<div class="rlp-node radic-sign">\u03A0</div>`;
        }
      }
    };
  }

  parse(latex) {
    let _self = this;

    function parse_recoursive(latex) {
      let foundedKey = null;

      for (let [key, regexObj] of Object.entries(_self.regulars)) {
        if (regexObj.regEx.test(latex)) {
          foundedKey = key;
          break;
        }
      }

      if (foundedKey) {
        // Если совпадения были найдены, то произведем замену первого
        // вхождения подстроки на html
        latex = latex.replace(
          _self.regulars[foundedKey].regEx, function (...matches) {
            return _self.regulars[foundedKey].replaceHandler(matches);
          }
        );
        return parse_recoursive(latex);
      } else {
        return latex;
      }
    };

    return parse_recoursive(latex);
  };
}

export { Parser };
