import * as React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  MuiThemeProvider,
} from '@material-ui/core';
import theme from './theme';
import { ISelectPassTypeStyles } from './styles';
import { EPassType, passTypeLabele } from '../../constants/passType';

interface ISelectPassTypeProps {
  selectedPassType: EPassType;
  setType(type: number): void;
  classes: ISelectPassTypeStyles;
}

function SelectPassType(props: ISelectPassTypeProps) {
  const {
    selectedPassType,
    setType,
    classes,
  } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="password-type">Age</InputLabel>
        <Select
          value={selectedPassType}
          onChange={(e) => {
            setType(Number(e.target.value));
          }}
          inputProps={{
            name: 'password-type',
            id: 'password-type',
          }}
        >
          {
            Object.values(EPassType).filter(Number.isInteger).map((type: EPassType) => (
              <MenuItem value={type} key={type}>{passTypeLabele[type]}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </MuiThemeProvider>
  )
}

export default SelectPassType
