export function convertNumberDateToDateTimeString(dateNumber: number): string {
  const date = new Date(dateNumber);
  return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
}
