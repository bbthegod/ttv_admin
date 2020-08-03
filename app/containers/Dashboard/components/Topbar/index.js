import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  logo: { height: 30 },
  topbar: { backgroundColor: theme.palette.primary.main },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
    color: '#FFFFFF',
  },
}));
const Topbar = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar className={classes.topbar}>
        <RouterLink to="/">
          <img
            alt="Logo"
            className={classes.logo}
            src={require('../../../../images/logo.png')}
          />
        </RouterLink>
        <div className={classes.flexGrow} />

        <RouterLink to="/">
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={() => {
              localStorage.clear();
            }}
          >
            <InputIcon />
          </IconButton>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
};

export default Topbar;
