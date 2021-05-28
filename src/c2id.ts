import base from 'base-x';
import { Buffer } from 'buffer';
import randomBytesSeed from '@csquare/random-bytes-seed';

/** All digits (10) + lower case and upper case letters (2*26). */
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
/** Encode function from `base-x` */
const encode = base(alphabet).encode;
const DEFAULT_LENGTH = 16;

/**
 * Generate a random c2id of default length (length = 16).
 */
export function c2id(): string;

/**
 * Generate a c2id of a given length.
 * @param {number} length The c2id desired length.
 */
export function c2id(length: number): string;

/**
 * Generate a c2id of default length (length = 16) from a seed.
 * @param {string} seed The c2id seed.
 */
export function c2id(seed: Buffer | string): string;

/**
 * Generate a c2id of a given length from the given seed.
 * @param {number} length The c2id desired length.
 * @param {string} seed The c2id seed.
 */
export function c2id(length: number, seed?: Buffer | string): string;

/**
 * Implementation.
 * @param {number | Buffer | string} lengthOrSeed The length, the seed or undefined.
 * @param {string | undefined} maybeSeed The seed or undefined.
 */
export function c2id(lengthOrSeed?: number | Buffer | string, maybeSeed?: Buffer | string): string {
  let length = DEFAULT_LENGTH;
  let seed: Buffer | string | undefined = undefined;

  if (typeof lengthOrSeed === 'number') {
    length = lengthOrSeed;
    seed = maybeSeed;
  } else if (typeof lengthOrSeed === 'string' || lengthOrSeed instanceof Buffer) {
    seed = lengthOrSeed;
  }

  // 2 bytes are 64 combinations, and they might fit into one or 2 chars
  const bytes = randomBytesSeed(length * 2, seed);
  return encode(bytes).substring(0, length);
}

export default c2id;
