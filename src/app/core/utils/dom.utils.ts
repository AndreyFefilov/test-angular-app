export function getNumberOfTextLines(elementData: HTMLElement | string): number | null {
  let element: HTMLElement | null;

  if (typeof elementData === 'string') {
    element = document.querySelector(elementData);

    if (!element) {
      return null;
    }
  } else {
    element = elementData;
  }

  const fontSize = parseFloat(getComputedStyle(element).fontSize);
  const numberOfLines = Math.ceil(element.offsetHeight / fontSize);

  return numberOfLines;
}
