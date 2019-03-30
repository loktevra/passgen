import { passTypes } from '../constants/passType';

export default function createPassword(key: string) {
  const length = passTypes[key].mask.length;

  return passTypes[key].mask
    .map(mask => mask[Math.floor(Math.random() * mask.length)])
    .join('')
}
