import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: { padding: '10px 20px' },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
  tableHeader: { backgroundColor: theme.palette.background.paper },
  nameCell: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end',
  },
  page: {
    margin: '10px 0',
  },
}));

const Question = props => {
  const { className, questions, ...rest } = props;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //===========================================================================
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  //===========================================================================
  useEffect(() => {
    if (questions) {
      setRows(
        questions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
      );
      setCount(questions.length);
    }
  }, [page, rowsPerPage]);
  //===========================================================================
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
        className={classes.page}
      >
        {`${count} Bản ghi được tìm thấy. Trang ${page + 1} trên ${Math.ceil(
          count / rowsPerPage,
        )}`}
      </Typography>
      <Card>
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell align="center">Nội Dung</TableCell>
                  <TableCell align="center">Câu Trả Lời 1</TableCell>
                  <TableCell align="center">Câu Trả Lời 2</TableCell>
                  <TableCell align="center">Câu Trả Lời 3</TableCell>
                  <TableCell align="center">Câu Trả Lời 4</TableCell>
                  <TableCell align="center">Câu Trả Lời Đúng</TableCell>
                  <TableCell align="center">Điểm</TableCell>
                  <TableCell align="right">Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  ? rows.map(row => (
                      <TableRow hover key={row._id}>
                        <TableCell align="center">
                          {row.questionId.content}
                        </TableCell>
                        <TableCell align="center">
                          {row.questionId.options[0].answer}
                        </TableCell>
                        <TableCell align="center">
                          {row.questionId.options[1].answer}
                        </TableCell>
                        <TableCell align="center">
                          {row.questionId.options[2].answer}
                        </TableCell>
                        <TableCell align="center">
                          {row.questionId.options[3].answer}
                        </TableCell>
                        <TableCell align="center">
                          {row.questionId.correctAnswer}
                        </TableCell>
                        <TableCell align="center">
                          {row.questionId.score}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                            onClick={() => {
                              props.history.push(
                                `/question/${row.questionId._id}`,
                              );
                            }}
                          >
                            XEM
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            labelRowsPerPage="Số bản ghi mỗi trang"
            component="div"
            count={count}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
    </div>
  );
};

Question.propTypes = {
  className: PropTypes.string,
};

Question.defaultProps = {};

export default Question;
