import React, { useEffect } from 'react';
import { Paper, withStyles, Grid } from '@material-ui/core';
import dashboardStyle from './dashboardStyle';
import { bindActionCreators } from 'redux';
import * as dashboardActions from '../../actions/dashboard-actions';
import { connect } from 'react-redux';
import StudentList from './StudentList/StudentList';
import Loader from '../../component/Loader/Loader'
import _ from 'lodash';
import Header from '../../component/Header/Header';

function Dashboard(props) {
    let { classes, awaitingResponse, studentList } = props;

    useEffect(() => {
        if (_.isEmpty(studentList))
            props.fetchStudentList();
    }, []);

    return <>
        <Loader loading={awaitingResponse} />
        <Header />
        <Paper className={classes.root} elevation={1}>
            <Grid container spacing={16} >
                <StudentList />
            </Grid>
        </Paper>
    </>

}

const mapStateToProps = (state) => ({
    awaitingResponse: state.studentReducer.awaitingResponse,
    studentList: state.studentReducer.studentList
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(dashboardActions, dispatch);
}

export default withStyles(dashboardStyle)(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
