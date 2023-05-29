export const convertHtmlToString = (html: string): string => {
  const parser = new DOMParser();
  const noteElement = parser.parseFromString(html, "text/html").body;
  return noteElement.textContent || "";
};
