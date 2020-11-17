import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import axios from "axios";
import Add from './add';
import StudentList from './list';
const styles = theme => ({
    root: {
        textAlign: "center",
        minHeight: "600px"
    }
});
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
           students:[]
        };
    }
    componentDidMount() {
        this.getStudents();
    }
    getStudents = () => {
        axios.get("/students").then(response => {
            if(response.status===200 && response.data.messageData.status==="Complete"){
                this.setState({students:response.data.messageData.message})
            }
        });
    }
    render() {
        const { classes } = this.props;
    return (
        <div className={classes.root}>
            <h1>Students</h1>
            <Add 
            getStudents = {this.getStudents}
            />
            <StudentList 
            students = {this.state.students}
            />
        </div>
    )
    }    
}
export default withStyles(styles)(Student);