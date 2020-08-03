/**
 *
 * DialogQuestionList
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: '70%',
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
  inner: {
    minWidth: 700,
  },
  tableHeader: { backgroundColor: theme.palette.background.paper },
}));
function DialogQuestionList(props) {
  const {
    className,
    open,
    setOpen,
    row,
    onClose,
    handleEdit,
    handleCreate,
    allQuestionsGet,
    isEdit,
    ...rest
  } = props;
  const [name, setName] = useState();
  const [usingQuestion, setUsingQuestion] = useState();
  const [isRandom, setIsRandom] = useState();
  const [questions, setQuestions] = useState();
  const [allQuestions, setAllQuestions] = useState();
  const classes = useStyles();
  // ========================================================================
  useEffect(() => {
    clearData();
    if (row && allQuestionsGet) {
      setName(row.name);
      setUsingQuestion(row.usingQuestion);
      setIsRandom(row.isRandom);
      setQuestions(row.questions);
      setAllQuestions(allQuestionsGet.data);
    }
  }, [props]);
  // ========================================================================
  function onSubmit() {
    if (isEdit) {
      handleEdit({
        ...row,
        ...{ name },
        ...{ usingQuestion },
        ...{ isRandom },
        ...{ questions: choosenQuestion() },
      });
    } else {
      handleCreate({
        ...{ name },
        ...{ usingQuestion },
        ...{ isRandom },
        ...{ questions: choosenQuestion() },
      });
      onClose();
    }
  }
  function clearData() {
    setName();
    setUsingQuestion();
    setIsRandom();
    setQuestions();
    setAllQuestions();
  }
  function choosenQuestion() {
    let array = [];
    questions.map(item => {
      array.push(item.questionId._id);
    });
    return array;
  }
  function isChecked(item) {
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].questionId._id === item._id) {
        return true;
      }
    }
    return false;
  }
  function deleting(item) {
    let array = [];
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].questionId._id != item._id) {
        array.push(questions[i]);
      }
    }
    setQuestions(array);
  }
  function adding(item) {
    let array = [...questions];
    array.push({ questionId: item });
    setQuestions(array);
  }
  // ========================================================================
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
                  label="Tên Bộ Câu Hỏi"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Số Câu Hỏi Sử Dụng"
                  variant="outlined"
                  fullWidth
                  validators={['required']}
                  errorMessages={['This field is required']}
                  value={usingQuestion}
                  onChange={e => {
                    setUsingQuestion(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  label="Ngẫu Nhiên"
                  variant="outlined"
                  fullWidth
                  select
                  SelectProps={{
                    native: true,
                  }}
                  value={isRandom}
                  onChange={e => {
                    setIsRandom(e.target.value);
                  }}
                >
                  <option value={'true'}>True</option>
                  <option value={'false'}>False</option>
                </TextValidator>
              </Grid>
            </Grid>
          </ValidatorForm>
          <Card style={{ marginTop: 20, height: 500, overflow: 'scroll' }}>
            <div className={classes.inner}>
              <Table stickyHeader>
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                    <TableCell align="center" />
                    <TableCell align="center">Nội Dung</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allQuestions
                    ? allQuestions.map(row => {
                        if (isChecked(row)) {
                          return (
                            <TableRow
                              hover
                              key={row._id}
                              style={{ backgroundColor: '#CFD8DC' }}
                            >
                              <TableCell align="center">
                                <Button
                                  color="primary"
                                  size="small"
                                  variant="outlined"
                                  onClick={() => deleting(row)}
                                >
                                  Bỏ Chọn
                                </Button>
                              </TableCell>
                              <TableCell align="center">
                                {row.content}
                              </TableCell>
                            </TableRow>
                          );
                        } else {
                          return (
                            <TableRow hover key={row._id}>
                              <TableCell align="center">
                                <Button
                                  color="primary"
                                  size="small"
                                  variant="outlined"
                                  onClick={() => adding(row)}
                                >
                                  Chọn
                                </Button>
                              </TableCell>
                              <TableCell align="center">
                                {row.content}
                              </TableCell>
                            </TableRow>
                          );
                        }
                      })
                    : null}
                </TableBody>
              </Table>
            </div>
          </Card>
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

DialogQuestionList.propTypes = {};

export default DialogQuestionList;
