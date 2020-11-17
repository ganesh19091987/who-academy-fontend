import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 1,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, studentName, theme) {
    return {
        fontWeight:
            studentName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function StudentSelect(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [studentName, setstudentName] = React.useState([]);

    const handleChange = (event) => {
       let selectedVal = event.target.value;
       let studentIds = [];
       for (let i in selectedVal) {
        for (let j in props.students) {
            if(selectedVal[i]===props.students[j].firstName+" "+props.students[j].lastName){
                studentIds.push(props.students[j].studentId)
            }
        }
      }
      props.onStudentChange(studentIds);
      setstudentName(selectedVal);
    };

    return (
        <React.Fragment>
            <InputLabel id="student-select-label">Student</InputLabel>
            <Select
                labelId="student-select-label"
                id="student-select"
                multiple
                value={studentName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                    <div className={classes.chips}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} className={classes.chip} />
                        ))}
                    </div>
                )}
                MenuProps={MenuProps}
            >
                {
                props.students.length>0?
                props.students.map((student) => (
                    <MenuItem key={student.studentId}  value={student.firstName+" "+student.lastName} style={getStyles(student.firstName+" "+student.lastName, studentName, theme)}>
                        {student.firstName+" "+student.lastName}
                    </MenuItem>
                )):null
                
                }
            </Select>

        </React.Fragment>
    );
}