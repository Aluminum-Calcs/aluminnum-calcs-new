import { STANDARD_HEIGHT_MM, STANDARD_WIDTH_MM } from "./constants.js";

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function validateForm(values) {
  const width = toNumber(values.width);
  const height = toNumber(values.height);
  const quantity = toNumber(values.quantity);
  const fullSheetPrice = toNumber(values.fullSheetPrice);

  if (!width || !height) {
    return {
      isValid: false,
      message: "Please enter both width and height.",
    };
  }

  if (width > STANDARD_WIDTH_MM || height > STANDARD_HEIGHT_MM) {
    return {
      isValid: false,
      message: "The entered size exceeds the standard sheet size.",
    };
  }

  if (quantity < 1) {
    return {
      isValid: false,
      message: "Quantity should be at least 1.",
    };
  }

  if (fullSheetPrice < 1) {
    return {
      isValid: false,
      message: "Full sheet price must be greater than zero.",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}
