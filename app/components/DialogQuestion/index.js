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
  TextField,
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
    question,
    onClose,
    handleEdit,
    handleCreate,
    isEdit,
    ...rest
  } = props;
  const [content, setContent] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [score, setScore] = useState('');
  const [answer1, setanswer1] = useState('');
  const [answer2, setanswer2] = useState('');
  const [answer3, setanswer3] = useState('');
  const [answer4, setanswer4] = useState('');
  const classes = useStyles();
  function onSubmit() {
    if (isEdit) {
      handleEdit({
        ...question,
        ...{ content },
        ...{ correctAnswer },
        ...{ score },
        ...{ answer1 },
        ...{ answer2 },
        ...{ answer3 },
        ...{ answer4 },
      });
    } else {
      handleCreate({
        ...{ content },
        ...{ correctAnswer },
        ...{ score },
        ...{ answer1 },
        ...{ answer2 },
        ...{ answer3 },
        ...{ answer4 },
      });
      onClose();
    }
  }
  function clearData() {
    setContent('');
    setCorrectAnswer('');
    setanswer1('');
    setanswer2('');
    setanswer3('');
    setanswer4('');
    setScore('');
  }
  useEffect(() => {
    clearData();
    if (question) {
      setContent(question.content);
      setCorrectAnswer(question.correctAnswer);
      setScore(question.score);
      setanswer1(question.options[0].answer);
      setanswer2(question.options[1].answer);
      setanswer3(question.options[2].answer);
      setanswer4(question.options[3].answer);
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
                <TextValidator
                  label="Câu trả lời thứ 1"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={answer1}
                  onChange={e => {
                    setanswer1(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Câu trả lời thứ 2"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={answer2}
                  onChange={e => {
                    setanswer2(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Câu trả lời thứ 3"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={answer3}
                  onChange={e => {
                    setanswer3(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Câu trả lời thứ 4"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={answer4}
                  onChange={e => {
                    setanswer4(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  variant="outlined"
                  style={{ width: '100%' }}
                  select
                  label="Câu trả lời đúng"
                  value={correctAnswer}
                  SelectProps={{
                    native: true,
                  }}
                  disabled={
                    answer1 == '' ||
                    answer2 == '' ||
                    answer3 == '' ||
                    answer4 == ''
                      ? true
                      : false
                  }
                  onChange={e => {
                    setCorrectAnswer(e.target.value);
                  }}
                >
                  <option value={answer1}>{answer1}</option>
                  <option value={answer2}>{answer2}</option>
                  <option value={answer3}>{answer3}</option>
                  <option value={answer4}>{answer4}</option>
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Điểm"
                  variant="outlined"
                  fullWidth
                  type="number"
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={score}
                  onChange={e => {
                    setScore(e.target.value);
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
