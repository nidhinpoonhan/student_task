let utils = {
    getChartData: (data) => {
        let labels = [], values = [];
        Object.keys(data).forEach((item) => {
            labels.push(item);
            values.push(data[item]);
        });
        return {
            labels,
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: values
                }
            ]
        };
    }
}

export { utils };
