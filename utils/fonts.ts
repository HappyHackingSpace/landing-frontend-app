import { cache } from "react";
import { readFile } from "node:fs/promises";

/**
 * Retrieves the regular font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the regular font file as an array buffer.
 */
export const getRegularFont = cache(async () => {
  const response = await readFile("assets/fonts/geist/Geist-Regular.otf");
  const font = Uint8Array.from(response).buffer;

  return font;
});

/**
 * Retrieves the bold font file asynchronously.
 * It returns a Promise that resolves to the font file's array buffer.
 * @returns A Promise resolving to the bold font file as an array buffer.
 */
export const getBoldFont = cache(async () => {
  const response = await readFile("assets/fonts/geist/Geist-SemiBold.otf");
  const font = Uint8Array.from(response).buffer;
  return font;
});
