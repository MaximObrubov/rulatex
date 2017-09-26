;(function ($) {
  var $mainBlock = $(".js-main-block"),
      testLatex = [
        "\\infty ∪ℤℝℚℕπ∈∫→←⇒⇔∅",
        "\\left\\{-\\infty; 2\\right]\\cup{3}\\cup(8;+\\infty)",
        "\\frac{\\infty}{-\\infty} + \\infty - 2 -\\infty",
        "\\sqrt{\\sqrt{16}} + \\sqrt{\\frac{2}{3}}",
        "\\left|x\\right|^{4}+\\left(\\frac{\\sqrt{x}}{4}\\right)^{3}+x^{\\frac{3}{4}}",
        "ax^2 + bx + c \\ge 0",
        "f\\left(x\\right)=12{x}^{2}+21",
        "r\\left(-x\\right)=3x^{3\\frac{3}{2}}",
        "17,345  \\approx 17,35",
        "\\frac{a}{b} : \\frac{b}{a} = \\frac{a\\cdot b}{b\\cdot a}",
      ];

  for (var i = 0, l = testLatex.length; i < l; i++) {
    $line = $("<div class='line'>");
    $line
      .append(testLatex[i])
      .appendTo($mainBlock);
  }
})(jQuery)
