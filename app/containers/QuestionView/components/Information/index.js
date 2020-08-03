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
import DialogQuestion from '../../../../components/DialogQuestion';

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
  const { className, question, onEdit, ...rest } = props;
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      {question ? (
        <>
          <CardHeader title="Thông tin câu hỏi" />
          <Divider />
          <CardContent className={classes.content}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Nội dung</TableCell>
                  <TableCell>{question.content}</TableCell>
                </TableRow>
                <TableRow selected>
                  <TableCell>Câu trả lời đúng</TableCell>
                  <TableCell>{question.correctAnswer}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Câu trả lời thứ 1</TableCell>
                  <TableCell>{question.options[0].answer}</TableCell>
                </TableRow>
                <TableRow selected>
                  <TableCell>Câu trả lời thứ 2</TableCell>
                  <TableCell>{question.options[1].answer}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Câu trả lời thứ 3</TableCell>
                  <TableCell>{question.options[2].answer}</TableCell>
                </TableRow>
                <TableRow selected>
                  <TableCell>Câu trả lời thứ 4</TableCell>
                  <TableCell>{question.options[3].answer}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Điểm</TableCell>
                  <TableCell>{question.score}</TableCell>
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
          <DialogQuestion
            question={question}
            onClose={() => setOpenEdit(!openEdit)}
            open={openEdit}
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
