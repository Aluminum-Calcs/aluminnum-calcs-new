import { sel } from "../util/methods.js";

export default function display(rows) {
  const temp = sel('template#table');
  if (!temp) return;

  const clone = document.importNode(temp.content, true);
  const body = clone.querySelector('tbody');
  if (!body) return;

  if (Array.isArray(rows)) {
    body.innerHTML = rows
      .map((row) => `
        <tr>
          <td>${row.label}</td>
          <td>${row.value}</td>
          <td>${row.price ?? '--'}</td>
        </tr>
      `)
      .join("");
  } else {
    body.innerHTML = rows || "";
  }

  const results = sel('.results');
  if (!results) return;
  results.innerHTML = '';
  results.appendChild(clone);
  results.classList.add('show');
}
