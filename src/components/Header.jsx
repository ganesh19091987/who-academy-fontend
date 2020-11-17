/* 

Component : Header

*/
/** ****************************** Import Packages *************************** */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        underline: 'none',
       textDecorationColor:'none'
    },
    homeButton: {
        underline: 'none',
       textDecorationColor:'none'
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => window.location.href='/'} >
                        <HomeIcon className={classes.homeButton}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Button color="inherit" href="/">COURSES</Button>   
                        <Button color="inherit" href="/student">STUDENTS</Button>   
                        <Button color="inherit" href="/author">Authors</Button>   
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}