import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import axios from "axios";
import Add from './add';
import AuthorList from './list';
const styles = theme => ({
    root: {
        textAlign: "center",
        minHeight: "750px"
    }
});
class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
           authors:[]
        };
    }
    componentDidMount() {
        this.getauthors();
    }
    getauthors = () => {
        axios.get("/authors").then(response => {
            if(response.status===200 && response.data.messageData.status==="Complete"){
                this.setState({authors:response.data.messageData.message})
            }
        });
    }
    render() {
        const { classes } = this.props;
    return (
        <div className={classes.root}>
            <h1>Authors</h1>
            <Add 
            getauthors = {this.getauthors}
            />
            <AuthorList 
            authors = {this.state.authors}
            />
        </div>
    )
    }    
}
export default withStyles(styles)(Author);