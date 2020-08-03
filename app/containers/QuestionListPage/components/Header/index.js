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
import DialogQuestionList from '../../../../components/DialogQuestionList';
const useStyles = makeStyles(() => ({
  root: {},
}));
function Header(props) {
  const { className, onCreate, allQuestions, ...rest } = props;
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Quản lý
          </Typography>
          <Typography component="h1" variant="h3">
            Câu Hỏi
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setOpenEdit(true)}
            disabled={localStorage.getItem('role') != 'admin'}
          >
            Tạo mới
          </Button>
        </Grid>
      </Grid>
      <DialogQuestionList
        onClose={() => setOpenEdit(!openEdit)}
        open={openEdit}
        handleCreate={onCreate}
        isEdit={false}
        allQuestionsGet={allQuestions}
      />
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
