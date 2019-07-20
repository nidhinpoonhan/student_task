const studentListStyle = (theme) => ({
    studentCard: {
        cursor: 'pointer',
        transition: 'all 200ms',
        '&:hover': {
            transform: 'scale(1.01)'
        }
    },
    detailsItem: {
        display: 'flex'
    },
    caption: {
        flex: 1,
        fontWeight: 500
    },
    detailsItemValue: {
        flex: 2
    }
});

export default studentListStyle;
