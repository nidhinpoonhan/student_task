const loginStyle = (theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        width: 300,
        height: 350,
        padding: 24,
        textAlign: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        objectFit: 'cover'
    },
    textField: {
        marginTop: 12
    },
    button: {
        marginTop: 24
    },
    errorMessage: {
        marginTop: 16,
        color: theme.status.danger
    },
    error: {
        color: theme.status.danger
    }
});

export default loginStyle;
