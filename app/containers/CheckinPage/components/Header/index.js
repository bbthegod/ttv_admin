/**
 *
 * Header
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import DialogCheckin from '../../../../components/DialogCheckin';
const useStyles = makeStyles(() => ({
  root: {},
}));
//------------------------------------------------------------------------
function Header(props) {
  const { className, onCreate, ...rest } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const role = localStorage.getItem('role');
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Quản lý
          </Typography>
          <Typography component="h1" variant="h3">
            Đăng kí
          </Typography>
        </Grid>

        <Grid item>
          {role == 'admin' || role == 'receptionist' ? (
            <Button
              color="primary"
              variant="contained"
              onClick={() => setOpen(true)}
            >
              Tạo Mới
            </Button>
          ) : null}
        </Grid>
      </Grid>
      <DialogCheckin
        onClose={() => setOpen(!open)}
        open={open}
        onCreate={onCreate}
        isEdit={false}
      />
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
