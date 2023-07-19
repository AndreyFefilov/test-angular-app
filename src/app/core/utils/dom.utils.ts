export function getNumberOfTextLines(elementSelector: string): number {
  const element = document.querySelector(elementSelector) as HTMLElement;
  const fontSize = parseFloat(getComputedStyle(element).fontSize);
  const numberOfLines = Math.ceil(element.offsetHeight / fontSize);

  return numberOfLines;
}
