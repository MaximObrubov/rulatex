class Parser {
  constructor(latex) {
    this.latex = latex;
    this.regulars = [
      {
        // abs
        regEx: /\\left\|(((?!(\\left\||\\right\|)).)+)\\right\|/,
        replaceHandler: function (matches) {
          return ``
        }
      },
      {
        //square brackets
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
        regEx: /\\(sin|cos|tg|ctg)\\left\(([^()]*)\\right\)/
        replaceHandler: function (matches) {
          return ``
        }
      }
    ]
  }

  parse(latex) {

    let parse_inner = function (latex) {
      this.regulars.forEach(function (value, index) {
        console.group("%c Custom log:", "background: #222; color: #bada55; font-size: 16px;");
        console.log(value, index);
        console.groupEnd();
      });
    };

    parse_inner


    for (let i = 0; i < regex) of regex_set
      match = latex.match(regex)
      if match then current_key = key

    if current_key and replace_behaviour[current_key]
      # Если совпадения были найдены, то произведем замену первого вхождения подстроки
      # на строку удовлетворяющую синтаксису math.js
      latex = latex.replace regex_set[current_key], (matches...) =>
        return replace_behaviour[current_key](matches)

      parse_latex_recoursive latex
    else
      ## Если совпадения не были найдены, то выходим из рекурсии
      latex = latex.replace /([a-z]+)(\()?/gi, (match, _a, _b) ->
        ## Далее мы должны проверить есть ли в выражении буквенные последовательности
        ## типа `ab` которые должны быть эквивалентны `a*b`
        spec = [
          "abs", "sqrt", "Infinity", "left", "right", "math", "pi",
          "sin", "cos", "unit", "deg"
        ]
        if match.length > 1 and (_a not in spec)
          match = match.split("").join("*")
          return match
        else
          return match
      return latex
  };
}





    latex_string = parse_latex_recoursive latex_string
