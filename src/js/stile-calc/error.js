
export function checkForErrors(windowType = null, sashes = null) {
  if (windowType == null) {
    sel("form fieldset.windowType").classList.add('error');
    return;
  }else sel("form fieldset.windowType").classList.remove('error');
  
  if (windowType != "sliding" && typeof sashes != "number") {
    sel("form fieldset.sash-field").classList.add('error');
    return;
  } sel("form fieldset.sash-field").classList.remove('error');
  console.log("error removed");


  if (!inputWidth.value) {
    inputWidth.closest('.field').classList.add('error');
    if (inputHeight.value) calculate("height", windowType, sashes);
  } else if (!inputHeight.value) {
    inputHeight.closest('.field').classList.add('error');
    if (inputWidth.value) calculate("width", windowType, sashes);
  } else {
    inputWidth.closest('.field').classList.remove('error');
    inputHeight.closest('.field').classList.remove('error');
    calculate("all", windowType, sashes);
  }
}