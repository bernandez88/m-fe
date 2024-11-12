import base64 from './base64';

describe('utils/base64', () => {
  it('should decode a valid base64 string to JSON', () => {
    /* cspell:disable-next-line */
    const value = 'eyJuYW1lIjoiVGVzdCJ9';

    const result = base64.decode(value);

    expect(result).toEqual({ name: 'Test' });
  });

  it('should decode an invalid base64 string to the original string', () => {
    const value = 'VGVzdA==';

    const result = base64.decode(value);

    expect(result).toBe('Test');
  });

  it('should return null when decoding an invalid base64 string that is not valid JSON', () => {
    const value = '*';

    const result = base64.decode(value);

    expect(result).toBeNull();
  });

  it('should encode a value to base64', () => {
    const value = { name: 'Test' };

    const result = base64.encode(value);

    /* cspell:disable-next-line */
    expect(result).toBe('eyJuYW1lIjoiVGVzdCJ9');
  });
});
