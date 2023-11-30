export { findVariableValue }

const findVariableValue = (variable, list) => {
  for (let key in list[0]) {
    let element = list[0][key].find(element => element.cssVariable === variable);
    if (element) {
      return element.variableValue;
    }
  }
  return undefined;
}