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
import { passTypesKeys, passTypes } from '../../constants/passType';

interface ISelectPassTypeProps {
  selectedPassType: string;
  setType(type: string): void;
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
        <InputLabel htmlFor="password-type">Password type</InputLabel>
        <Select
          value={selectedPassType}
          onChange={(e) => {
            setType(e.target.value);
          }}
          inputProps={{
            name: 'password-type',
            id: 'password-type',
          }}
        >
          {
            passTypesKeys.map((type) => (
              <MenuItem value={type} key={type}>{passTypes[type].label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </MuiThemeProvider>
  )
}

export default SelectPassType
