import React from 'react';
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
  root: {},
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
function DataTable(props) {
  const {
    rowsPerPage,
    page,
    count,
    rows,
    handleChangePage,
    handleChangeRowsPerPage,
    className,
    ...rest
  } = props;

  const classes = useStyles();
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
                  <TableCell align="center">Nội dung</TableCell>
                  <TableCell align="center">Câu trả lời 1</TableCell>
                  <TableCell align="center">Câu trả lời 2</TableCell>
                  <TableCell align="center">Câu trả lời 3</TableCell>
                  <TableCell align="center">Câu trả lời 4</TableCell>
                  <TableCell align="center">Câu trả đúng</TableCell>
                  <TableCell align="center">Điểm</TableCell>
                  <TableCell align="right">Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  ? rows.map(row => (
                      <TableRow hover key={row._id}>
                        <TableCell align="center">{row.content}</TableCell>
                        <TableCell align="center">
                          {row.options[0].answer}
                        </TableCell>
                        <TableCell align="center">
                          {row.options[1].answer}
                        </TableCell>
                        <TableCell align="center">
                          {row.options[2].answer}
                        </TableCell>
                        <TableCell align="center">
                          {row.options[3].answer}
                        </TableCell>
                        <TableCell align="center">
                          {row.correctAnswer}
                        </TableCell>
                        <TableCell align="center">{row.score}</TableCell>
                        <TableCell align="right">
                          <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                            onClick={() => {
                              props.history.push(`/question/${row._id}`);
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
}

DataTable.propTypes = {
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  count: PropTypes.number,
  rows: PropTypes.array,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  className: PropTypes.string,
};

export default DataTable;
