/**
 * Removes leading numbers and trailing dots/spaces from a string.
 * Example: "1. Mechanical Energy" -> "Mechanical Energy"
 */
export const removeLeadingNumber = (input: string): string => {
  if (!input) return "";
  return input.replace(/^\d+[\.\s-]*/, "").trim();
};