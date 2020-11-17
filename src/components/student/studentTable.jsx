import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function StudentTable(props) {
  const classes = useStyles();
 
  const students = props.students;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student ID</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {
          students.length>0 ?
          students.map((student) => (
            <TableRow key={student.studentId}>
              <TableCell component="th" scope="row">
                {student.studentId}
              </TableCell>
              <TableCell >{student.firstName}</TableCell>
              <TableCell>{student.lastName}</TableCell>
            </TableRow>
          ))
        :" "
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}