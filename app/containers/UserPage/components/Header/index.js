/**
 *
 * Header
 *
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
const useStyles = makeStyles(() => ({
  root: {},
}));
function Header(props) {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Quản lý
          </Typography>
          <Typography component="h1" variant="h3">
            Người Dùng
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            disabled={localStorage.getItem('role') != 'admin'}
          >
            Tạo Mới
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
