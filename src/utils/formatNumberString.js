export function formatNumberString(input) {
  const inputAsNumber = Number(input);
  if (inputAsNumber === -1)
    return "unknown";
  if (isNaN(inputAsNumber) === false)
    return Number(input).toLocaleString();
  return input;
}