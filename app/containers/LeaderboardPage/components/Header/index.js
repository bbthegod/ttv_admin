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
import DialogUser from '../../../../components/DialogUser';
const useStyles = makeStyles(() => ({
  root: {},
}));
function Header(props) {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h1" variant="h3">
            Bảng Xếp Hạng
          </Typography>
        </Grid>
      </Grid>
      <DialogUser
        onClose={() => setOpenEdit(!openEdit)}
        open={openEdit}
        isEdit={false}
      />
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
