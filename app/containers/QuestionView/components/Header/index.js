import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

function Header(props) {
  const { className, question, ...rest } = props;
  const classes = useStyles();
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography component="h2" gutterBottom variant="overline">
        Câu hỏi
      </Typography>
      <Typography component="h1" variant="h3">
        {question ? question.content : 'Câu hỏi'}
      </Typography>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
