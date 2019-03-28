
export interface ISelectPassTypeStyles {
  formControl: any;
}

export default (theme: any): ISelectPassTypeStyles => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
  },
});