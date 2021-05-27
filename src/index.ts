import base from 'base-x';
import { Buffer } from 'buffer';
import { randomBytes } from 'crypto';

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopoqrstuvwxyz';
const encode = base(alphabet).encode;

export function c2id(length: number, seed?: Buffer | string) {
  // 2 bytes are 64 combinations, and they might fit into one or 2 chars
  const bytes = randomBytes(length * 2);
  return encode(bytes).substring(0, length);
}
