export const convertHtmlToString = (html: string): string => {
  const parser = new DOMParser();
  const noteElement = parser.parseFromString(html, "text/html").body;
  return noteElement.textContent || "";
};

export const htmlEncoder = (string: string) => {
  return string.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
};
