import * as React from 'react';
import {
  AppBar,
  Toolbar,
  FormControl,
  InputLabel,
  Select,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  withStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';

interface IAppStyles {
  formControl: any;
}

interface IAppProps {
  classes: IAppStyles;
}

const styles = (theme: any): IAppStyles => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
  },
});
const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});


enum EPassType {
  PIN_4 = 0,
  PIN_6 = 1,
}

const passTypeLabele = {
  [EPassType.PIN_4]: '1234',
  [EPassType.PIN_6]: '123456',
}

const passOptions = {
  [EPassType.PIN_4]: {length: 4},
  [EPassType.PIN_6]: {length: 6},
}

const numbers = '1234567890';

function createPassword(passType: EPassType) {
  return Array(passOptions[passType].length).fill(null).map(() => numbers[Math.floor(Math.random() * numbers.length)]).join('')
}

function App(props: IAppProps) {
  const {
    classes,
  } = props;

  const [passType, setType] = React.useState(EPassType.PIN_4);

  return (
    <>
      <AppBar>
        <Toolbar>
          <MuiThemeProvider theme={theme}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="password-type">Age</InputLabel>
              <Select
                value={passType}
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
        </Toolbar>
      </AppBar>
      <List component="nav">
        {
          Array(10).fill(null).map((item, index) => (
            <ListItem button key={index}>
              <ListItemText primary={createPassword(passType)} />
            </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default withStyles(styles)(App) 
