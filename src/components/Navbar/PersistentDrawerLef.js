import React from 'react';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TodosIcon from '@material-ui/icons/TodaySharp';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import './navbar.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{margin: 20}}>
        <ul className="nav-list">
          <li className="nav-link">
            <NavLink exact to="/react-test/" className="nav-text"><HomeIcon/>&nbsp;&nbsp;Главная</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/react-test/todos" className="nav-text"><TodosIcon />&nbsp;&nbsp;Todos</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/react-test/about" className="nav-text"><InfoIcon />&nbsp;&nbsp;Информация</NavLink>
          </li>
        </ul>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon style={{margin: 20, cursor: "pointer", color: "white"}} onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
