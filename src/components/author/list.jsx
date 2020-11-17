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
class AuthorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    render() {
        const authors = this.props.authors;
        const { classes } = this.props;
        return (
            <Container>
                <Grid item md={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Author ID</TableCell>
                                    <TableCell>FirstName</TableCell>
                                    <TableCell>LastName</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                    authors.length > 0 ?
                                        authors.map((author) => (
                                            <TableRow key={author.authorId}>
                                                <TableCell component="th" scope="row">
                                                    {author.authorId}
                                                </TableCell>
                                                <TableCell>{author.firstName}</TableCell>
                                                <TableCell>{author.lastName}</TableCell>
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

export default withStyles(styles)(AuthorList);