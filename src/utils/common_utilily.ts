// src/utils/common_utilily.ts

/**
 * Removes leading numbers and trailing dots/spaces from a string.
 * Example: "1. Mechanical Energy" -> "Mechanical Energy"
 */
export const removeLeadingNumber = (input: string): string => {
  if (!input) return "";
  return input.replace(/^\d+[\.\s-]*/, "").trim();
};

/**
 * Extracts route path segments between 'app' and 'page' and joins them with spaces.
 * Example: "src/app/Chapter6_Engine/Intake_System/page.tsx" -> "Chapter6_Engine Intake_System"
 */
export const formatAppPath = (path: string): string => {
  if (!path) return "";

  // 1. Normalize backslashes (\) to forward slashes (/)
  const normalized = path.replace(/\\/g, "/");

  // 2. Extract relative path inside the 'app' directory up to the file name
  const match = normalized.match(/app\/(.*?)\/[^/]+$/i);
  if (!match || !match[1]) return "";

  // 3. Replace slashes with spaces
  return match[1].split("/").join(" ");
};