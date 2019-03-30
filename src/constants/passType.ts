const numbers = '1234567890';
const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersAlphabetLowerCase = numbers.concat(alphabetLowerCase);
const numbersAlphabetUpperCase = numbers.concat(alphabetUpperCase);
const numbersAlphabet = numbers.concat(alphabetLowerCase).concat(alphabetUpperCase);

type TCreatePassTypeParams = [string, string[]]
interface IPassType {
  key: string;
  label: string;
  mask: string[];
}
function createPassType([label, mask]: TCreatePassTypeParams): IPassType{
  return {
    key: label,
    label,
    mask,
  }
}

interface IPassTypes {
  [key: string]: IPassType;
}
export const passTypes: IPassTypes = [
  ['1234', [numbers, numbers, numbers, numbers]],
  ['123456', [numbers, numbers, numbers, numbers, numbers, numbers]],
  ['12345678', [numbers, numbers, numbers, numbers, numbers, numbers, numbers, numbers]],
  ['123abc', [numbers, numbers, numbers, alphabetLowerCase, alphabetLowerCase, alphabetLowerCase]],
  ['1234abcd', [numbers, numbers, numbers, numbers, alphabetLowerCase, alphabetLowerCase, alphabetLowerCase, alphabetLowerCase]],
  ['123ABC', [numbers, numbers, numbers, alphabetUpperCase, alphabetUpperCase, alphabetUpperCase]],
  ['1234ABCD', [numbers, numbers, numbers, numbers, alphabetUpperCase, alphabetUpperCase, alphabetUpperCase, alphabetUpperCase]],
  ['1b3d5f7h', [numbersAlphabetLowerCase, numbersAlphabetLowerCase, numbersAlphabetLowerCase, numbersAlphabetLowerCase, numbersAlphabetLowerCase, numbersAlphabetLowerCase, numbersAlphabetLowerCase, numbersAlphabetLowerCase]],
  ['1B3D5F7H', [numbersAlphabetUpperCase, numbersAlphabetUpperCase, numbersAlphabetUpperCase, numbersAlphabetUpperCase, numbersAlphabetUpperCase, numbersAlphabetUpperCase, numbersAlphabetUpperCase, numbersAlphabetUpperCase]],
  ['1b3D5f7H', [numbersAlphabet, numbersAlphabet, numbersAlphabet, numbersAlphabet, numbersAlphabet, numbersAlphabet, numbersAlphabet, numbersAlphabet]],
].map(createPassType).reduce<IPassTypes>((acc, options) => ({
  ...acc,
  [options.key]: options,
}), {});

export const passTypesKeys = Object.keys(passTypes);