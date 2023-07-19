export function convertNumberDateToDateTimeString(dateNumber: number): string {
  const date = new Date(dateNumber).toLocaleDateString();
  const time = new Date(dateNumber).toLocaleTimeString();

  return `${date} ${time}`;
}
