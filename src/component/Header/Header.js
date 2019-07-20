import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { TextField, IconButton, Icon } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import * as dashboardActions from '../../actions/dashboard-actions';
import { connect } from 'react-redux';

const styles = {
    toolbarContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    searchContainter: {
        width: '300px',
    }
};

function Header(props) {
    const { classes } = props;
    return <AppBar position="sticky" color="primary">
        <Toolbar className={classes.toolbarContent}>
            <div>
                <Typography variant="h6" color="inherit">
                    Student
                </Typography>
            </div>
            <div className={classes.searchContainter}>
                <TextField
                    label="Search"
                    className={classes.textField}
                    onChange={(e) => props.searchList(e.target.value)}
                    fullWidth
                />
            </div>
            <div className={classes.icon}>
                <IconButton aria-label="Delete" className={classes.margin}>
                    <Icon>sort</Icon>
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin}>
                    <Icon>star</Icon>
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(dashboardActions, dispatch);
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(Header));