export enum EPassType {
  PIN_4 = 0,
  PIN_6 = 1,
  PIN_8 = 2,
}

export const passTypeLabele = {
  [EPassType.PIN_4]: '1234',
  [EPassType.PIN_6]: '123456',
  [EPassType.PIN_8]: '12345678',
}

export const passOptions = {
  [EPassType.PIN_4]: {length: 4},
  [EPassType.PIN_6]: {length: 6},
  [EPassType.PIN_8]: {length: 8},
}

export const numbers = '1234567890';