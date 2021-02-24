import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import clsx from "clsx";
import React, { useState } from "react";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
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
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
    </div>
  );

  return (
    <div>
      <IconButton color="inherit">
        <MenuIcon onClick={openDrawer}>{"left"}</MenuIcon>
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
        {list()}
      </Drawer>
    </div>
  );
}
