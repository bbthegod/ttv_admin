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
import DialogProblem from '../../../../components/DialogProblem';
const useStyles = makeStyles(() => ({
  root: {},
}));
function Header(props) {
  const { className, onCreate, ...rest } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Quản lý
          </Typography>
          <Typography component="h1" variant="h3">
            Vấn Đề
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setOpen(true)}
            disabled={localStorage.getItem('role') != 'admin'}
          >
            Tạo mới
          </Button>
        </Grid>
      </Grid>
      <DialogProblem
        onClose={() => setOpen(!open)}
        open={open}
        handleCreate={onCreate}
        isEdit={false}
      />
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
