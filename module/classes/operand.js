class Operand {
  constructor() {
    this.views = {
      "abs": `<div class="rlp-node">|</div>$m1<div class="rlp-node">|</div>`,
      "brackets": `$m1$m2$m3`,
      "curly_brackets": `{$m1}`,
      "fraction": `frac`,
      "root": `<div class="rlp-node radic">
                  <div class="rlp-node radic-sign">\u221A</div>
                  <div class="rlp-node radic-inner">$m1</div>
              </div>`,
      "multiply": `<div class="rlp-node">&middot;</div>`,
      "lower_or_equal": `<div class="rlp-node">&le;</div>`,
      "greater_or_equal": `<div class="rlp-node">&ge;</div>`,
      "power": `power`,
      "infty": `infty`,
      "pi": `<div class="rlp-node radic-sign">\u03A0</div>`
  }
}
