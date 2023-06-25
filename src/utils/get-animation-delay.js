export default function getAnimationDelay(delayVaribleName) {
  const root = document.querySelector(':root');
  const variableValue =
    getComputedStyle(root).getPropertyValue(delayVaribleName);
  const arrSplitedString = variableValue
    .slice(0, variableValue.length - 1)
    .split('.');

  return Number(arrSplitedString[0]) * 1000 + Number(arrSplitedString[1]) * 100;
}
