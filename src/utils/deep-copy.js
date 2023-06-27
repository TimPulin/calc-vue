export default function deepCopy(item) {
  let localItem;
  if (Array.isArray(item)) {
    localItem = item.slice(0, item.length);
    enumerationArray(localItem);
  } else if (typeof item === 'object') {
    localItem = Object.assign({}, item);
    enumerationObject(localItem);
  }
  return localItem;
}

function enumerationArray(localItem) {
  localItem.forEach((element) => {
    if (typeof element === 'object') deepCopy(element);
  });
}

function enumerationObject(localItem) {
  for (let key in localItem) {
    if (typeof localItem[key] === 'object') deepCopy(localItem[key]);
  }
}
