import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Information from './components/Information';
import OtherActions from './components/OtherActions';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Summary = props => {
  const { className, onEditProblem, row, onDelete, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Information row={row} onEditProblem={onEditProblem} />
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <OtherActions onDelete={onDelete} />
      </Grid>
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string,
};

export default Summary;
