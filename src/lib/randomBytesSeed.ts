import { createHash, randomBytes } from 'crypto';

/**
 * Generate random bytes and allow the final user to pass a seed for repeatability.
 * @param {number} length The random bytes length.
 * @param {Buffer | string} seed The seed. If not seed is provided, fallbacks to native {@link randomBytes}.
 */
export function randomBytesSeed(length: number, seed?: Buffer | string) {
  if (!seed) {
    // No seed: fallback to native randomBytes
    return randomBytes(length);
  }

  let round: Buffer = Buffer.from(seed);
  let buffer = Buffer.alloc(0);

  while (buffer.length < length) {
    round = createHash('sha256').update(round).digest();
    buffer = Buffer.concat([buffer, round]);
  }

  return buffer.slice(0, length);
}
