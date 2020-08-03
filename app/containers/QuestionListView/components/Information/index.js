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
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DialogQuestionList from '../../../../components/DialogQuestionList';

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
  const { className, allQuestions, row, onEdit, ...rest } = props;
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      {row ? (
        <>
          <CardHeader title="Thông tin câu hỏi" />
          <Divider />
          <CardContent className={classes.content}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Tên Bộ Câu Hỏi</TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
                <TableRow selected>
                  <TableCell>Số câu hỏi sử dụng</TableCell>
                  <TableCell>{row.usingQuestion}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tổng số câu hỏi</TableCell>
                  <TableCell>{row.questions.length}</TableCell>
                </TableRow>
                <TableRow selected>
                  <TableCell>Ngẫu Nhiên</TableCell>
                  <TableCell>{row.isRandom ? 'True' : 'False'}</TableCell>
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
          <DialogQuestionList
            row={row}
            onClose={() => setOpenEdit(!openEdit)}
            open={openEdit}
            allQuestionsGet={allQuestions}
            isEdit={true}
            handleEdit={onEdit}
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
