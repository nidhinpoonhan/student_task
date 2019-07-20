import React from 'react';
import { Fade, CircularProgress, withStyles } from '@material-ui/core';

const useStyles = (theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        background: 'rgba(0,0,0,0.2)',
        top: 0, left: 0, right: 0, bottom: 0
    },
});

function Loader(props) {
    let { loading, classes } = props;
    if (loading)
        return <div className={classes.root}>
            <Fade
                in={loading}
                style={{
                    transitionDelay: loading ? '800ms' : '0ms',
                }}
                unmountOnExit
            >
                <CircularProgress />
            </Fade>
        </div>
    return null;
}

export default withStyles(useStyles)(Loader);