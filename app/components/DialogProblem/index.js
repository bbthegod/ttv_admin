/**
 *
 * DialogQuestion
 *
 */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Button,
  colors,
  TextareaAutosize,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
  },
  container: {
    marginTop: theme.spacing(3),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  closeButton: {
    color: theme.palette.white,
    backgroundColor: colors.blue[500],
    '&:hover': {
      backgroundColor: colors.blue[700],
    },
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[500],
    '&:hover': {
      backgroundColor: colors.green[700],
    },
  },
}));
function DialogQuestion(props) {
  const {
    className,
    open,
    setOpen,
    row,
    onClose,
    handleEdit,
    handleCreate,
    isEdit,
    ...rest
  } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [correctScore, setCorrectScore] = useState('');
  const [level, setLevel] = useState('');
  const classes = useStyles();
  function onSubmit() {
    if (isEdit) {
      handleEdit({
        ...row,
        ...{ title },
        ...{ content },
        ...{ input },
        ...{ output },
        ...{ correctScore },
        ...{ level },
      });
    } else {
      handleCreate({
        ...{ title },
        ...{ content },
        ...{ input },
        ...{ output },
        ...{ correctScore },
        ...{ level },
      });
      onClose();
    }
  }
  function clearData() {
    setTitle('');
    setContent('');
    setInput('');
    setOutput('');
    setCorrectScore('');
    setLevel('');
  }
  useEffect(() => {
    clearData();
    if (row) {
      setTitle(row.title);
      setContent(row.content);
      setInput(row.input);
      setOutput(row.output);
      setCorrectScore(row.correctScore);
      setLevel(row.level);
    }
  }, [props]);
  return (
    <Modal onClose={onClose} open={open}>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <Typography align="center" gutterBottom variant="h3">
            {props.isEdit ? 'Chỉnh sửa câu hỏi' : 'Thêm câu hỏi'}
          </Typography>
          <ValidatorForm onSubmit={onSubmit}>
            <Grid className={classes.container} container spacing={3}>
              <Grid item md={12} xs={12}>
                <TextValidator
                  label="Tiêu đề"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={title}
                  onChange={e => {
                    setTitle(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextValidator
                  label="Nội dung"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={content}
                  onChange={e => {
                    setContent(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Đầu vào
                </Typography>
                <textarea
                  style={{
                    width: '98%',
                    height: '50px',
                  }}
                  rowsMax={4}
                  value={input}
                  onChange={e => {
                    setInput(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Đầu ra
                </Typography>
                <textarea
                  style={{
                    width: '98%',
                    height: '50px',
                  }}
                  rowsMax={4}
                  value={output}
                  onChange={e => {
                    setOutput(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Điểm"
                  variant="outlined"
                  fullWidth
                  type="number"
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={correctScore}
                  onChange={e => {
                    setCorrectScore(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Cấp độ"
                  variant="outlined"
                  fullWidth
                  type="number"
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={level}
                  onChange={e => {
                    setLevel(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </ValidatorForm>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            onClick={onClose}
            variant="contained"
            className={classes.closeButton}
          >
            Đóng
          </Button>
          <Button
            className={classes.saveButton}
            onClick={onClose}
            variant="contained"
            onClick={() => onSubmit()}
          >
            Lưu
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}

DialogQuestion.propTypes = {};

export default DialogQuestion;
