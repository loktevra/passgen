const digits = '1234567890';
const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = alphabetLowerCase.concat(alphabetUpperCase)
const digitsAlphabetLowerCase = digits.concat(alphabetLowerCase);
const digitsAlphabetUpperCase = digits.concat(alphabetUpperCase);
const digitsAlphabet = digits.concat(alphabet);

const masksSynonyms: { [key: string]: string} = {
  d: digits,
  al: alphabetLowerCase,
  au: alphabetUpperCase,
  aa: alphabet,
  dal: digitsAlphabetLowerCase,
  dau: digitsAlphabetUpperCase,
  da: digitsAlphabet,
}

type TCreatePassTypeParams = [string, string]
interface IPassType {
  key: string;
  label: string;
  mask: string[];
}
function createPassType([label, mask]: TCreatePassTypeParams): IPassType{
  return {
    key: label,
    label,
    mask: mask.split(',').map(synonym => masksSynonyms[synonym]),
  }
}

interface IPassTypes {
  [key: string]: IPassType;
}
export const passTypes: IPassTypes = [
  ['1234', 'd,d,d,d'],
  ['123456', 'd,d,d,d,d,d'],
  ['12345678', 'd,d,d,d,d,d,d,d'],
  ['123abc', 'd,d,d,al,al,al'],
  ['1234abcd', 'd,d,d,d,al,al,al,al'],
  ['123ABC', 'd,d,d,au,au,au'],
  ['1234ABCD', 'd,d,d,d,au,au,au,au'],
  ['1b3d5f7h', 'dal,dal,dal,dal,dal,dal,dal,dal'],
  ['1B3D5F7H', 'dau,dau,dau,dau,dau,dau,dau,dau'],
  ['1b3D5f7H', 'da,da,da,da,da,da,da,da'],
].map(createPassType).reduce<IPassTypes>((acc, options) => ({
  ...acc,
  [options.key]: options,
}), {});

export const passTypesKeys = Object.keys(passTypes);