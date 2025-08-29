export function getFirstChar(text) {
  if (!text || typeof text !== "string") return "";
  return text.trim().charAt(0);
}
