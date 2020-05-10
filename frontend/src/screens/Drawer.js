import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useState } from 'react';
import { DrawerStyles } from '../screens/ScreenStyles';

const TemporaryDrawer = () => {
  const classes = DrawerStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role='presentation'
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        {['Tribes', 'Paintings'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <MenuIcon onClick={openDrawer}>{'left'}</MenuIcon>
      <Drawer anchor='left' open={isDrawerOpen} onClose={closeDrawer}>
        {list()}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
