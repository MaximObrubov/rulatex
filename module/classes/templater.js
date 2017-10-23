class Templater {
  constructor() {
    this.counter = 1;
    this.templates = {
      "abs": "<div class=\"rl-bracket\">|</div>$m1<div class=\"rl-bracket\">|</div>",
      "brackets": "$m1$m2$m3",
      "curly_brackets": "{$m1}",
      "fraction":  `$m1
                    <div class="rl-fraction">
                      <div class="rl-numerator">$m2</div>
                      <div class="rl-denominator">$m3</div>
                    </div>`,
      "root": `<div class="rl-radic-sign">\u221A</div>
               <div class="rl-radic-inner">$m1</div>`,
      "multiply": "&middot",
      "lower_or_equal": "&le;",
      "greater_or_equal": "&ge;",
      "power": `<div class="rl-sup">$m1</div>`,
      "infty": `infty`,
      "pi": "&pi;"
    };
  }

  generate(key, matches) {
    var targetString = this.templates[key],
        idx = 0;

    for (let match of matches) {
      if (idx == 0) {
        idx++;
        continue;
      } else {
        let replacer = match ? match : "",
            _re = new RegExp("\\$m" + idx, "g");
        targetString = targetString.replace(_re, replacer);
        idx++;
      }
    }
    return this.wrapNode(targetString);
  }

  wrapNode(string) {
    return `<div class="rl-node" data-id="${this.counter++}">${string}</div>`
  }
}

export { Templater };
