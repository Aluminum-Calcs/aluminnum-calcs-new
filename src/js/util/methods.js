
export let sel = ( selector, all=false, root=document) => {
  return all
    ? root.querySelectorAll(selector)
    : root.querySelector(selector);
}

export const isEmpty = (obj) => Object.keys(obj).length === 0;
