export enum EPassType {
  PIN_4 = 0,
  PIN_6 = 1,
  PIN_8 = 2,
  NUM_ALPHABET_LOWER_6 = 3,
  NUM_ALPHABET_LOWER_8 = 4,
  NUM_ALPHABET_UPPER_6 = 5,
  NUM_ALPHABET_UPPER_8 = 6,
}

export const passTypeLabele = {
  [EPassType.PIN_4]: '1234',
  [EPassType.PIN_6]: '123456',
  [EPassType.PIN_8]: '12345678',
  [EPassType.NUM_ALPHABET_LOWER_6]: '123abc',
  [EPassType.NUM_ALPHABET_LOWER_8]: '1234abcd',
  [EPassType.NUM_ALPHABET_UPPER_6]: '123ABC',
  [EPassType.NUM_ALPHABET_UPPER_8]: '1234ABCD',
}

export const numbers = '1234567890';
export const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const passOptions = {
  [EPassType.PIN_4]: {length: 4, symbols: numbers},
  [EPassType.PIN_6]: {length: 6, symbols: numbers},
  [EPassType.PIN_8]: {length: 8, symbols: numbers},
  [EPassType.NUM_ALPHABET_LOWER_6]: {length: 6, symbols: [numbers,alphabet].join('')},
  [EPassType.NUM_ALPHABET_LOWER_8]: {length: 8, symbols: [numbers,alphabet].join('')},
  [EPassType.NUM_ALPHABET_UPPER_6]: {length: 6, symbols: [numbers,alphabetUpperCase].join('')},
  [EPassType.NUM_ALPHABET_UPPER_8]: {length: 8, symbols: [numbers,alphabetUpperCase].join('')},
}
