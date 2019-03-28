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
  MuiThemeProvider,
} from '@material-ui/core';
import SelectPassType from '../SelectPassType';
import { EPassType, passOptions, numbers } from '../../constants/passType';

interface IAppStyles {
}

interface IAppProps {
  classes: IAppStyles;
}

const styles = (theme: any): IAppStyles => ({
});

function createPassword(passType: EPassType) {
  return Array(passOptions[passType].length).fill(null).map(() => numbers[Math.floor(Math.random() * numbers.length)]).join('')
}

function App(props: IAppProps) {
  const [passType, setType] = React.useState(EPassType.PIN_4);

  return (
    <>
      <AppBar>
        <Toolbar>
          <SelectPassType selectedPassType={passType} setType={setType} />
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
