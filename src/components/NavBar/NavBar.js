import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = props => {
    return(
        <div>
        <AppBar position="static" {...props}>
            <Toolbar>
                <Typography variant="headline" color="inherit" align="center">
                Clicky Game: Click on an image to earn points, but don't click on any more than once! 
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;