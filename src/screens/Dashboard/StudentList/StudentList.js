import React from 'react';
import studentListStyle from './studentListStyle';
import { withStyles, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import StudentItem from './StudentItem';
import { Link } from 'react-router-dom';

function StudentList(props) {
    let { studentList } = props;
    return Object.keys(studentList).map((item) => {
        return <Grid item sm={12} md={6} lg={4} key={item}>
            <Link to={`/student/${item}`}>
                <StudentItem
                    key={item}
                    details={studentList[item]}
                />
            </Link>
        </Grid>
    })
}

const mapStateToProps = (state) => ({
    studentList: state.studentReducer.searchedList
});

export default withStyles(studentListStyle)(connect(mapStateToProps)(StudentList));