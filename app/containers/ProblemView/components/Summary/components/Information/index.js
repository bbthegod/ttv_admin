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
import DialogProblem from '../../../../../../components/DialogProblem';
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
  const { className, row, onEditProblem, ...rest } = props;
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      {row ? (
        <>
          <CardHeader title="Thông tin sinh viên" />
          <Divider />
          <CardContent className={classes.content}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Tiêu đề</TableCell>
                  <TableCell>{row.title}</TableCell>
                </TableRow>
                <TableRow selected>
                  <TableCell>Nội Dung</TableCell>
                  <TableCell>{row.content}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Đầu Vào</TableCell>
                  <TableCell>
                    <pre>{row.input}</pre>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Đầu Ra</TableCell>
                  <TableCell>
                    <pre>{row.output}</pre>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Điểm</TableCell>
                  <TableCell>{row.correctScore}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cấp Độ</TableCell>
                  <TableCell>{row.level}</TableCell>
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
          </CardActions>
          <DialogProblem
            row={row}
            onClose={() => setOpenEdit(!openEdit)}
            open={openEdit}
            isEdit={true ? 1 : 0}
            handleEdit={onEditProblem}
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
