import { initGlassPriceCalculator } from "./controller.js";
import { sel } from "../util/methods.js";

function bootstrapGlassPricePage() {
  const page = sel(".glass-price-page");

  if (!page) {
    return null;
  }

  const controller = initGlassPriceCalculator({
    onEntriesChange: () => {},
    onFeedbackChange: (message) => {
      const feedback = sel(".glass-price-feedback");
      if (feedback) {
        feedback.textContent = message;
      }
    },
  });

  return controller;
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", bootstrapGlassPricePage);
}

export { bootstrapGlassPricePage as initGlassPricePage };