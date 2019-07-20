import React from 'react';
import { withStyles, Card, CardContent, Typography, } from '@material-ui/core';
import studentListStyle from './studentListStyle';
import _ from 'lodash';

function StudentItem(props) {
    let { classes, details = {} } = props,
        studentName = _.get(details, 'name', ''),
        marks = _.get(details, 'marks'),
        studentRollNo = _.get(details, 'rollNo', ''),

        totalMark = Object.keys(marks).reduce((totalMark, subj) => totalMark + marks[subj], 0);
    return <Card className={classes.studentCard}>
        <CardContent>
            <div className={classes.detailsItem}>
                <Typography className={classes.caption} component="title" inline>Name </Typography>
                <Typography className={classes.detailsItemValue} component="span" inline>{studentName}</Typography>
            </div>
            <div className={classes.detailsItem}>
                <Typography className={classes.caption} component="title" inline>Total Mark </Typography>
                <Typography className={classes.detailsItemValue} component="span" inline>{totalMark}</Typography>
            </div>
            <div className={classes.detailsItem}>
                <Typography className={classes.caption} component="title" inline>Roll </Typography>
                <Typography className={classes.detailsItemValue} component="span" inline>{studentRollNo}</Typography>
            </div>

        </CardContent>
    </Card>
}

export default withStyles(studentListStyle)(StudentItem);