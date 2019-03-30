import * as React from 'react';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';
import createPassword from '../../utils/createPassword';

import './Item.css';

interface IItemProps {
  passType: string;
}

function Item(props: IItemProps) {
  const {
    passType,
  } = props;
  const hiddenInputRef = React.createRef<HTMLInputElement>();
  const value = createPassword(passType)

  return (
    <ListItem button>
      <input ref={hiddenInputRef} defaultValue={value} className="hidden-input" />
      <ListItemText primary={value} onClick={() => {
        hiddenInputRef.current.select();
        document.execCommand("copy");
      }}/>
    </ListItem>
  )
}

export default Item