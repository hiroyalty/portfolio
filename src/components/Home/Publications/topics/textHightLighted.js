/**
 * Highlights keywords in a text by wrapping them in a span.
 * @param {string} text - The text to search within.
 * @param {string[]} keywords - An array of keywords to highlight.
 * @returns {string} - The text with highlighted keywords.
 */
export function textHightLighted(text, keywords = []) {
  if (keywords.length > 0) {
    const regex = new RegExp(keywords.join("|"), "gi");
    return text.replace(regex, match => `<span class="text-secondary">${match}</span>`);
  }
  return text;
}
