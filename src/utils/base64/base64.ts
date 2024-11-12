/**
 * Decodes a base64 encoded string and returns the decoded value.
 * @param value - The base64 encoded string to decode.
 * @returns
 * - If the decoded value is a valid JSON string, it is parsed and returned as an object.
 * - If the decoded value is not a valid JSON string, it is returned as a string.
 * - If an error occurs during decoding, null is returned.
 */
export function base64Decode<T>(value: string): T | string | null {
  try {
    return JSON.parse(window.atob(value));
  } catch (error) {
    const { message } = error as Error;

    if (message.includes('not valid JSON')) {
      return window.atob(value);
    }

    return null;
  }
}

/**
 * Encodes a value to Base64.
 *
 * @param value - The value to be encoded.
 * @returns The Base64 encoded string.
 */
function base64Encode(value: unknown) {
  return window.btoa(JSON.stringify(value));
}

/**
 * The `base64` object provides utility functions for encoding and decoding base64 strings.
 * - `decode` decodes a base64 encoded string and returns the decoded value.
 * - `encode` encodes a value to base64.
 */
const base64 = {
  decode: base64Decode,
  encode: base64Encode,
};

export default base64;
