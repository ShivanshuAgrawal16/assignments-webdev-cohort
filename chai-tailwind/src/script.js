import { styler } from "../styler.js";

(function () {
  function applyStyles() {
    const elements = document.querySelectorAll("*");

    elements.forEach((el) => {
      const classes = [...el.classList];

      classes.forEach((cls) => {
        if (!cls.startsWith("chai-")) return;

        const fullKey = cls.replace("chai-", "");
        let styleObj = styler(fullKey);
        if (styleObj) {
          Object.assign(el.style, styleObj);
          el.classList.remove(cls);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", applyStyles);
})();

const observer = new MutationObserver(() => {
  document.querySelectorAll('[class*="chai-"]').forEach((el) => {
    const classes = [...el.classList];

    classes.forEach((cls) => {
      if (!cls.startsWith("chai-")) return;

      const fullKey = cls.replace("chai-", "");
      let styleObj = styler(fullKey);
      if (styleObj) {
        Object.assign(el.style, styleObj);
        el.classList.remove(cls);
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });
