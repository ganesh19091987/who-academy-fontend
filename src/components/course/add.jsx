import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import StudentSelect from './StudentSelect';
import axios from "axios";

const useStyles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 550,
        textAlign:'left'
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
});

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId:0,
            name:"",
            studentId:[],
            authorId:"",
            error:"",
            studentError:"",
            authorError:"",
            students:[],
            authors:[]
        };
    }
    componentDidMount() {
        this.getauthors();
        this.getStudents();
    }
    getauthors = () => {
        axios.get("/authors").then(response => {
            if(response.status===200 && response.data.messageData.status==="Complete"){
                this.setState({authors:response.data.messageData.message})
            }
        });
    }
    getStudents = () => {
        axios.get("/students").then(response => {
            if(response.status===200 && response.data.messageData.status==="Complete"){
                this.setState({students:response.data.messageData.message})
            }
        });
    }
    handleChange = (event) => {
        let name = event.target.value;
        this.setState({name})
        if(name.length === 0){
            this.setState({error:"Please enter name"})
        }else{
            this.setState({error:""})
        }
    } 
    handleClick = () => {
        if(this.state.name.length === 0){
            this.setState({error:"Please enter name"})
            return;
        }
        if(!this.state.studentId){
            this.setState({studentError:"Please select student"})
            return;
        }
        let params = {
            name:this.state.name,
            studentId:this.state.studentId,
            authorId:this.state.authorId
        }
        axios.post("/course",params).then(response => {
            if(response.status===200 && response.data.messageData.status==="Complete"){
                this.props.getCourses();
                this.setState({name:"",authorId:""})
            }
        });
       
    }
   
    onStudentChange = (value) => {
        this.setState({studentId:value})
    }
    onAuthorChange = (event) => {
        this.setState({authorId:event.target.value})
    }
    render() {
        const { classes } = this.props;
    return (
        <Container maxWidth="sm" className="main_container">
            <Grid container alignItems="center">
                <Grid item md={12}>
                    <TextField value={this.state.name} onChange={this.handleChange} 
                    error={!!this.state.error} helperText={this.state.error} id="outlined-basic" fullWidth label="Enter Title" multiline variant="outlined" />
                </Grid>
                <Grid item md={12}>
                <FormControl className={classes.formControl}  error={!!this.state.studentError}>
                   <StudentSelect 
                   onStudentChange = {this.onStudentChange}
                   students = {this.state.students}
                   />
                    <FormHelperText>{this.state.studentError}</FormHelperText>
                 </FormControl>
                </Grid>
                <Grid item md={12}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="author-select-label">Author</InputLabel>
                    <Select
                    labelId="author-select-label"
                    id="author-select"
                    value={this.state.authorId}
                    onChange={this.onAuthorChange}
                    >
                        {
                            this.state.authors.length>0?
                            this.state.authors.map((author) => (
                                <MenuItem key={author.authorId} value={author.authorId}>{author.firstName+" "+author.lastName}</MenuItem>
                                )):null   
                        }
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item md={12}>
                    <Button className="add_todo" variant="contained" color="primary" onClick={this.handleClick}>
                        {this.props.edit ? "Edit" : "Add"}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
    }
}

export default withStyles(useStyles)(Add);