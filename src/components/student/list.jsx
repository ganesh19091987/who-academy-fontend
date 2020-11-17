/* 

Component : List

*/
/** ****************************** Import Packages *************************** */
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
    table: {
        minWidth: 650,
    },
});
class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    render() {
        const students = this.props.students;
        const { classes } = this.props;
        return (
            <Container>
                <Grid item md={12}>
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
                                    students.length > 0 ?
                                        students.map((student) => (
                                            <TableRow key={student.studentId}>
                                                <TableCell component="th" scope="row">
                                                    {student.studentId}
                                                </TableCell>
                                                <TableCell>{student.firstName}</TableCell>
                                                <TableCell>{student.lastName}</TableCell>
                                            </TableRow>
                                        ))
                                        : null
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Container>
        );
    }
}

export default withStyles(styles)(StudentList);