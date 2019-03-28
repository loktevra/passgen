import { EPassType, passOptions, numbers } from '../constants/passType';

export default function createPassword(passType: EPassType) {
  return Array(passOptions[passType].length)
    .fill(null)
    .map(() => passOptions[passType].symbols[Math.floor(Math.random() * passOptions[passType].symbols.length)])
    .join('')
}
