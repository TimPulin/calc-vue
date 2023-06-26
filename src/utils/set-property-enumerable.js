// TODO удалить если не используется

export default function setPropertyEnumerable(
  object,
  propertyName,
  isEnumerable
) {
  const localValue = object[propertyName];
  Object.defineProperty(object, propertyName, {
    value: localValue,
    writable: true,
    enumerable: isEnumerable,
    configurable: true,
  });
}
