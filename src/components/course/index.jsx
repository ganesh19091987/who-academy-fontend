import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import axios from "axios";
import Add from './add';
import CourseList from './list';
const styles = theme => ({
    root: {
        textAlign: "center",
        minHeight: "700px"
    }
});
class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
           courses:[]
        };
    }
    componentDidMount() {
        this.getCourses();
    }
    getCourses = () => {
        axios.get("/courses").then(response => {
            if(response.status===200 && response.data.messageData.status==="Complete"){
                this.setState({courses:response.data.messageData.message})
            }
        });
    }
    render() {
        const { classes } = this.props;
    return (
        <div className={classes.root}>
            <h1>Courses</h1>
            <Add 
            getCourses = {this.getCourses}
            />
            <CourseList
            courses = {this.state.courses}
            />
        </div>
    )
    }    
}
export default withStyles(styles)(Course);