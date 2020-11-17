import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    table: {
        minWidth: 650,
    },
}));

export default function CourseList(props) {
    const classes = useStyles();
    const courses = props.courses;
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container>
            <Grid item md={12}>
            <div className={classes.root}>
                {
                    
                courses.length>0?        
                courses.map((course,index) => (
                    <Accordion key={"course_"+course.courseId} expanded={expanded === 'panel'+index} onChange={handleChange('panel'+index)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={"panel"+index+"bh-content"}
                            id={"panel"+index+"bh-header"}
                        >
                            <Typography className={classes.heading}>Course Name: {course.name}</Typography>
                            <Typography className={classes.secondaryHeading}>Author Name: {course.authors.firstName+" "+course.authors.lastName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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
                                            course.students.length > 0 ?
                                            course.students.map((student) => (
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
                             
                        </AccordionDetails>
                    </Accordion> )):null
                    }
                </div>
            </Grid>
        </Container>
    );
}