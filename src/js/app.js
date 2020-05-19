
export default function findBy(a, b) {
  const field = a;
  const value = b;
  return function (element) {
    if (element[field] !== undefined && element[field].includes(value)) return true;
    return false;
  };
}
