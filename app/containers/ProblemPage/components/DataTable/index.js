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
  nameCell: {
    display: 'flex',
    alignItems: 'center',
  },
  tableHeader: { backgroundColor: theme.palette.background.paper },
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
                  <TableCell align="center">Tiêu đề</TableCell>
                  <TableCell align="center">Nội Dung</TableCell>
                  <TableCell align="center">Đầu Vào</TableCell>
                  <TableCell align="center">Đầu Ra</TableCell>
                  <TableCell align="center">Điểm</TableCell>
                  <TableCell align="center">Cấp Độ</TableCell>
                  <TableCell align="right">Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  ? rows.map(row => (
                      <TableRow hover key={row._id}>
                        <TableCell align="center">{row.title}</TableCell>
                        <TableCell align="center">{row.content}</TableCell>
                        <TableCell align="center">
                          <pre>{row.input}</pre>
                        </TableCell>
                        <TableCell align="center">
                          <pre>{row.output}</pre>
                        </TableCell>
                        <TableCell align="center">{row.correctScore}</TableCell>
                        <TableCell align="center">{row.level}</TableCell>
                        <TableCell align="right">
                          <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                            onClick={() => {
                              props.history.push(`/problem/${row._id}`);
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
  className: PropTypes.string,
};

export default DataTable;
