function normalizeWindowType(windowType) {
  return windowType?.toString().replace(/-window$/i, "").toLowerCase() || "";
}

function normalizeSashes(sashes) {
  if (typeof sashes === "number") return sashes;
  if (typeof sashes === "string") {
    const numeric = Number(sashes);
    if (!Number.isNaN(numeric)) return numeric;

    const map = {
      one: 1,
      two: 2,
    };

    return map[sashes.toLowerCase()] ?? null;
  }
  return null;
}

export function validateStileInputs({ windowType = null, sashes = null, width = "", height = "" }) {
  const errors = {};
  const normalizedType = normalizeWindowType(windowType);
  const sashCount = normalizeSashes(sashes);

  if (!normalizedType) {
    errors.windowType = "Please choose a window type.";
  }

  if (normalizedType !== "sliding" && sashCount == null) {
    errors.sashes = "Please choose the number of sashes.";
  }

  if (!width || Number(width) <= 0) {
    errors.width = "Please enter a valid width.";
  }

  if (!height || Number(height) <= 0) {
    errors.height = "Please enter a valid height.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    normalizedType,
    sashCount,
  };
}
