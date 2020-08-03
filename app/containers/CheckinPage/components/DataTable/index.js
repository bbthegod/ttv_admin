import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Checkbox,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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
import DialogCheckin from '../../../../components/DialogCheckin';
import ConfirmDialog from '../../../../components/ConfirmDialog';
function DataTable(props) {
  const {
    rowsPerPage,
    page,
    count,
    rows,
    order,
    handleChangePage,
    handleChangeRowsPerPage,
    handleChangeSort,
    className,
    onEdit,
    onDelete,
    ...rest
  } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
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
                  <TableCell align="center">Mã Sinh Viên</TableCell>
                  <TableCell align="center">Tên Sinh Viên</TableCell>
                  <TableCell align="center">Trạng Thái</TableCell>
                  <TableCell align="center">Hành Động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  ? rows.map(row => (
                      <TableRow hover key={row._id}>
                        <TableCell align="center">{row.studentId}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">
                          <Checkbox
                            checked={row.isExam}
                            onChange={e => {
                              onEdit({
                                ...row,
                                ...{ isExam: e.target.checked },
                              });
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            onClick={() => {
                              setRow(row);
                              setOpenDelete(true);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              setRow(row);
                              setOpen(true);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
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
            rowsPerPageOptions={[25, 50, 100]}
          />
        </CardActions>
      </Card>
      <DialogCheckin
        onClose={() => setOpen(!open)}
        row={row}
        open={open}
        onEdit={onEdit}
        isEdit={true}
      />
      <ConfirmDialog
        open={openDelete}
        setOpen={setOpenDelete}
        message="Bạn có muốn xoá người này"
        handleAction={() => onDelete(row._id)}
      />
    </div>
  );
}

DataTable.propTypes = {
  className: PropTypes.string,
};

export default DataTable;
