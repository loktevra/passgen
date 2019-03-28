import * as React from 'react';
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import SelectPassType from '../SelectPassType';
import { EPassType } from '../../constants/passType';
import createPassword from '../../utils/createPassword';

interface IAppStyles {
}

interface IAppProps {
  classes: IAppStyles;
}

const styles = (theme: any): IAppStyles => ({
});

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
