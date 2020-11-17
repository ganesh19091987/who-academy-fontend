import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import axios from "axios";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId:0,
            firstname:"",
            lastname:"",
            firstnameError:"",
            lastnameError:"",
            students:[],
        };
    }
    
    handleChange = (event) => {
        let firstname = event.target.value;
        this.setState({firstname})
        if(firstname.length === 0){
            this.setState({firstnameError:"Please enter firstname"})
        }else{
            this.setState({firstnameError:""})
        }
    } 
    handleClick = () => {
        if(this.state.firstname.length === 0){
            this.setState({firstnameError:"Please enter firstname"})
            return;
        }
        if(this.state.lastname.length === 0){
            this.setState({lastnameError:"Please enter lastname"})
            return;
        }
        let params = {
            firstName:this.state.firstname,
            lastName:this.state.lastname
        }
        axios.post("/student",params).then(response => {
            if(response.status===200 && response.data.messageData.status==="Complete"){
                this.props.getStudents();
                this.setState({lastname:"",firstname:""})
            }
        });
    }
   
    onLastNameChange = (event) => {
        let lastname = event.target.value;
        this.setState({lastname})
        if(lastname.length === 0){
            this.setState({lastnameError:"Please enter lastname"})
        }else{
            this.setState({lastnameError:""})
        }
    }

    render() {
        const marginStyle = {
            marginTop:25
          };
    return (
        <Container maxWidth="sm" className="main_container">
            <Grid container alignItems="center">
                <Grid item md={12}>
                    <TextField value={this.state.firstname} onChange={this.handleChange} 
                    error={!!this.state.firstnameError} helperText={this.state.firstnameError} id="outlined-basic" fullWidth label="Enter First Name" multiline variant="outlined" />
                </Grid>
                <Grid item md={12} style={marginStyle}>
                    <TextField value={this.state.lastname} onChange={this.onLastNameChange} 
                    error={!!this.state.lastnameError} helperText={this.state.lastnameError} id="outlined-basic" fullWidth label="Enter Last Name" multiline variant="outlined" />
                </Grid>
                <Grid item md={12}>
                    <Button className="add_todo" variant="contained" color="primary" onClick={this.handleClick}>
                        {this.state.studentId>0 ? "Edit" : "Add"}
                    </Button>
                </Grid>
            </Grid>
           
        </Container>
    )
    }
}

export default Add;