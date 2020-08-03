import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  colors,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import DialogUser from '../../../../../../components/DialogUser';
import ConfirmDialog from '../../../../../../components/ConfirmDialog';
const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Information(props) {
  const { className, student, onEditUser, onReset, ...rest } = props;
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      {student ? (
        <>
          <CardHeader title="Thông tin sinh viên" />
          <Divider />
          <CardContent className={classes.content}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Mã Sinh Viên</TableCell>
                  <TableCell>{student.studentId}</TableCell>
                </TableRow>
                <TableRow selected>
                  <TableCell>Tên Sinh Viên</TableCell>
                  <TableCell>{student.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lớp - Khoá</TableCell>
                  <TableCell>{student.class}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Số Điện Thoại</TableCell>
                  <TableCell>{student.phone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{student.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vị Trí</TableCell>
                  <TableCell>{student.role}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Trạng thái khoá</TableCell>
                  <TableCell>
                    {student.isLocked ? 'Khoá' : 'Không Khoá'}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Trạng thái hoạt đông</TableCell>
                  <TableCell>
                    {student.isOnline ? 'Hoạt Động' : 'Không Hoạt Động'}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              style={{ marginLeft: 0 }}
              onClick={() => setOpenEdit(true)}
              disabled={localStorage.getItem('role') != 'admin'}
            >
              <EditIcon className={classes.buttonIcon} />
              Sửa
            </Button>
            <Button
              style={{ marginLeft: 0 }}
              onClick={() => setOpen(true)}
              disabled={localStorage.getItem('role') != 'admin'}
            >
              <LockOpenIcon className={classes.buttonIcon} />
              Khôi phục mật khẩu
            </Button>
          </CardActions>
          <DialogUser
            student={student}
            onClose={() => setOpenEdit(!openEdit)}
            open={openEdit}
            isEdit={true ? 1 : 0}
            handleEdit={onEditUser}
          />
          <ConfirmDialog
            open={open}
            setOpen={setOpen}
            message="Đặt lại mật khẩu ?"
            handleAction={() => onReset()}
          />
        </>
      ) : null}
    </Card>
  );
}

Information.propTypes = {
  className: PropTypes.string,
};

export default Information;
