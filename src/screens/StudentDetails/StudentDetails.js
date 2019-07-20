import React, { useEffect, useState } from 'react';
import { Paper, withStyles, Grid, Typography } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import * as dashboardActions from '../../actions/dashboard-actions';
import { connect } from 'react-redux';
import Loader from '../../component/Loader/Loader'
import _ from 'lodash';
import studentDetailsStyle from './studentDetailsStyle';
import { Bar } from 'react-chartjs-2';
import { utils } from '../../utils/utils';


function StudentDetails(props) {
    let { classes, awaitingResponse, studentList } = props;
    const id = _.get(props, 'match.params.id', '');
    const [chartData, setChartData] = useState({});
    const [studentDetails, SetStudentDetails] = useState({})
    useEffect(() => {
        if (_.isEmpty(studentList))
            props.fetchStudentList();
    }, []);

    useEffect(() => {
        if (!_.isEmpty(studentList)) {
            SetStudentDetails(studentList[id]);
            setChartData(utils.getChartData(studentList[id].marks))
        }
    }, [studentList]);
    let { name, rollNo } = studentDetails;
    return <>
        <Loader loading={awaitingResponse} />
        <Paper className={classes.root} elevation={1}>
            <div>
                <Typography className={classes.caption} component="title" inline>Name </Typography>
                <Typography className={classes.caption} component="title" inline>{name} </Typography>
            </div>
            <div>
                <Typography className={classes.caption} component="title" inline>Roll No </Typography>
                <Typography className={classes.caption} component="title" inline>{rollNo} </Typography>
            </div>
            <div className={classes.barContainer}>
                <Bar
                    data={chartData}
                    width={600}
                    height={500}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
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

export default withStyles(studentDetailsStyle)(connect(mapStateToProps, mapDispatchToProps)(StudentDetails));
