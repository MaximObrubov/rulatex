class Templater {
  constructor() {
    this.templates = {
      "abs": "<div class=\"rlp-bracket\">|</div>$m1<div class=\"rlp-bracket\">|</div>",
      "brackets": "$m1$m2$m3",
      "curly_brackets": "{$m1}",
      "fraction": "$m1$m2/$m3",
      "root": `<div class="rlp-node radic">
                  <div class="rlp-node radic-sign">\u221A</div>
                  <div class="rlp-node radic-inner">$m1</div>
              </div>`,
      "multiply": "&middot",
      "lower_or_equal": "&le;",
      "greater_or_equal": "&ge;",
      "power": `<sup>$m1</sup>`,
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
    return targetString;
  }
}

export { Templater };
