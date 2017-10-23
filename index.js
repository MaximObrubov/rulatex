// Этот файл - это имитация пользовательского использования
// он ничего не должен знать о webpack модулях классах и прочем
// всё что ему нужно - это использовать библиотеку
// import { RuLatex } from './module/rulatex.js';

;(function ($) {

  if (window.RuLatex) {
    var ruLatex = new RuLatex(),
        $mainBlock = $(".js-main-block"),
        testLatex = [
          // "\\infty ∪ℤℝℚℕπ∈∫→←⇒⇔∅",
          // "\\left\\{-\\infty; 2\\right]\\cup{3}\\cup(8;+\\infty)",
          // "\\frac{\\infty}{-\\infty} + \\infty - 2 -\\infty",
          // "\\sqrt{\\sqrt{16}} + \\sqrt{\\frac{2}{3}}",
          "\\left|x\\right|^{4}+\\left(\\frac{\\sqrt{x}}{4}\\right)^{3}+x^{\\frac{3}{4}}",
          "ax^{2} + bx + c \\ge 0",
          "f\\left(x\\right)=12{x}^{2}+21",
          "r\\left(-x\\right)=3x^{3\\frac{3}{2}}",
          // "17,345  \\approx 17,35",
          // "\\frac{a}{b} : \\frac{b}{a} = \\frac{a\\cdot b}{b\\cdot a}",
        ];


    for (let i = 0, l = testLatex.length; i < l; i++) {
      let $line = $("<div class='line'>"),
          $left = $("<div class='left'>"),
          $right = $("<div class='right'>");

      $left.append(testLatex[i]);
      $right.append(ruLatex.parse(testLatex[i]));
      $line
        .append($left)
        .append($right)
        .appendTo($mainBlock);
    }

  } else {
    console.error("No Rulatex class found :(");
  }
})(jQuery)
