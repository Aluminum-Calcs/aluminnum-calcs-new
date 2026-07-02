export default function calculateCasement(input, sash = 1, width = 0, height = 0) {
  const w = Number(width) || 0;
  const h = Number(height) || 0;
  const rows = [];

  if (input === "width") {
    const in_w = sash === 1 ? w - 70 : (w - 110) / 2;
    const gw = in_w - 130;
    rows.push(
      { label: "Width", value: w, price: "--" },
      { label: "Inner Width", value: in_w, price: "--" },
      { label: "Glass Width", value: gw, price: "--" }
    );
    if (sash === 2) {
      rows.push({ label: "Molium Placement", value: (w - 42) / 2, price: "--" });
    }
  } else if (input === "height") {
    const in_h = h - 70;
    const gh = in_h - 130;
    rows.push(
      { label: "Height", value: h, price: "..." },
      { label: "Inner Height", value: in_h, price: "--" },
      { label: "Glass Height", value: gh, price: "--" }
    );
    if (sash === 2) {
      rows.push({ label: "Molium height", value: h - 60, price: "--" });
    }
  } else {
    const in_h = h - 70;
    const in_w = sash === 1 ? w - 70 : (w - 110) / 2;
    const gh = in_h - 130;
    const gw = in_w - 130;
    rows.push(
      { label: "Width", value: w, price: "--" },
      { label: "Inner Width", value: in_w, price: "--" },
      { label: "Glass Width", value: gw, price: "--" },
      { label: "Height", value: h, price: "..." },
      { label: "Inner Height", value: in_h, price: "--" },
      { label: "Glass Height", value: gh, price: "--" }
    );
    if (sash === 2) {
      rows.push(
        { label: "Molium height", value: h - 60, price: "--" },
        { label: "Molium Placement", value: (w - 42) / 2, price: "--" }
      );
    }
  }

  return rows;
}
