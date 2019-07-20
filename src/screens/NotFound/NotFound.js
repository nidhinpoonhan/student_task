import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    header: {
        fontSize: 100,
        lineHeight: '100px'
    },
    subHeader: {
        fontSize: 25,
        margin: 20
    }
});


const NotFound = (props) => {
    let { classes } = props;
    return <div className={classes.root}>
        <div className={classes.header}>404</div>
        <div className={classes.subHeader}>OPPS, SORRY WE CAN'T FIND THAT PAGE!</div>
        <Link to="/">Return to Home Page</Link>
    </div>;
}

export default withStyles(styles)(NotFound);
