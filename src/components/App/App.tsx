import * as React from 'react';
import {
  AppBar,
  Toolbar,
  List,
  withStyles,
} from '@material-ui/core';
import SelectPassType from '../SelectPassType';
import Item from '../Item';
import { passTypesKeys } from '../../constants/passType';

interface IAppStyles {
}

interface IAppProps {
  classes: IAppStyles;
}

const styles = (theme: any): IAppStyles => ({
});

function App(props: IAppProps) {
  const [passType, setType] = React.useState(passTypesKeys[0]);

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
            <Item passType={passType} key={index}/>
          ))
        }
      </List>
    </>
  )
}

export default withStyles(styles)(App) 
